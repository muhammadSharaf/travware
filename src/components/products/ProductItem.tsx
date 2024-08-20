import React from "react";
import Image from "next/image";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <li className={"flex"}>
      <div className={"bg-white sborder rounded-2xl overflow-hidden"}>
        <div className={"h-[200px] relative m-4"}>
          <Image
            src={product.image}
            layout={"fill"}
            objectFit={"contain"}
            alt={product.name}
          />
        </div>
        <div className={"flex flex-col items-center p-4 gap-1"}>
          <div>
            <h1 className={"text-xl font-bold"}>{product.name}</h1>
            <p>{product.description}</p>
          </div>

          <div>
            <h1>{`$${product.price}`}</h1>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
