import React from "react";

import { PosterGroup1 } from "../../Lists/PosterGroup1";
import useShowPanels from "../../customHooks/useShowPanels";
import { Link } from "react-router-dom";

const TwoRowsThreeItems = () => {
  const { currentState } = useShowPanels();
  return (
    <div
      id="banner-contaier flex-dir-row"
      className="default height-100-p width-100-p max-wid-1280-px pad-50-px"
    >
      <>
        {currentState === "fullWidth" || currentState === "highWidth" ? (
          <div className="default  justify-con-cnt gap-10-px">
            <div className="default flex-dir-row justify-con-cnt gap-10-px ">
              <Link className="default  width-30-p ">
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
            <div className="default  dis-grid  grid-aut-flo-col grid-aut-col-100  gap-10-px over-flw-x-aut  over-flw-y-hid">
              <Link className="default width-100-p  height-100-p">
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
              </Link>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default TwoRowsThreeItems;
