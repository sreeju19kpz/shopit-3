import React from "react";

import { NavLink } from "react-router-dom";
import useShowPanels from "../contents/customHooks/useShowPanels";
import { BottomPanelList } from "../contents/Lists/BottomPanelList";
import ReactDOM from "react-dom";
import useFetchYScroll from "../contents/customHooks/FetchYScroll";
import CartTotal from "../contents/Components/CartTotal";
import { v4 as uuidv4 } from "uuid";
const BottomPanel = () => {
  const { currentState } = useShowPanels();
  const { isScrollingUp } = useFetchYScroll();
  return ReactDOM.createPortal(
    <>
      {currentState === "verylowWidth" && !isScrollingUp && (
        <div className="default flex pos-fix-ite bot0 left0 flex-dir-row  flex-gro-1  flex-shr-1 width-100-p bg-col-whi hei-50-px ali-ite-cnt">
          {BottomPanelList.map((item) => {
            const { name, url, svg } = item;
            return (
              <NavLink
                to={url}
                role="link"
                className={({ isActive }) =>
                  isActive
                    ? "default  flex-dir-col  flex-shr-1 flex-gro-1  ali-ite-cnt  "
                    : "default  flex-dir-col  flex-shr-1 flex-gro-1   ali-ite-cnt  "
                }
                key={uuidv4()}
              >
                <div
                  className="default flex flex-row justify-con-cnt ali-ite-cnt bac-col-on-how  hei-33-px wid-33-px "
                  id={name}
                >
                  {name === "cart" && <CartTotal />}
                  <div className="default hei-30-px wid-30-px ">
                    <img src={svg} alt="" />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      )}
    </>,
    document.getElementById("mobile-nav-panel")
  );
};

export default BottomPanel;
