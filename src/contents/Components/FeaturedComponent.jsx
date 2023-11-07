import React, { useState } from "react";
import FeaturedItem from "./FeaturedItem";
import fImg from "../../assets/Images/Demo/FeaturedImages";
import RightButton from "./navButtons/RightButton";
import LeftButton from "./navButtons/LeftButton";
import { v4 as uuidv4 } from "uuid";

const FeaturedComponent = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const slideForward = () => {
    setImgIndex((index) => {
      if (index === fImg.length - 1) return 0;
      return index + 1;
    });
  };
  const slideBackward = () => {
    setImgIndex((index) => {
      if (index === 0) return fImg.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="default   width-100-p bg-col-whi">
      <div className="default width-100-p ali-ite-cnt  gap-20-px ">
        <div className="default  width-100-p flex-dir-row justify-con-spc-aro flex-shr-1 max-wid-1280-px">
          <div className="default pos-set-abs pad-10-ver-10-hor-px  left0 height-100-p ali-ite-cnt justify-con-cnt z-ind-1">
            <LeftButton Click={slideBackward} />
          </div>
          <div className="default mak-ele-uns over-flw-hid  flex-dir-row width-100-p">
            {fImg.map((item) => {
              return (
                <div
                  key={item.id}
                  className="default width-100-p over-flw-hid tra-tra-400ms-eas "
                  style={{ translate: `${-100 * imgIndex}%` }}
                >
                  <FeaturedItem img={item.img} />
                </div>
              );
            })}
          </div>
          <div className="default pad-10-ver-10-hor-px pos-set-abs right0 height-100-p ali-ite-cnt justify-con-cnt z-ind-1 ">
            <RightButton Click={slideForward} />
          </div>
        </div>
        <div>bottom Navbar</div>
      </div>
    </div>
  );
};

export default FeaturedComponent;
