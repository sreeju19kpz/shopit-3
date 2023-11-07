import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeProdctFromCart,
  removeSingleFromCart,
} from "../Feature/cartSlice";
import useShowPanels from "../../customHooks/useShowPanels";
import { Link } from "react-router-dom";

const CartItem = ({ id, img, name, quantity, price }) => {
  const { currentState } = useShowPanels();
  const dispatch = useDispatch();
  return (
    <div
      className={`default width-100-p height-100-p  ${
        currentState === "verylowWidth" ? "flex-dir-col" : "flex-dir-row"
      } `}
    >
      <div className="default flex-dir-row flex-gro-1 text-dec-non">
        <Link to={`/${id}`} className="default">
          <div className="default  wid-120-px height-100-p img-asp-rat-1-1 padd-bot-10px padd-top-10-px padd-lef-10-px padd-rig-10-px">
            <img className="default img-fit-cov  " src={img} alt={name} />
          </div>
        </Link>
        <div className="default flex-gro-1  flex-shr-1 padd-lef-10-px  padd-rig-10-px ">
          <div className="default flex-dir-row flex-gro-1 lex-shr-1 ">
            <div className="default flex-gro-1 flex-shr-1 padd-top-24px ">
              <div className="default width-100-p">
                <div className="default width-100-p font-siz-20-px">{name}</div>
              </div>
              <div className="default width-100-p">
                <div className="default font-col-light">₹{price}</div>
              </div>
              <div className="default wid-100-px ">
                <button
                  className="default   background-col-none flex-ali-str wid-fit-con cur-sty-oh-poi "
                  onClick={() => {
                    dispatch(removeProdctFromCart({ id: id }));
                  }}
                >
                  <span className="default font-col-blue">Remove item</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`default  justify-con-cnt ali-ite-cnt   ${
          currentState === "verylowWidth"
            ? "flex-dir-row pad-10-px"
            : "flex-dir-col pad-30-px"
        }`}
      >
        <div className="default ">
          <button
            className="default width-100-p hei-33-px  wid-33-px background-col-none ali-ite-cnt justify-con-cnt cur-sty-oh-poi"
            onClick={() => {
              dispatch(addToCart({ id: id }));
            }}
          >
            <div className="default wid-22-px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="default width-100-p hei-33-px  wid-33-px ali-ite-cnt justify-con-cnt">
          <div className="default width-100-p text-ali-cnt">{quantity}</div>
        </div>
        <div className="default ">
          <button
            className="default width-100-p hei-33-px wid-33-px background-col-none ali-ite-cnt justify-con-cnt cur-sty-oh-poi"
            onClick={() => {
              if (quantity === 1) {
                dispatch(removeProdctFromCart({ id: id }));
                return;
              }
              dispatch(removeSingleFromCart({ id: id }));
            }}
          >
            <div className="default wid-22-px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
