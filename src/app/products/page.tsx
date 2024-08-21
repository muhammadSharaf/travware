"use client";

import ProductsList from "@/components/products/ProductsList";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import NavBar from "@/components/nav/NavBar";

const Products = () => {
  const productsData = useRef<Product[]>();
  const [products, setProducts] = useState<Product[]>([]);

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
      const data = await res.json();

      productsData.current = data;
      setProducts(data);
    })();
  }, []);

  return (
    <>
      <NavBar>
        <div className={"w-1/2 pe-2"}>
          <input
            className={
              "flex w-full p-4 text-gray-500 leading-tight rounded-xl shadow-sm"
            }
            type="search"
            onChange={onSearch}
            placeholder="Search"
          />
        </div>
      </NavBar>

      <ProductsList products={products} isLoading={!productsData.current} />
    </>
  );
};

export default Products;
