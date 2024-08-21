import ProductItem from "@/components/products/ProductItem";
import React from "react";
import Header from "@/components/elements/headers/Header";

const ProductsList: React.FC<{ products: Product[]; isLoading: boolean }> = ({
  products,
  isLoading,
}) => {
  const productItems = products.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });

  if (isLoading) {
    return <Header title={"Fetching products..."} />;
  } else if (products.length === 0) {
    return <Header title={"No products found."} />;
  }

  return <ul className={"w-full grid grid-cols-4 gap-4"}>{productItems}</ul>;
};

export default ProductsList;
