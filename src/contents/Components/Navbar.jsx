import React from "react";
import useShowPanels from "../customHooks/useShowPanels";
import { MainNavbar } from "../Lists/MainNavbarList";
import NavButtons from "./NavButtons";
import useFetchYScroll from "../customHooks/FetchYScroll";
import { v4 as uuidv4 } from "uuid";
const Navbar = () => {
  const { currentState } = useShowPanels();
  const { isScrollingUp } = useFetchYScroll();

  return (
    <>
      {!(currentState === "verylowWidth" || currentState === "lowWidth") &&
        !isScrollingUp && (
          <nav className="default flex flex-dir-row flex-gro-1 flex-shr-1 width-100-p justify-con-cnt  ali-ite-cnt hei-60-px pos-fix-ite bg-col-whi top50">
            <div className="default  flex-gro-1 flex-shr-1 width-100-p  ali-ite-cnt  ">
              <div className="default justify-con-spc-btw max-wid-900-px width-100-p ">
                <div className="default flex  flex-dir-col   ">
                  <div className="default flex  flex-shr-1 flex-dir-row ali-ite-cnt justify-con-cnt gap-20-px ">
                    {MainNavbar.map((item) => {
                      const { name, url, expansion } = item;
                      return (
                        <NavButtons
                          key={uuidv4()}
                          url={url}
                          name={name}
                          expansion={expansion}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="default flex flex-dir-col width-100-p justify-con-cnt bg-col-whi pos-set-abs  top50 ">
                <div
                  id="test"
                  className="default flex-dir-row justify-con-cnt"
                ></div>
              </div>
            </div>
          </nav>
        )}
    </>
  );
};

export default Navbar;
