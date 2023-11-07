import React, { useState } from "react";
import { profileItemsList } from "./Lists/profileItemsbtn";
import UserButtons from "./Components/UserButtons";
import useShowPanels from "./customHooks/useShowPanels";
import MobileNavbar from "../MobileSpecific/ToggleMobileNavbar";
import SideButton from "./Components/SideButton";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const TabHeader = () => {
  const { currentState } = useShowPanels();
  const [toggle, setToggle] = useState(false);
  const ele = document.getElementById("layer");
  const navigate = useNavigate();
  const direct = () => {
    navigate("/search");
  };

  return (
    <>
      <div id="layer" className="default width-100-p z-ind-3">
        {ele && <MobileNavbar state={toggle} close={() => setToggle(false)} />}
      </div>
      <header
        id="header"
        className="default flex flex-dir-col ali-ite-cnt z-ind-1 mak-ele-uns  "
      >
        <div className="default flex flex-gro-1 width-100-p pos-fix-ite ">
          <div className="default flex flex-gro-1 justify-con-cnt ali-ite-cnt min-hei-60-px bg-col-whi z-ind-1">
            <div className="default  flex-shr-1 flex-dir-row width-100-p max-wid-1900-px ali-ite-cnt">
              <div className="default flex-shr-1 flex-gro-1 flex-ali-str">
                <div className="default flex-dir-row ">
                  <div className="default  flex-ali-str ">
                    <SideButton close={() => setToggle((toggle) => !toggle)} />
                  </div>

                  <Link
                    to={"/"}
                    className={`default wid-80-px text-dec-non ${
                      currentState === "lowWidth"
                        ? "ali-ite-cnt"
                        : "flex-ali-end"
                    }`}
                  >
                    <div className="default flex  ali-ite-cnt hei-60-px justify-con-cnt padd-lef-10-px">
                      <span className="default font-col-black font-siz-20-px font-wei-500 ">
                        EShop
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="default flex-dir-row flex-shr-1 flex-ali-end">
                <>
                  <div className="default wid-33-px ali-ite-cnt justify-con-cnt">
                    <div className="default wid-33-px hei-33-px ali-ite-cnt justify-con-cnt">
                      <button
                        onClick={direct}
                        className="default wid-22-px hei-22-px background-col-none "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </>
                <div className="default flex-shr-1 flex-ali-end">
                  <div className="default wid-200-px flex flex-dir-row">
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
        </div>
      </header>

      <div className="default hei-60-px"></div>
    </>
  );
};

export default TabHeader;
