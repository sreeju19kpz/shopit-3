import React from "react";
import useShowPanels from "../customHooks/useShowPanels";

const Heading = ({ title }) => {
  const { currentState } = useShowPanels();
  return (
    <div
      className={`default ali-ite-cnt font-siz-24-px font-col-black-lig ${
        currentState === "verylowWidth" || currentState === "lowWidth"
          ? "mar-top-10px mar-bot-10px"
          : "mar-bot-20px mar-top-20px"
      }  flex-dir-row justify-con-cnt gap-30-px`}
    >
      <div className="default flex-gro-1 bor-sty-sol bor-top-wid-1px "></div>
      <span className="default  ">{title}</span>
      <div className="default flex-gro-1 bor-sty-sol bor-top-wid-1px"></div>
    </div>
  );
};

export default Heading;
