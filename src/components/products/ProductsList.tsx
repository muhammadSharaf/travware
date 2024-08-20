import ProductItem from "@/components/products/ProductItem";
import React from "react";

const ProductsList: React.FC<{ products: Product[] }> = ({ products }) => {
  const productItems = products.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });

  return <ul className={"w-full grid grid-cols-4 gap-4"}>{productItems}</ul>;
};

export default ProductsList;
