import React from "react";
import { IIIcolumsTwoRows } from "../Lists/IIIcolumsTwoRowsList";
import SingleSquareBanner from "./SingleSquareBanner";
import useShowPanels from "../customHooks/useShowPanels";
import { v4 as uuidv4 } from "uuid";
const IIIColumn2RowsBanner = () => {
  const { currentState } = useShowPanels();
  return (
    <div className="default max-wid-1280-px ali-ite-cnt padd-rig-10-px  padd-lef-10-px ">
      <div
        className={`dis-grid  ${
          currentState === "verylowWidth"
            ? "grid-col-1"
            : currentState === "lowWidth"
            ? "grid-col-2"
            : "grid-col-3"
        } gap-1-rem`}
      >
        {IIIcolumsTwoRows.map((item) => {
          return <SingleSquareBanner key={uuidv4()} img={item.img} />;
        })}
      </div>
    </div>
  );
};

export default IIIColumn2RowsBanner;
