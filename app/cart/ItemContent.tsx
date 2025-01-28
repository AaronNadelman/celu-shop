"use client";
import { formatPrice } from "@/utils/formatPrice";
import { CartProductType } from "../product/[productId]/ProductDetails";
import Link from "next/link";
import Image from "next/image";
import { truncateText } from "@/utils/truncateText";
import SetQuantity from "../components/products/SetQuantity";

interface itemContentProps {
  item: CartProductType;
}
const ItemContent: React.FC<itemContentProps> = ({ item }) => {
  return (
    <div
      className="
  grid
  grid-cols-5
  text-xs
  md:text-sm
  gap-4
  border-t-[1.5px]
  py-4
  items-center
  "
    >
      <div className="relative w-[70px] h-[70px]">
        <Image
          src={item.selectedImg.image}
          alt={item.selectedImg.color}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw  "
          className="object-contain"
        />
      </div>
      <div className="cols-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`/product/${item.id}`}>
          <div></div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
        </div>
        <div>{item.selectedImg.color}</div>
        <div className="w-[70px] ">
          <button className="text-slate-500 underline" onClick={() => {}}>
            Remove
          </button>
        </div>
      </div>
      <div>{formatPrice(item.price)}</div>
      <div className="justify-self-center">
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleQuantityIncrease={() => {}}
          handleQuantityDecrease={() => {}}
        />
      </div>
      <div className="justify-self-end font-semibold">
        {item.price * item.quantity}
      </div>
    </div>
  );
};

export default ItemContent;
