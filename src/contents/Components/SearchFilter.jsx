import React from "react";

import CheckBox from "./CheckBox";
const SearchFilter = ({ item }) => {
  return (
    <div className="default bor-sty-sol bor-bot-wid-1px width-100-p bor-col-lig-2">
      <div className="default font-wei-500 mak-ele-uns hei-60-px padd-lef-10-px padd-rig-10-px justify-con-cnt ">
        <span>{item.name}</span>
      </div>
      <div className="default ">
        {Object.keys(item.subCategories).map((key) => {
          return (
            <div className="default flex-dir-col width-100-p padd-lef-10-px padd-rig-10-px padd-bot-10-px">
              <div className="default flex-dir-col width-100-p gap-7-px ">
                {item.subCategories[key].map((ele) => {
                  return <CheckBox  ele={ele} name={item.name} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchFilter;
