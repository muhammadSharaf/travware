"use client";

import React from "react";
import Image from "next/image";
import ButtonMain from "@/components/elements/buttons/ButtonMain";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import CartProduct from "@/types/CartProduct.type";

interface Props {
  product: Product;
  onAddToCart: (product: CartProduct) => void;
  searchQuery?: string;
}

const highlightText = (text: string, query?: string) => {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(
    regex,
    '<span style="background-color: #FD7E1488"}>$1</span>',
  );
};

const ProductItem: React.FC<Props> = ({
  product,
  onAddToCart,
  searchQuery,
}) => {
  const images = product.images.map((image, i) => {
    return (
      <SwiperSlide key={i} className={"pb-8"}>
        <div className={"h-[200px]"}>
          <Image
            src={image}
            className={"max-h-[200px]"}
            layout={"fill"}
            objectFit={"contain"}
            alt={product.name}
          />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <li className={"flex flex-1 flex-col bg-white rounded-xl shadow-sm"}>
      <div className={"flex flex-1 flex-col"}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className={"w-full mt-4"}
        >
          {images}
        </Swiper>

        <div className={"flex flex-1 flex-col justify-between p-4"}>
          <div className={"mb-4"}>
            <h1
              className={"text-xl font-bold mb-2"}
              dangerouslySetInnerHTML={{
                __html: highlightText(product.name, searchQuery),
              }}
            />
            <p>{product.description}</p>
          </div>

          <div>
            <h1 className={"text-xl font-bold mb-2"}>{`$${product.price}`}</h1>
            <ButtonMain
              title={"Add to Cart"}
              onClick={() => onAddToCart(product as CartProduct)}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
