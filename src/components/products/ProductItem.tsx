import React from "react";
import Image from "next/image";
import ButtonMain from "@/components/elements/buttons/ButtonMain";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <li className={"flex flex-1 shadow-sm"}>
      <div className={"flex flex-1 flex-col bg-white rounded-xl"}>
        <div className={"h-[200px] relative m-4"}>
          <Image
            src={product.image}
            layout={"fill"}
            objectFit={"contain"}
            alt={product.name}
          />
        </div>
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
