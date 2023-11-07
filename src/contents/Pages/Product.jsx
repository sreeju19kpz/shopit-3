import React, { Suspense, lazy, useEffect, useState } from "react";

import useShowPanels from "../customHooks/useShowPanels";
import { Await, defer, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Components/Feature/cartSlice";
import { purchaseItem } from "../Components/Feature/PurchaseSlice";
import ItemMenu from "../Components/SingleItem";
import { TotalRating } from "../Components/RatingComponent";
import ProductReview from "../Components/ProductReview";
import PostReview from "../Components/PostReview";
import { v4 as uuidv4 } from "uuid";
import { useGetAllProductsQuery } from "../customHooks/ReactQuery";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { getProd } from "../customHooks/api";
import Footer from "../Components/Footer";

export function loader(id) {
  return defer({ prod: getProd(id) });
}

const Product = () => {
  const {
    data: allData,
    isLoading: isloading,
    error: isfalied,
  } = useGetAllProductsQuery();

  const data = useLoaderData();
  const [isPurchased, setIsPurchased] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [isUserPostedReview, setIsUserPostedReview] = useState(false);
  const { purchasedItems } = useSelector((store) => store.purchase);
  const dispatch = useDispatch();
  const { currentState } = useShowPanels();
  const updateReview = (review) => {
    const uReviews = [...reviews, review];
    setReviews(uReviews);
  };

  function setRev(data) {
    setReviews(data.ratings);
  }
  function checkIsPurchased(id) {
    if (purchasedItems.length < 1) return;
    if (purchasedItems.find((item) => item.id === id)) {
      setIsPurchased(true);
    } else setIsPurchased(false);
  }

  function ReturnElements(data) {
    useEffect(() => {
      if (
        reviews.find((item) => (item.name.toLowerCase() === "sree") === true)
      ) {
        setIsUserPostedReview(true);
      } else setIsUserPostedReview(false);
    }, [data, reviews]);
    useEffect(() => {
      checkIsPurchased(data.id);
    }, [data, purchasedItems]);
    useEffect(() => {
      setRev(data);
    }, [data]);
    return (
      <>
        <div className="default flex-dir-col flex-gro-1 gap-ver-20-hor-0-px ">
          <section
            className={`default ${
              currentState === "fullWidth" ||
              currentState === "highWidth" ||
              currentState === "mediumWidth"
                ? "flex-dir-row "
                : "flex-dir-col gap-ver-15-hor-30-px "
            } width-100-p `}
          >
            <div
              className={`default flex-gro-1 flex-shr-1 ${
                currentState === "fullWidth" || currentState === "highWidth"
                  ? "flex-ali-end "
                  : "ali-ite-cnt"
              }`}
            >
              <div
                className={`default padd-lef-10-px padd-rig-10-px  ${
                  currentState === "fullWidth" || currentState === "highWidth"
                    ? ""
                    : currentState === "lowWidth"
                    ? "width-70-p "
                    : "width-100-p"
                }`}
              >
                <div className="default width-100-p ">
                  <img
                    src={data.imageUrl[0]}
                    alt=""
                    className="max-wid-480-px"
                  />
                </div>
                {!(currentState === "verylowWidth") && (
                  <div className="default flex-gro-1 ">
                    <div className="default flex-dir-row width-100p  justify-con-spc-btw">
                      {data.imageUrl.map((img) => {
                        return (
                          <img
                            key={uuidv4()}
                            style={{ width: "60px" }}
                            src={img}
                            alt=""
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              className={`default flex-gro-1  flex-shr-1 flex-ali-str   ${
                currentState === "fullWidth" || currentState === "highWidth"
                  ? "top100 padd-lef-60px "
                  : " padd-rig-10-px  padd-lef-10-px "
              }   `}
            >
              <div
                className={`default gap-30-px height-100-p ${
                  currentState === "verylowWidth"
                    ? "padd-top-10-px  padd-bot-10-px  padd-lef-10-px  padd-rig-10-px "
                    : "pad-30-px"
                }  bor--rad-2-dvb ${
                  currentState === "fullWidth" || currentState === "highWidth"
                    ? ""
                    : "width-100-p"
                }`}
              >
                <div className="default flex-gro-1 gap-30-px">
                  <div className="default font-siz-24-px ">{data.name}</div>
                  <div className="default font-siz-18-px">
                    {data.shortDescription}
                  </div>
                  {data.ratings && (
                    <div className={`default  flex-ali-str flex-gro-1`}>
                      <TotalRating ratings={reviews} size={""} />
                    </div>
                  )}
                  <div>
                    <div className="default gap-10-px ">
                      <div className="default font-siz-24-px font-wei-500">{`Rs: ${data.price}`}</div>
                      <div className="default flex-dir-row gap-10-px ali-ite-cnt">
                        <div className="font-siz-20-px font-col-light">{`- 50%`}</div>
                        <div className="font-col-link font-siz-12-px text-dec-cen-lin bor-col-gold  ">{`M.R.P  : ${
                          data.price * 2
                        }`}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="default flex-gro-1 gap-30-px ">
                  <div
                    className={`default width-100-p  ${
                      currentState === "lowWidth" && "ali-ite-cnt"
                    }`}
                  >
                    <div
                      className={`default justify-con-spc-btw gap-20-px flex-gro-1  ${
                        !(currentState === "verylowWidth") && "flex-dir-row "
                      } ${currentState === "lowWidth" && "width-100-p"}`}
                    >
                      <div
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id: data.id,
                              price: data.price,
                              name: data.name,
                              img: data.imageUrl[0],
                            })
                          )
                        }
                        className={`default flex-dir-row hei-50-px bg-col-whi  bor-sty-sol
                      bor-wid-1px  bor--rad-1-dvb flex-gro-1  ali-ite-cnt justify-con-cnt cur-sty-oh-poi btn-col-cng-on-hov
                      ${
                        currentState === "verylowWidth"
                          ? "width-100-p"
                          : currentState === "lowWidth"
                          ? "width-50-p"
                          : "wid-150-px "
                      }`}
                      >
                        <span className="default mak-ele-uns">Add to cart</span>
                        <span></span>
                      </div>
                      <div
                        onClick={() => dispatch(purchaseItem({ id: data.id }))}
                        className={`default flex-dir-row bor--rad-1-dvb hei-50-px flex-gro-1 
                       background-col-low-red ali-ite-cnt justify-con-cnt cur-sty-oh-poi btn-col-cng-on-hov
                       ${
                         currentState === "verylowWidth"
                           ? "width-100-p"
                           : currentState === "lowWidth"
                           ? "width-50-p"
                           : "wid-150-px "
                       }`}
                      >
                        <span className="default mak-ele-uns ">buy now</span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className="default flex-dir-row max-wid-400-px width-100-p justify-con-spc-btw">
                    <div>
                      <img
                        className="wid-33-px"
                        src={
                          "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                        }
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="wid-33-px"
                        src={
                          "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
                        }
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="wid-33-px"
                        src={
                          "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="default justify-con-cnt ali-ite-cnt padd-lef-10-px padd-rig-10-px ">
            <div
              className={`default background-col-low-cream ${
                currentState === "verylowWidth"
                  ? "padd-lef-10-px padd-rig-10-px padd-bot-10-px padd-top-10-px"
                  : "pad-30-px "
              }  bor--rad-2-dvb max-wid-1000-px width-100-p lin-hei-24-px`}
            >
              <div className="default gap-ver-20-hor-0-px max-wid-800-px width-100-p">
                <span className="font-wei-500 font-siz-20-px ">
                  Important :
                </span>
                <ul className="default padd-lef-24px padd-rig-24px ">
                  <li>
                    <span className="font-wei-600"> Care Instructions</span> :
                    It is important to clean and maintain them regularly. Just
                    spray some Aqualens solution on your lenses and wipe them
                    with a microfibre cloth to keep your lenses smudge-free.
                  </li>
                  <li>
                    <span className="font-wei-600">ABOUTTHE BRAND </span> :- The
                    Vincent Chase collection features some of the most stylish
                    and trendy sunglasses for men and women. Available in a
                    variety of colours and shapes, it ensures you always stand
                    out with your unique style.
                  </li>
                  <li>
                    <span className="font-wei-600"> FRAME PATTERN</span> :-
                    Featuring Grey Full Rim Square made from Polycarbonate which
                    is thinner and lighter than normal plastic making them ideal
                    for both men & women.
                  </li>
                  <li>
                    <span className="font-wei-600"> FRAME SIZE</span> :- Large |
                    Frame width: 145mm | Frame Height: 44mm | Frame Dimensions:
                    (56-19-140)mm
                  </li>
                  <li>
                    <span className="font-wei-600">FRAME STYLE</span> :- Square
                    Sunglasses have been an iconic part of fashion history for
                    decades. These Sunglasses make the wearer look smart and
                    fashionable at the same time and are a must have for those
                    who have an affinity towards vintage styles. These frame
                    suits all face types
                  </li>
                  <li>
                    <span className="font-wei-600">LENS TECHNOLOGY</span> :-
                    They have scratch coating, blocks 100% harmful UV rays up to
                    400 nm and are very lightweight and highly impact resistant.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="default justify-con-cnt ali-ite-cnt padd-lef-10-px padd-rig-10-px  ">
            <div
              className={`default background-col-low-cream ${
                currentState === "verylowWidth"
                  ? "padd-lef-10-px padd-rig-10-px padd-bot-10-px padd-top-10-px"
                  : "pad-30-px "
              } bor--rad-2-dvb max-wid-1000-px width-100-p lin-hei-24-px`}
            >
              <div className="default gap-ver-20-hor-0-px max-wid-800-px width-100-p ">
                <div className="font-wei-500 font-siz-20-px">
                  Product Details
                </div>
                <ul className="default  padd-lef-24px padd-rig-24px ">
                  <li>
                    <span className="font-wei-600">Product Dimensions ‏ </span>{" "}
                    : ‎ 5.6 x 5.6 x 4.4 cm; 26 Grams
                  </li>
                  <li>
                    <span className="font-wei-600">
                      {" "}
                      Date First Available ‏{" "}
                    </span>
                    : ‎ 13 July 2021
                  </li>
                  <li>
                    <span className="font-wei-600"> Manufacturer ‏</span> : ‎
                    Baofeng Framekart Technology Limited
                  </li>
                  <li>
                    <span className="font-wei-600">ASIN ‏ </span>: ‎ B0999SJPWC
                  </li>
                  <li>
                    <span className="font-wei-600"> Item model number ‏ </span>:
                    ‎ VC S13973 v
                  </li>
                  <li>
                    <span className="font-wei-600"> Country of Origin ‏ </span>:
                    ‎ China
                  </li>
                  <li>
                    <span className="font-wei-600">Department ‏</span> : ‎
                    Unisex
                  </li>
                  <li>
                    <span className="font-wei-600">Manufacturer ‏</span> : ‎
                    Baofeng Framekart Technology Limited, Baofeng Framekart
                    Technology Limited
                  </li>
                  <li>
                    <span className="font-wei-600"> Packer ‏ </span>: ‎ Lenskart
                    Solutions Private Limited
                  </li>
                  <li>
                    <span className="font-wei-600"> Importer ‏ </span>: ‎
                    Lenskart Solutions Private Limited Item
                  </li>
                  <li>
                    <span className="font-wei-600"> Weight ‏ </span>: ‎ 26 g
                    Item
                  </li>
                  <li>
                    <span className="font-wei-600"> Dimensions LxWxH ‏ </span>:
                    ‎ 5.6 x 5.6 x 4.4 Centimeters
                  </li>
                  <li>
                    <span className="font-wei-600"> Net Quantity ‏ </span>: ‎
                    1.00 count
                  </li>
                  <li>
                    <span className="font-wei-600"> Generic Name ‏</span> :
                    ‎Sunglasses
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="default width-100-p  ali-ite-cnt ">
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
          </div>

          <div className="default width-100-p  ">
            <div className="default width-100-p mar-lef-aut  mar-rig-aut justify-con-cnt gap-ver-20-hor-0-px ">
              <>
                {isPurchased && !isUserPostedReview ? (
                  <div className="default width-100-p ali-ite-cnt  ">
                    <div
                      className={`default justify-con-cnt flex-ali-end width-100-p max-wid-1280-px ali-ite-cnt padd-lef-10-px padd-rig-10-px`}
                    >
                      {<PostReview updateReview={updateReview} />}
                    </div>
                  </div>
                ) : isPurchased && isUserPostedReview ? (
                  <></>
                ) : (
                  <div className="default width-100-p ali-ite-cnt  ">
                    <div className="default width-100-p  ">
                      <div className="default width-100-p  ">
                        <div className="default ali-ite-cnt justify-con-cnt ">
                          <div className="default width-100-p ali-ite-cnt justify-con-cnt">
                            <div
                              className={`default hei-120-px bor-sty-sol bor-col-lig-2 bor-wid-1px  bor--rad-1-dvb width-100-p max-wid-1280-px ali-ite-cnt justify-con-cnt`}
                            >
                              <span>buy this item to post a review</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="default flex-dir-col ali-ite-cnt">
                  {reviews.length > 0 ? (
                    reviews.map((item) => {
                      return <ProductReview key={uuidv4()} {...item} />;
                    })
                  ) : (
                    <>
                      <div className="default width-100-p ali-ite-cnt justify-con-cnt">
                        <div className="default width-100-p max-wid-1280-px hei-300-px justify-con-cnt ali-ite-cnt font-siz-18-px font-wei-500 padd-lef-10-px padd-rig-10-px padd-bot-10-px padd-top-10-px bor-sty-sol bor-col-lig-2 bor-wid-1px  bor--rad-1-dvb">
                          <span className="">No reviews yet</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
  return (
    <div className="default width-100-p bg-col-whi">
      <Suspense
        fallback={
          <div className="default width-100-p hei-300-px ali-ite-cnt justify-con-cnt">
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </div>
        }
      >
        <Await resolve={data.prod}>{ReturnElements}</Await>
      </Suspense>
    </div>
  );
};

export default Product;

/*
useQuery({
    queryKey: ["todos"],
    queryFn: async ({ params }) => {
      fetch(`/api/products/${params.id}`).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
    },
  });
 */
