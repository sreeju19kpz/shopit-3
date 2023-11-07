import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import useFetchWindowSize from "../customHooks/FetchWindowSize";

const NavBarExpansion = ({ lName, item, state, cont }) => {
  const { windowSize } = useFetchWindowSize();
  return ReactDOM.createPortal(
    <>
      {state && (
        <div
          onMouseOver={cont}
          className={`default flex  
           min-hei-60-px flex-ali-str padd-bot-24px padd-top-24px `}
          style={{ width: windowSize.winWidth / 6 }}
        >
          <div className="default font-wei-500 padd-bot-10px ">{item.name}</div>
          <>
            {Object.keys(item.subCategories).map((key) => {
              return (
                <div className="default flex-dir-col width-100-p">
                  <div className="default flex-dir-col width-100-p ">
                    {item.subCategories[key].map((ele) => {
                      return (
                        <div className="default justify-con-cnt ">
                          <Link
                            to={`/${lName}?${item.name.toLowerCase()}=${ele}`}
                            className="default text-dec-non font-col-black  mar-rig-10px flex-gro-1 hei-30-px font-col-link  justify-con-cnt "
                          >
                            {ele}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </>
        </div>
      )}
    </>,
    document.getElementById("test")
  );
};

export default NavBarExpansion;

/* <div>{Object.keys(item.subCategories)}</div>
          <>{console.log(items[key])}</> */
