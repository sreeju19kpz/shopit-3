import React, { useState } from "react";

import Rating from "@mui/material/Rating";
import useShowPanels from "../customHooks/useShowPanels";
const PostReview = (props) => {
  const [tHeading, setTHeading] = useState("");
  const [tReview, setTReview] = useState("");
  const [value, setValue] = useState(0);
  const { currentState } = useShowPanels();
  const onPostReview = (e) => {
    e.preventDefault();
    if (!tHeading || !tReview) return;
    const uReview = {
      name: "sree",
      comment: tHeading,
      rating: value,
    };

    props.updateReview(uReview);
    setTHeading("");
    setTReview("");
    setValue(0);
    // const uComments = [...sComment, nComment];
  };

  return (
    <div
      className={`default ${
        currentState === "verylowWidth" || currentState === "lowWidth"
          ? "width-100-p "
          : "wid-850-px"
      }  back-sha-4  bor--rad-1-dvb`}
    >
      <div className="default width-100-p pad-30-px ">
        <form
          className="default width-100-p gap-20-px  "
          onSubmit={onPostReview}
        >
          <div className="default wid-120-px ">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className="default">
            <label htmlFor="heading">short comment</label>
            <textarea
              className="default width-1000-p hei-50-px outline-sty-non bor-sty-sol bor-wid-1px bor-col bor--rad-1-dvb padd-top-10-px padd-lef-10-px text-are-res-non"
              placeholder="type important headline"
              type="text"
              id="heading"
              value={tHeading}
              onChange={(e) => setTHeading(e.target.value)}
            />
          </div>
          <div className="default width-100-p">
            <label htmlFor="heading">review</label>
            <textarea
              className="default width-1000-p hei-100-px outline-sty-non bor-sty-sol bor-wid-1px bor-col bor--rad-1-dvb padd-top-10-px padd-lef-10-px text-are-res-non"
              placeholder="type your review"
              type="text"
              id="heading"
              value={tReview}
              onChange={(e) => setTReview(e.target.value)}
            />
          </div>
          <div className="default width-100-p flex-ali-end">
            <div className="default">
              <button
                type="submit"
                className="default  wid-120-px hei-33-px ali-ite-cnt justify-con-cnt bor--rad-1-dvb background-col-none bor-sty-sol bor-wid-1px bor-col bor--rad-1-dvb background-col-blue tra-sca-1-05"
              >
                <div className="default flex flex-grow bor-rad-9999px bor-all-wid1px bor-st width100 height100p juscocnt ite-ali-cnt on-how-poi-tar bor-col ">
                  <span className="fon-wei-600 font-col-whi">Post review</span>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostReview;
