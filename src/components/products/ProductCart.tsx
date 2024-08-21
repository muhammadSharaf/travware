import React from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ButtonMain from "@/components/elements/buttons/ButtonMain";
import CartProduct from "@/types/CartProduct.type";

interface Props {
  product: CartProduct;
  onAdd: (product: CartProduct) => void;
  onDecrease: (product: CartProduct) => void;
  onRemove: (product: CartProduct) => void;
}

const ProductCart: React.FC<Props> = ({
  product,
  onAdd,
  onDecrease,
  onRemove,
}) => {
  return (
    <li
      className={
        "flex h-60 flex-row w-full bg-white rounded-xl shadow-sm mb-4 p-4"
      }
    >
      <div className={"flex w-80 relative"}>
        <Image
          src={product.images[0]}
          layout={"fill"}
          objectFit={"contain"}
          alt={product.name}
        />
      </div>

      <div className={"flex flex-1 flex-col justify-between p-4"}>
        <div className={"flex-1"}>
          <div className={"mb-4"}>
            <h1 className={"text-xl font-bold mb-2"}>{product.name}</h1>
            <p>{product.description}</p>
          </div>

          <h1 className={"text-xl font-bold mb-2"}>{`$${product.price}`}</h1>
        </div>

        <div className={"flex flex-row justify-between"}>
          <div className={"flex flex-row gap-4 items-center"}>
            <ButtonMain
              title={"-"}
              style={
                "w-auto !text-primary p-4 bg-transparent border border-primary"
              }
              onClick={() => onDecrease(product)}
            />
            <h1 className={"text-xl"}>{product.count}</h1>
            <ButtonMain
              title={"+"}
              style={"w-auto p-4"}
              onClick={() => onAdd(product)}
            />
          </div>
          <ButtonMain
            title={"Remove"}
            style={"w-auto p-4"}
            onClick={() => onRemove(product)}
          />
        </div>
      </div>
    </li>
  );
};

export default ProductCart;
