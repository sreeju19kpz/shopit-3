import React, { Suspense, lazy, useEffect, useState } from "react";
import SingleProduct from "../Components/SingleProduct";
import useShowPanels from "../customHooks/useShowPanels";
import { GlassOnlyList } from "../Lists/GlassList";
import { useSearchParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../customHooks/ReactQuery";
import SearchDrawer from "../Components/SearchDrawer";
import SearchChip from "../Components/SearchChip";
import { Box, CircularProgress } from "@mui/material";
import SearchOptions from "../Components/SearchOptions";
const Footer = lazy(() => import("../Components/Footer"));

const NoResultComponent = lazy(() => import("../Components/NoResultComponent"));

const Glasses = () => {
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
          data.products.filter((item) => item.type.toLowerCase() === "glasses")
        );
      } else {
        if (entry[0] === "gender") {
          setProd(
            data.products.filter(
              (item) =>
                item.type.toLowerCase() === "glasses" &&
                item.gender === `${entry[1]}`
            )
          );
        }
        if (entry[0] === "categories") {
          setProd(
            data.products.filter(
              (item) =>
                item.type.toLowerCase() === "glasses" &&
                item.categories === `${entry[1]}`
            )
          );
        }
        if (entry[0] === "price") {
          setProd(
            data.products.filter(
              (item) => item.type.toLowerCase() === "glasses"
            )
          );
        }
        if (entry[0] === "occasions") {
          setProd(
            data.products.filter(
              (item) =>
                item.type.toLowerCase() === "glasses" &&
                item.occasions === `${entry[1]}`
            )
          );
        }
        if (entry[0] === "frame") {
          setProd(
            data.products.filter(
              (item) =>
                item.type.toLowerCase() === "glasses" &&
                item.frame === `${entry[1]}`
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
      {prod && (
        <div className="default width-100-p padd-lef-10px padd-rig-10px ali-ite-cnt">
          <div className="default flex-dir-row width-100-p max-wid-1000-px gap-10-px ali-ite-cnt  ">
            {(currentState === "verylowWidth" ||
              currentState === "lowWidth") && (
              <>
                <SearchDrawer item={GlassOnlyList[0]} />
                <SearchChip />
              </>
            )}
          </div>
          <div className="default flex-dir-row width-100-p  max-wid-1280-px ">
            {!(
              currentState === "verylowWidth" || currentState === "lowWidth"
            ) && (
              <div className="default flex-gro-1 flex-shr-1 flex-ali-end ">
                <div className="default wid-250-px bg-col-whi bor-sty-sol bor-lef-wid-1px bor-rig-wid-1px bor-top-wid-1px bor-col-lig-2">
                  <Suspense fallback={<></>}>
                    <SearchOptions item={GlassOnlyList[0]} />
                  </Suspense>
                </div>
              </div>
            )}
            <div className="default width-70-p flex-gro-1 flex-shr-1 flex-ali-str ">
              <div className="default width-100-p  ">
                {!(
                  currentState === "verylowWidth" || currentState === "lowWidth"
                ) && (
                  <div className="default width-100-p padd-lef-24px  flex-ali-str hei-33-px">
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
      )}
      <Suspense fallback={<></>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Glasses;
