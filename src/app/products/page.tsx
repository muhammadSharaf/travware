"use client";

import ProductsList from "@/components/products/ProductsList";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import NavBar from "@/components/nav/NavBar";
import FiltersContainer from "@/components/filters/FiltersContainer";
import { usePathname, useSearchParams } from "next/navigation";
import FilterType from "@/enums/FilterType";
import SortType from "@/enums/SortType";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import CartProduct from "@/types/CartProduct.type";
import { addToCart, removeProduct } from "@/lib/slices/cartSlice";
import { RootState } from "@/lib/store";

const Products = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  const { products: cartProducts } = useAppSelector(
    (state: RootState) => state.cart,
  );

  const productsData = useRef<Product[]>();
  const [products, setProducts] = useState<Product[]>([]);
  const searchQuery = useRef<string>("");

  const sortPrice = searchParams.get(FilterType.PRICE) as SortType;
  const sortName = searchParams.get(FilterType.NAME) as SortType;
  const minPrice =
    parseInt(searchParams.get(FilterType.PRICE_MIN) as string) || 0;
  const maxPrice =
    parseInt(searchParams.get(FilterType.PRICE_MAX) as string) || 300;

  const onSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    value = value.trim();

    setProducts((): Product[] => {
      if (!productsData.current) return [];

      if (!value || value === "") {
        searchQuery.current = "";
        return productsData.current ?? [];
      }

      searchQuery.current = value;

      return productsData.current.filter((product: Product): boolean => {
        return product.name.toLowerCase().includes(value.toLowerCase());
      });
    });
  }, []);

  const onAddToCart = useCallback((product: CartProduct) => {
    dispatch(addToCart(product));
  }, []);

  const onRemoveFromCart = useCallback((product: CartProduct) => {
    dispatch(removeProduct(product));
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products.json`,
      );
      let data: Product[] = await res.json();

      data = data.filter(
        (product: Product) =>
          product.price >= minPrice && product.price <= maxPrice,
      );

      if (sortPrice)
        data.sort(
          (a: Product, b: Product) =>
            (a.price - b.price) * (sortPrice === SortType.ASC ? 1 : -1),
        );

      if (sortName)
        data.sort((a: Product, b: Product) =>
          sortName === SortType.ASC
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name),
        );

      productsData.current = data;
      setProducts(data);
    })();
  }, [searchParams]);

  return (
    <>
      <NavBar productsCount={cartProducts.length}>
        <div className={"w-full p-0 md:pe-2"}>
          <input
            className={"flex w-full p-4 rounded-xl shadow-sm"}
            type="search"
            onChange={onSearch}
            placeholder="Search"
          />
        </div>
      </NavBar>

      <FiltersContainer
        route={pathname}
        sortPriceParam={sortPrice}
        sortNameParam={sortName}
        minPriceParam={minPrice}
        maxPriceParam={maxPrice}
      />

      <ProductsList
        products={products}
        cartProducts={cartProducts}
        isLoading={!productsData.current}
        onAddToCart={(product: CartProduct) => onAddToCart(product)}
        onRemoveFromCart={(product: CartProduct) => onRemoveFromCart(product)}
        searchQuery={searchQuery.current}
      />
    </>
  );
};

export default Products;
