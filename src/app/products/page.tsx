"use client";

import ProductsList from "@/components/products/ProductsList";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import NavBar from "@/components/nav/NavBar";
import FiltersContainer from "@/components/filters/FiltersContainer";
import { usePathname, useSearchParams } from "next/navigation";
import FilterType from "@/enums/FilterType";
import SortType from "@/enums/SortType";

const Products = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const productsData = useRef<Product[]>();
  const [products, setProducts] = useState<Product[]>([]);

  const sortPrice = searchParams.get(FilterType.PRICE) as SortType;
  const sortName = searchParams.get(FilterType.NAME) as SortType;
  const minPrice =
    (parseInt(searchParams.get(FilterType.PRICE_MIN) as string) as number) ?? 0;
  const maxPrice =
    (parseInt(searchParams.get(FilterType.PRICE_MAX) as string) as number) ??
    300;

  console.log("maxPrice", maxPrice);

  const onSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    value = value.trim();

    setProducts((): Product[] => {
      if (!productsData.current) return [];

      if (!value || value === "") {
        return productsData.current ?? [];
      }

      return productsData.current.filter((product: Product): boolean => {
        return product.name.toLowerCase().includes(value.toLowerCase());
      });
    });
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
      <NavBar>
        <div className={"w-1/2 pe-2"}>
          <input
            className={"flex w-full p-4 text-gray-500 rounded-xl shadow-sm"}
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

      <ProductsList products={products} isLoading={!productsData.current} />
    </>
  );
};

export default Products;
