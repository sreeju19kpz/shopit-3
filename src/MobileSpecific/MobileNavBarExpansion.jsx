import React from "react";
import { Link } from "react-router-dom";

const MobileNavBarExpansion = ({ lName, items }) => {
  return (
    <>
      {items ? (
        <div
          className={`default flex  
           min-hei-60-px flex-ali-str bor-sty-sol bor-bot-wid-1px bor-col padd-bot-10px padd-top-10-px`}
        >
          <div className="default font-wei-500  ">{items.name}</div>
          <>
            {Object.keys(items.subCategories).map((key) => {
              return (
                <div className="default flex-dir-col width-100-p">
                  <div className="default flex-dir-col width-100-p padd-rig-24px">
                    {items.subCategories[key].map((ele) => {
                      return (
                        <div className="default justify-con-cnt ">
                          <Link
                            to={`/${lName}?${items.name.toLowerCase()}=${ele}`}
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
      ) : (
        <></>
      )}
    </>
  );
};

export default MobileNavBarExpansion;

/* <div>{Object.keys(item.subCategories)}</div>
          <>{console.log(items[key])}</> */
