import React, { useState } from "react";

import { PosterGroup1, PosterGroup2 } from "../../Lists/PosterGroup1";
import useShowPanels from "../../customHooks/useShowPanels";
import { Link } from "react-router-dom";
import LeftButton from "../navButtons/LeftButton";
import RightButton from "../navButtons/RightButton";
import FeaturedItem from "../FeaturedItem";
const TwoRowsThreeItems = () => {
  const { currentState } = useShowPanels();
  const [imgIndex, setImgIndex] = useState(0);

  const slideForward = () => {
    setImgIndex((index) => {
      if (index === PosterGroup2.length - 1) return 0;
      return index + 1;
    });
  };
  const slideBackward = () => {
    setImgIndex((index) => {
      if (index === 0) return PosterGroup2.length - 1;
      return index - 1;
    });
  };

  return (
    <div
      id="banner-contaier flex-dir-row"
      className="default height-100-p width-100-p max-wid-1280-px pad-50-px"
    >
      <>
        {currentState === "fullWidth" || currentState === "highWidth" ? (
          <div className="default  justify-con-cnt gap-10-px">
            <div className="default flex-dir-row justify-con-cnt gap-10-px ">
              <Link className="default  width-50-p justify-con-cnt ">
                <img
                  className="max-hei-660-px img-fit-cov "
                  src={PosterGroup1[0].img}
                  alt=""
                />
              </Link>
              <div className="default  width-50-p gap-30-px   ">
                <Link className="default">
                  <img
                    className="default  max-hei-440-px"
                    src={PosterGroup1[3].img}
                    alt=""
                  />
                </Link>
                <Link className="default">
                  <img
                    className="default max-hei-440-px"
                    src={PosterGroup1[2].img}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="default mar-rig-aut mar-lef-aut ">
            <div className="default  dis-grid  grid-aut-flo-col grid-aut-col-100  gap-10-px over-flw-hid">
              <div className="default pos-set-abs pad-10-ver-10-hor-px  left0 height-100-p ali-ite-cnt justify-con-cnt z-ind-1">
                <LeftButton Click={slideBackward} />
              </div>
              <div className="default mak-ele-uns over-flw-hid  flex-dir-row width-100-p">
                {PosterGroup2.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="default width-100-p over-flw-hid tra-tra-400ms-eas "
                      style={{ translate: `${-100 * imgIndex}%` }}
                    >
                      <Link
                        to={""}
                        className="default  ali-ite-cnt width-100-p "
                      >
                        <div className="default width-100-p max-wid-400-px ">
                          <img
                            className="img-asp-rat-16-8 img-fit-cov width-100-p"
                            src={item.img}
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="default pad-10-ver-10-hor-px pos-set-abs right0 height-100-p ali-ite-cnt justify-con-cnt z-ind-1 ">
                <RightButton Click={slideForward} />
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default TwoRowsThreeItems;
{
  /* <Link className="default width-100-p  height-100-p">
                <img
                  className="img-asp-rat-16-9 img-fit-cov"
                  src={PosterGroup1[1].img}
                  alt=""
                />
              </Link>
              <Link className="default width-100-p  height-100-p ">
                <img
                  className="img-asp-rat-16-9 img-fit-cov"
                  src={PosterGroup1[2].img}
                  alt=""
                />
              </Link>
              <Link className="default width-100-p  height-100-p">
                <img
                  className="img-asp-rat-16-9 img-fit-cov"
                  src={PosterGroup1[3].img}
                  alt=""
                />
              </Link> */
}
