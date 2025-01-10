"use client";

import {
  CartProductType,
  selectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: selectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return (
    <div
      className="
  grid
  grid-cols-6
  h-full
  max-h-[500px]
  min-h-[300px]
  sm:min-h-[400px]
  "
    >
      <div
        className="
        flex
        flex-col
        items-center
        justify-center
        gap-4
        cursor-pointer
        border
        h-full
        max-h-[500px]
        min-h-[300px]
         sm:min-h-[400px]
        "
      >
        {product.images.map((image: selectedImgType) => {
          return (
            <div
              key={image.color}
              onClick={() => handleColorSelect(image)}
              className={`relative aspect-square w-[80%] rounded border-teal-300 ${
                cartProduct.selectedImg.color === image.color
                  ? "border-[1.5px]"
                  : "border-none"
              }`}
            >
              <Image
                src={image.image}
                alt={image.color}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          src={cartProduct.selectedImg.image}
          alt={cartProduct.name}
          fill
          className="
          w-full
          h-full
          object-contain
          max-h-[500px]
        min-h-[300px]
         sm:min-h-[400px]
          "
        />
      </div>
    </div>
  );
};

export default ProductImage;
