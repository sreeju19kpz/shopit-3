import React from "react";
import ReactDOM from "react-dom";

import { MainNavbar } from "../contents/Lists/MainNavbarList";

import MobileNavButtons from "./MobileNavButtons";

const MobileNavbar = ({ state, close }) => {
  return ReactDOM.createPortal(
    <>
      {state && (
        <div className="default flex-dir-row height-100-p width-100-p  pos-fix-ite top0 left0  ">
          <div className="default  ">
            <div className="default wid-300-px height-100-p bg-col-whi  over-flw-y-aut ">
              <div className="default flex  flex-shr-1 flex-dir-col flex-ali-str justify-con-spc-btw padd-rig-60px">
                <div className="default flex-dir-row wid-300-px  ali-ite-cnt hei-50-px background-col-blue ">
                  <div className="default flex-dir-row width-100-p justify-con-spc-btw padd-rig-10-px padd-lef-10-px ">
                    <div>logo</div>
                    <div className="default flex-dir-col flex-gro-1 flex-ali-end">
                      <div className="default flex-dir-row  gap-10-px">
                        <div>
                          <span className="font-col-whi font-siz-18-px font-wei-500 ">
                            Hello
                          </span>
                        </div>
                        <div>
                          <span className="font-col-whi font-siz-18-px font-wei-500  ">
                            User
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {MainNavbar.map((item) => {
                  const { name, url, expansion } = item;
                  return (
                    <>
                      <MobileNavButtons
                        url={url}
                        name={name}
                        expansion={expansion}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            onClick={close}
            className="height-100-p width-100-p background-col-low"
          ></div>
        </div>
      )}
    </>,
    document.getElementById("layer")
  );
};

export default MobileNavbar;
