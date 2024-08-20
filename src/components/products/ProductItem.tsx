"use client";

import React from "react";
import Image from "next/image";
import ButtonMain from "@/components/elements/buttons/ButtonMain";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
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
            <h1 className={"text-xl font-bold"}>{product.name}</h1>
            <p>{product.description}</p>
          </div>

          <div>
            <h1 className={"text-xl font-bold mb-2"}>{`$${product.price}`}</h1>
            <ButtonMain title={"Add to Cart"} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
