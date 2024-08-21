"use client";

import React from "react";
import NavBar from "@/components/nav/NavBar";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import ProductCart from "@/components/products/ProductCart";
import CartProduct from "@/types/CartProduct.type";
import ButtonMain from "@/components/elements/buttons/ButtonMain";
import {
  addToCart,
  checkout,
  decreaseProduct,
  removeProduct,
} from "@/lib/slices/cartSlice";
import Header from "@/components/elements/headers/Header";

const Page = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state: RootState) => state.cart);

  const onAddProduct = (product: CartProduct) => {
    dispatch(addToCart(product));
  };

  const onDecreaseProduct = (product: CartProduct) => {
    dispatch(decreaseProduct(product));
  };

  const onRemoveProduct = (product: CartProduct) => {
    dispatch(removeProduct(product));
  };

  const onCheckout = () => {
    dispatch(checkout());
  };

  const totalPrice = products.reduce(
    (acc: number, cur: CartProduct) => acc + cur.price * cur.count,
    0,
  );

  const renderProducts = products.map((product: CartProduct) => {
    return (
      <ProductCart
        key={product.id}
        product={product}
        onAdd={onAddProduct}
        onDecrease={onDecreaseProduct}
        onRemove={onRemoveProduct}
      />
    );
  });

  return (
    <>
      <NavBar productsCount={products.length} />

      {renderProducts}
      {products.length > 0 ? (
        <div
          className={
            "flex flex-col md:flex-row w-full items-center justify-between mt-12"
          }
        >
          <h1
            className={"flex flex-1 text-2xl mb-4 md:mb-0"}
          >{`Total Price: $${totalPrice.toFixed(2)}`}</h1>
          <ButtonMain
            title={"Checkout"}
            style={"flex-1 !p-2.5"}
            onClick={onCheckout}
          />
        </div>
      ) : (
        <Header title={"Cart is empty."} style={"mt-48"} />
      )}
    </>
  );
};

export default Page;
