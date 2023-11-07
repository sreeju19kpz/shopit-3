import React from "react";
import { SingleRating } from "./SingleRatingComponent";

const ProductReview = ({ name, comment, rating }) => {
  return (
    <div className="default flex-gro-1 ali-ite-cnt min-hei-120-px width-100-p max-wid-1280-px bor-sty-sol bor-wid-1px bor-col-lig-2 ">
      <div className="default flex-gro-1 padd-lef-10-px padd-rig-10-px padd-bot-10-px padd-top-10-px  width-100-p">
        <div className="default flex-dir-row flex-gro-1 max-wid-720-px width-100-p ">
          <div className="default flex-dir-row flex-gro-1  width-100-p">
            <div className="default wid-100-p-80-px gap-7-px ">
              <div className="default ">
                <SingleRating ratings={rating} />
              </div>
              <div className="default ">
                <strong className="default font-siz-16-px font-col-lig-2 font-sty-ita">
                  {name.toUpperCase()}
                </strong>
              </div>
              <div className="default  justify-con-cnt">
                <span className="default font-wei-700 ">{comment}</span>
              </div>
              <div className="default width-100-p">
                <span className="default text-wra-1 word-wra-1 font-col-lig-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
