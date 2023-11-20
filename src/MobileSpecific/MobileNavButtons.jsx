import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import MobileNavBarExpansion from "./MobileNavBarExpansion";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

const MobileNavButtons = ({ name, url, details, expansion }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="default  flex-dir-col width-100-p padd-rig-10-px padd-lef-10-px ">
      <div
        className="default flex flex-dir-row wid-fit-con hei-50-px width-100-p  gap-20-px {
  gap: 20px;
} "
      >
        <NavLink
          to={url}
          role="link"
          aria-label="navbar-button"
          aria-details={details}
          className="default  text-dec-non justify-con-cnt font-col-black height-100-p "
        >
          <div className="default flex flex-dir-row   width-100-p height-100-p ali-ite-cnt ">
            <span className="font-siz-18-px font-wei-500 ">{name}</span>
          </div>
        </NavLink>
        <div className="default flex flex-dir-row ali-ite-cnt wid-30-px ">
          {expansion !== null ? (
            <span
              onClick={() => setActive((active) => !active)}
              className="default width-100-p ali-ite-cnt padd-top-10-px padd-bot-10-px cur-sty-oh-poi"
            >
              {active ? <ArrowDropUp /> : <ArrowDropDown />}
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="default flex glex-gro-1 flex-dir-row width-100-p ">
        <div className="default flex flex-gro-1 flex-dir-col   bg-col-whi  height-fit-cont pos-set-stat wid-fit-con width-100-p padd-lef-24px  padd-bot-24-px">
          {active && expansion ? (
            expansion.map((item) => {
              return (
                <MobileNavBarExpansion
                  lName={name}
                  items={item}
                  state={active}
                  close={() => setActive(false)}
                  cont={() => setActive(true)}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNavButtons;
