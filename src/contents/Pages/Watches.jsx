import React, { Suspense, lazy, useEffect, useState } from "react";
import SingleProduct from "../Components/SingleProduct";
import useShowPanels from "../customHooks/useShowPanels";
import SearchOptions from "../Components/SearchOptions";
import { WatchOnlyList } from "../Lists/WatchList";
import { useSearchParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../customHooks/ReactQuery";
import SearchDrawer from "../Components/SearchDrawer";
import SearchChip from "../Components/SearchChip";
import { Box, CircularProgress } from "@mui/material";
const Footer = lazy(() => import("../Components/Footer"));

const NoResultComponent = lazy(() => import("../Components/NoResultComponent"));

const Watches = () => {
  const { currentState } = useShowPanels();
  const [searchParams] = useSearchParams();

  const {
    isLoading: loading,
    error: failed,
    status,
    data,
  } = useGetAllProductsQuery();

  const [prod, setProd] = useState([]);
  const [entry] = searchParams.entries();
  useEffect(() => {
    if (data) {
      if (searchParams.size === 0) {
        setProd(
          data.products.filter((item) => item.type.toLowerCase() === "watches")
        );
      } else {
        if (entry[0] === "gender") {
          setProd(
            data.products.filter(
              (item) =>
                item.type.toLowerCase() === "watches" &&
                item.gender === `${entry[1]}`
            )
          );
        }
        if (entry[0] === "categories") {
          setProd(
            data.products.filter(
              (item) =>
                item.type.toLowerCase() === "watches" &&
                item.categories === `${entry[1]}`
            )
          );
        }
        if (entry[0] === "price") {
          setProd(
            data.products.filter(
              (item) => item.type.toLowerCase() === "watches"
            )
          );
        }
        if (entry[0] === "occasions") {
          setProd(
            data.products.filter(
              (item) =>
                item.type.toLowerCase() === "watches" &&
                item.occasions === `${entry[1]}`
            )
          );
        }
        if (entry[0] === "display") {
          setProd(
            data.products.filter(
              (item) =>
                item.type.toLowerCase() === "watches" &&
                item.display === `${entry[1]}`
            )
          );
        }
      }
    }
  }, [data, searchParams]);

  if (loading) {
    return (
      <div className="default width-100-p hei-300-px ali-ite-cnt justify-con-cnt">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    );
  }
  if (failed) {
    return <div>failed</div>;
  }
  if (status === "pending") {
    return (
      <div>
        <div className="default width-100-p hei-300-px ali-ite-cnt justify-con-cnt">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="default width-100-p  padd-lef-10px padd-rig-10px ali-ite-cnt">
        <div className="default flex-dir-row width-100-p max-wid-1000-px gap-10-px ali-ite-cnt  ">
          {(currentState === "verylowWidth" || currentState === "lowWidth") && (
            <>
              <SearchDrawer item={WatchOnlyList[0]} />
              <SearchChip />
            </>
          )}
        </div>

        <div className="default flex-dir-row width-100-p max-wid-1280-px ">
          {!(
            currentState === "lowWidth" || currentState === "verylowWidth"
          ) && (
            <div className="default flex-gro-1 flex-shr-1 flex-ali-end ">
              <div className="default wid-250-px bg-col-whi bor-sty-sol bor-lef-wid-1px bor-rig-wid-1px bor-top-wid-1px bor-col-lig-2">
                <SearchOptions item={WatchOnlyList[0]} />
              </div>
            </div>
          )}
          <div className="default width-70-p flex-gro-1 flex-shr-1 flex-ali-str min-hei-80-vh ">
            <div className="default  width-100-p height-100-p ">
              {!(
                currentState === "verylowWidth" || currentState === "lowWidth"
              ) && (
                <div className="default width-100-p hei-33-px padd-lef-24px  flex-ali-str ">
                  <SearchChip />
                </div>
              )}
              {prod && entry && prod.length < 1 && !(entry.length < 1) ? (
                <Suspense fallback={<></>}>
                  <NoResultComponent />
                </Suspense>
              ) : (
                <SingleProduct
                  data={prod}
                  w1={"grid-col-4"}
                  w2={"grid-col-3"}
                  w3={"grid-col-3"}
                  w4={"grid-col-3"}
                  w5={"grid-col-2"}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<></>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Watches;
