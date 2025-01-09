"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { dividerClasses } from "@mui/material";

interface SetQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQuantityIncrease: () => void;
  handleQuantityDecrease: () => void;
}

const btnStyles = "border-[1.2px] border-slate-300 px-2 rounded ";

const SetQuantity: React.FC<SetQuantityProps> = ({
  cartProduct,
  cartCounter,
  handleQuantityIncrease,
  handleQuantityDecrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
      <div className="flex gap-4 items-center">
        {cartCounter ? null : <div className="font-semibold">QUANTITY:</div>}
        <div className="flex gap-4 items-center text-base">
          <button onClick={handleQuantityDecrease} className={btnStyles}>
            -
          </button>
          <div>{cartProduct.quantity}</div>
          <button onClick={handleQuantityIncrease} className={btnStyles}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetQuantity;
