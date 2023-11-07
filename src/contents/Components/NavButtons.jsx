import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useShowPanels from "../customHooks/useShowPanels";
import NavBarExpansion from "./NavBarExpansion";
import { v4 as uuidv4 } from "uuid";
const NavButtons = ({ name, url, details, expansion }) => {
  const { currentState } = useShowPanels();
  const [active, setActive] = useState(false);
  const ele = document.getElementById("test");

  return (
    <div className="default flex-dir-row wid-120-px">
      <div
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className="default flex flex-dir-row hei-50-px width-100-p"
      >
        <NavLink
          to={url}
          role="link"
          aria-label="navbar-button"
          aria-details={details}
          className="default  text-dec-non justify-con-cnt font-col-black width-100-p  height-100-p "
        >
          <div className="default flex flex-dir-row width-100-p font-wei-500 font-siz-16-px  justify-con-cnt ali-ite-cnt ">
            <div>
              <span>{name}</span>
            </div>
          </div>
        </NavLink>
        <div className="default flex flex-dir-row ali-ite-cnt ">
          {currentState === "lowWidth" ? (
            <div className="default ">+</div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div onMouseLeave={() => setActive(false)} className="default ">
        <div className="default">
          {ele &&
            expansion &&
            expansion.map((item) => {
              return (
                <NavBarExpansion
                  key={uuidv4()}
                  lName={name.toLowerCase()}
                  item={item}
                  state={active}
                  close={() => setActive(false)}
                  cont={() => setActive(true)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default NavButtons;
