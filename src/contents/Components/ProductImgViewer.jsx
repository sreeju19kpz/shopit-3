import React, { useState } from "react";
import useShowPanels from "../customHooks/useShowPanels";
import { v4 as uuidv4 } from "uuid";
import FeaturedItem from "./FeaturedItem";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Scale } from "@mui/icons-material";

const ProductImgViewer = ({ data }) => {
  const { currentState } = useShowPanels();
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className="default gap-20-px">
      <div className="default width-100-p ali-ite-cnt">
        <div className="default width-100-p max-wid-400-px  ">
          <div className="default mak-ele-uns over-flw-hid  flex-dir-row width-100-p over-flw-hid">
            {data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="default width-100-p over-flw-hid tra-tra-400ms-eas "
                  style={{ translate: `${-100 * imgIndex}%` }}
                >
                  <FeaturedItem img={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="default flex-gro-1 ">
        <div className="default flex-dir-row width-100p  justify-con-spc-btw gap-7-px">
          {data.map((img, index) => {
            return (
              <div
                className="default thu-hov-eff "
                onClick={() => setImgIndex(index)}
                style={{
                  border: imgIndex === index && "1px solid rgba(0,0,0,.2)",
                  borderRadius: "10px",
                }}
              >
                <img
                  key={uuidv4()}
                  style={{
                    width: "40px",
                    borderRadius: "10px",
                  }}
                  className=""
                  src={img}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductImgViewer;
