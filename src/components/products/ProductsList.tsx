import ProductItem from "@/components/products/ProductItem";
import React from "react";
import Header from "@/components/elements/headers/Header";
import CartProduct from "@/types/CartProduct.type";

interface Props {
  products: Product[];
  cartProducts: Product[];
  isLoading: boolean;
  onAddToCart: (product: CartProduct) => void;
  onRemoveFromCart: (product: CartProduct) => void;
  searchQuery?: string;
}

const ProductsList: React.FC<Props> = ({
  products,
  cartProducts,
  isLoading,
  onAddToCart,
  onRemoveFromCart,
  searchQuery,
}) => {
  const productItems = products.map((product) => {
    return (
      <ProductItem
        key={product.id}
        product={product}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        searchQuery={searchQuery}
        inCart={cartProducts.findIndex((p) => p.id === product.id) > -1}
      />
    );
  });

  if (isLoading) {
    return <Header title={"Fetching products..."} style={"mt-48"} />;
  } else if (products.length === 0) {
    return <Header title={"No products found."} style={"mt-48"} />;
  }

  return (
    <ul
      className={"w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"}
    >
      {productItems}
    </ul>
  );
};

export default ProductsList;
