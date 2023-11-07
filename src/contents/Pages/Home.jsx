import React, { lazy, useEffect, useState } from "react";
import FeaturedComponent from "../Components/FeaturedComponent";
import ItemMenu from "../Components/SingleItem2";
import { HomePageList1 } from "../Lists/HomePageList1";
import useShowPanels from "../customHooks/useShowPanels";
import TwoRowsThreeItems from "../Components/HomeBanners/TwoRowsThreeItems";
import { HomePageEyeglassList1 } from "../Lists/HomePageEyeglassList1";
import HorOverflocComp from "../Components/HorOverflocComp";
import IIIColumn2RowsBanner from "../Components/IIIColumn2RowsBanner";
import SingleProduct from "../Components/SingleProduct";
import Heading from "../Components/Heading";
import { v4 as uuidv4 } from "uuid";

import { useGetAllProductsQuery } from "../customHooks/ReactQuery";

import SnackBarIdGen from "../Components/SnackBarIdGen";
import Footer from "../Components/Footer";

const Home = () => {
  const { currentState } = useShowPanels();
  const { data, error, isLoading, status } = useGetAllProductsQuery();

  const [prod, setProd] = useState([]);
  useEffect(() => {
    if (data) {
      setProd(
        data.products.filter((item) => item.tags.toLowerCase() === "featured")
      );
    }
  }, [data]);
  if (isLoading) {
    return <></>;
  }
  if (error) {
    return <></>;
  }
  if (status === "pending") {
    return <></>;
  }
  return (
    <div>
      <div
        className={`default bot10 gap-20-px
      `}
      >
        <div
          id="featured-item-container"
          className={`default width-100-p mar-bot-30px`}
        >
          <FeaturedComponent />
        </div>
        <div>
          <Heading title={"Most Searched"} />
        </div>
        <div className="default flex-dir-col ali-ite-cnt bg-col-whi mar-bot-30px ">
          <div
            className={`default flex-dir-row flex-wrap-1 justify-con-cnt ${
              currentState === "verylowWidth"
                ? "dis-grid grid-col-3 "
                : currentState === "lowWidth"
                ? "gap-ver-15-hor-60-px dis-grid grid-col-3"
                : currentState === "mediumWidth"
                ? "gap-ver-20-hor-100-px"
                : "gap-ver-50-hor-120-px"
            } `}
          >
            {HomePageList1.map((item) => {
              const { name, img, url } = item;
              return (
                <div
                  key={uuidv4()}
                  className={`default ali-ite-cnt justify-con-cnt ${
                    currentState === "verylowWidth" &&
                    "padd-rig-10-px  padd-lef-10-px  padd-bot-10-px  padd-top-10-px "
                  } mak-ele-uns max-wid-150-px`}
                >
                  <ItemMenu name={name} img={img} url={url} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Heading title={"Offers ending soon"} />
        </div>
        <div className="default ali-ite-cnt bg-col-whi mar-bot-30px">
          <TwoRowsThreeItems />
        </div>
        <div>
          <Heading title={"Most viewed eye glasses"} />
        </div>
        <div
          className={`default bg-col-whi mar-bot-30px ${
            currentState === "fullWidth" ? " ali-ite-cnt " : ""
          } `}
        >
          <div className="default mar-rig-aut mar-lef-aut max-wid-1280-px  padd-lef-10-px padd-rig-10-px ">
            <div
              className={`default  dis-grid  grid-aut-flo-col ${
                currentState === "fullWidth" || currentState === "highWidth"
                  ? "grid-aut-col-33"
                  : "grid-aut-col-50"
              }  gap-10-px over-flw-x-aut  over-flw-y-hid`}
            >
              {HomePageEyeglassList1.map((item) => {
                return (
                  <HorOverflocComp
                    key={uuidv4()}
                    item={item}
                    asR={"img-asp-rat-4-2  "}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <Heading title={"Special price"} />
        </div>
        <div className="default ali-ite-cnt mar-bot-30px">
          <IIIColumn2RowsBanner />
        </div>
        <div>
          <Heading title={"Featured items"} />
        </div>
        {data && (
          <div className="default flex-dir-row justify-con-cnt ">
            <SingleProduct
              data={prod}
              w1={"grid-col-4"}
              w2={"grid-col-4"}
              w3={"grid-col-3"}
              w4={"grid-col-3"}
              w5={"grid-col-2"}
            />
          </div>
        )}

        {currentState === "verylowWidth" && (
          <div
            className="default"
            style={{ height: "60px ", width: "100px" }}
          ></div>
        )}
      </div>
      <Footer />
      <SnackBarIdGen />
    </div>
  );
};

export default Home;
//<div className="default bg-colo-blu height-100-p"></div>
