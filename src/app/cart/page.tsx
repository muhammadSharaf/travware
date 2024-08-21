"use client";

import React, { useCallback } from "react";
import NavBar from "@/components/nav/NavBar";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";

const Page = () => {
  const { products } = useAppSelector((state: RootState) => state.cart);

  console.log("products", products);

  return (
    <>
      <NavBar />
    </>
  );
};

export default Page;
