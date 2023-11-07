import React, { useState } from "react";
import { profileItemsList } from "./Lists/profileItemsbtn";
import UserButtons from "./Components/UserButtons";
import Searchbar from "./Components/Searchbar";
import useShowPanels from "./customHooks/useShowPanels";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const ComputerHeader = () => {
  const { currentState } = useShowPanels();

  return (
    <>
      <div id="layer" className="default width-100-p z-ind-3"></div>
      <header
        id="header"
        className="default flex flex-dir-col ali-ite-cnt z-ind-1 mak-ele-uns  "
      >
        <div className="default flex flex-gro-1 width-100-p  pos-fix-ite ">
          <div className="default flex flex-gro-1 justify-con-cnt ali-ite-cnt min-hei-60-px bg-col-whi z-ind-1">
            <div className="default  flex-shr-1 flex-dir-row width-100-p max-wid-1900-px ali-ite-cnt">
              <div
                className={`default flex-shr-1 ${
                  currentState === "mediumWidth"
                    ? "flex-ali-str"
                    : "flex-gro-1 flex-ali-end"
                } `}
              >
                <div className="default flex-dir-row ">
                  <Link
                    to={"/"}
                    className="default wid-80-px text-dec-non flex-ali-end"
                  >
                    <div className="default flex  ali-ite-cnt hei-60-px justify-con-cnt padd-lef-10-px">
                      <span className="default font-col-black font-siz-20-px font-wei-500 ">
                        EShop
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              <>
                <div
                  id="large-screen-searchBar"
                  className="default flex-shr-1 flex-gro-1 ali-ite-cnt max-wid-800-px"
                >
                  <Searchbar />
                </div>
              </>
              <div
                className={`default flex-dir-row flex-shr-1 flex-ali-end ${
                  currentState !== "mediumWidth" && "flex-gro-1"
                }`}
              >
                <div
                  className={`default  flex-shr-1 ${
                    currentState === "fullWidth" || currentState === "highWidth"
                      ? "flex-ali-str flex-gro-1"
                      : "flex-ali-end"
                  }`}
                >
                  <div className="default wid-200-px flex flex-dir-row ">
                    {profileItemsList.map((item) => {
                      const { name, url, svg } = item;
                      return (
                        <UserButtons
                          key={uuidv4()}
                          name={name}
                          url={url}
                          svg={svg}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Navbar />
        </div>
      </header>

      <div className="default hei-120-px"></div>
    </>
  );
};

export default ComputerHeader;
