import React from "react";

import ItemMenu from "./SingleItem";
import useShowPanels from "../customHooks/useShowPanels";
import useFetchWindowSize from "../customHooks/FetchWindowSize";

const SingleProduct = ({ w1, w2, w3, w4, w5, data }) => {
  const { currentState } = useShowPanels();
  const { windowSize } = useFetchWindowSize();

  return (
    <>
      <div className="default flex ali-ite-cnt  width-100-p mak-ele-uns ">
        <div
          className={`default  dis-grid max-wid-1280-px flex-gro-1 padd-rig-10-px  padd-lef-10-px  bg-col-whi flex-shr-1  ${
            currentState === "fullWidth"
              ? w1
              : currentState === "highWidth"
              ? w2
              : currentState === "mediumWidth"
              ? w3
              : currentState === "lowWidth"
              ? w4
              : currentState === "verylowWidth"
              ? w5
              : ""
          } `}
        >
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className={`default width-100-p asp-rat-2-4 ${
                  !(
                    currentState === "verylowWidth" ||
                    currentState === "lowWidth"
                  ) && "card-anim"
                } `}
                style={{
                  height: windowSize.winWidth < 280 && "170px",
                  animationTimeline: "view()",
                }}
              >
                <ItemMenu
                  id={item.id}
                  name={item.name}
                  img={item.imageUrl[0]}
                  price={item.price}
                  ratings={item.ratings}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
