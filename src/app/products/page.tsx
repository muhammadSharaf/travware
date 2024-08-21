"use client";

import ButtonNavigation from "@/components/elements/buttons/ButtonNavigation";
import ProductsList from "@/components/products/ProductsList";
import {
  ChangeEvent,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

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
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12">
      <div className="flex flex-1 flex-col z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex">
        <nav
          className={"flex flex-row w-full items-center justify-between mb-12"}
        >
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
          <div>
            <ButtonNavigation title={"Products"} goTo={"/products"} />
            <ButtonNavigation title={"Cart"} goTo={"/cart"} />
          </div>
        </nav>

        <Suspense fallback={null}>
          <ProductsList products={products} />
        </Suspense>
      </div>
    </main>
  );
};

export default Products;
