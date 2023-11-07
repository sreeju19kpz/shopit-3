import React from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const { amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return <></>;
  }
  return (
    <div className="default pos-set-abs z-ind-3 bg-col-yel hei-18-px wid-18-px ali-ite-cnt justify-con-cnt bor--rad-50-p right0 top0">
      <div className="default ali-ite-cnt justify-con-cnt">
        <span className="default ">{amount}</span>
      </div>
    </div>
  );
};

export default CartTotal;
