import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/Feature/CartItem";
import useShowPanels from "../customHooks/useShowPanels";
import { Link } from "react-router-dom";
import { clearCart } from "../Components/Feature/cartSlice";

import ItemMenu from "../Components/SingleItem";
import { useGetAllProductsQuery } from "../customHooks/ReactQuery";
import { lazy } from "react";
import { v4 as uuidv4 } from "uuid";
import Footer from "../Components/Footer";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const { currentState } = useShowPanels();
  const dispatch = useDispatch();
  const {
    isLoading: isloading,
    error: isfalied,
    data: allData,
  } = useGetAllProductsQuery();

  if (amount < 1) {
    return (
      <div className="default ali-ite-cnt ">
        <section className="default width-100-p  ali-ite-cnt gap-7-px ">
          <div className="default width-100-p min-hei-80-vh ">
            <header className="default ali-ite-cnt">
              <h2 className="default ali-ite-cnt pad-30-px font-siz-30-px ">
                Your Cart
              </h2>
              <span className="default ali-ite-cnt font-wei-700">Is Empty</span>
            </header>

            <div className="default hei-500-px ali-ite-cnt justify-con-cnt">
              <Link
                to={"/"}
                className="default text-dec-non  bor-sty-sol bor-wid-1px bor-col wid-200-px hei-45-px ali-ite-cnt justify-con-cnt bor--rad-5-px "
              >
                <span className="default">Continue shopping</span>
              </Link>
            </div>
          </div>
          <div className="default max-wid-1280-px width-100-p justify-con-cnt  over-flw-y-aut">
            <div
              className={`default  dis-grid grid-aut-flo-col  ${
                currentState === "verylowWidth"
                  ? " grid-aut-col-50 "
                  : currentState === "lowWidth"
                  ? "grid-aut-col-33"
                  : currentState === "mediumWidth"
                  ? "grid-aut-col-25"
                  : currentState === "highWidth"
                  ? "grid-aut-col-20"
                  : "grid-aut-col-17 "
              }`}
            >
              {!isloading &&
                !isfalied &&
                allData.products.map((item) => {
                  if (item.recomend === true) {
                    return (
                      <div key={uuidv4()} className="default asp-rat-2-4 ">
                        <ItemMenu
                          id={item.id}
                          name={item.name}
                          img={item.imageUrl[0]}
                          price={item.price}
                          ratings={item.ratings}
                        />
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  return (
    <div className="default ali-ite-cnt ">
      <section
        className={`default ${
          currentState === "verylowWidth"
            ? "width-100-p padd-rig-10-px padd-lef-10-px  "
            : ""
        }`}
      >
        <div className="default width-100-p  min-hei-80-vh">
          <div className="default flex-gro-1">
            <header className="default ali-ite-cnt ">
              <h2 className="default font-siz-30-px ">Your Cart </h2>
            </header>
            <div className="default bor-sty-sol bor-col bor-bot-wid-1px padd-bot-24px min-hei-500-px ali-ite-cnt flex-gro-1">
              <div className="default gap-20-px width-100-p ali-ite-cnt padd-lef-10-px padd-rig-10-px ">
                {cartItems.map((item) => {
                  return (
                    <div
                      key={uuidv4()}
                      className={`default max-wid-800-px width-100-p bor-sty-sol  bor-col-gold-2 bor--rad-2-dvb bor-sty-sol bor-wid-1px   ${
                        currentState === "verylowWidth" ? "" : "hei-120-px"
                      } `}
                    >
                      <CartItem {...item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="default width-100-p   ">
            <div className="default width-100-p  ">
              <div className="default flex-dir-row max-wid-800-px flex-gro-1  ">
                <div className="default flex-gro-1">
                  <a
                    onClick={() => dispatch(clearCart())}
                    className="default wid-120-px hei-33-px ali-ite-cnt justify-con-cnt background-col-none font-col-blue "
                  >
                    <span className="default cur-sty-oh-poi">Clear cart</span>
                  </a>
                </div>
                <div className="default flex-dir-row wid-150-px flex-ali-end">
                  <div className="default flex-gro-1 hei-33-px ali-ite-cnt justify-con-cnt">
                    Total :
                  </div>
                  <div className="default flex-gro-1 hei-33-px ali-ite-cnt justify-con-cnt">
                    {total}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`default ${
            currentState === "fullWidth" || currentState === "highWidth"
              ? "max-wid-1280-px"
              : "width-100-p"
          } justify-con-cnt  over-flw-y-aut`}
        >
          <div
            className={`default  dis-grid grid-aut-flo-col  ${
              currentState === "verylowWidth"
                ? " grid-aut-col-50 "
                : currentState === "lowWidth"
                ? "grid-aut-col-33"
                : currentState === "mediumWidth"
                ? "grid-aut-col-25"
                : currentState === "highWidth"
                ? "grid-aut-col-20"
                : "grid-aut-col-17 "
            }`}
          >
            {!isloading &&
              !isfalied &&
              allData.products.map((item) => {
                if (item.recomend === true) {
                  return (
                    <div key={uuidv4()} className="default asp-rat-2-4 ">
                      <ItemMenu
                        id={item.id}
                        name={item.name}
                        img={item.imageUrl[0]}
                        price={item.price}
                        ratings={item.ratings}
                      />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CartContainer;
