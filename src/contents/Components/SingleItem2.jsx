import React from "react";
import { Link } from "react-router-dom";

const ItemMenu = ({ name, img, price, offer, url }) => {
  return (
    <div className="default flex-dir-row height-100-p ali-ite-cnt ">
      <div className="default width-100-p height-100-p flex-gro-1 justify-con-cnt ali-ite-cnt ">
        <div className="default  mar-lef-20px mar-rig-20px  padd-bot-10-px  height-100-p  ">
          <Link
            to={url}
            className="default flex-dir-col width-100-p height-100-p ali-ite-cnt justify-con-spc-btw text-dec-non gap-1-rem "
          >
            <div className="default  justify-con-cnt ali-ite-cnt flex-gro-1">
              <img className=" width-50-p img-fit-cov " src={img} alt="" />
            </div>
            <div className="default ali-ite-cnt flex-gro-1 justify-con-spc-btw">
              {name && (
                <div className="default text-wra-1 flex-shr-1 justify-con-cnt text-ali-cnt">
                  <span className="default font-siz-12-px justify-con-cnt text-dec-non font-col-black text-capit">
                    {name}
                  </span>
                </div>
              )}
              {price && (
                <div className="default text-wra-1 flex-shr-1 justify-con-cnt text-ali-cnt ">
                  <span className="text-dec-non font-col-black">{price}</span>
                </div>
              )}
            </div>
            {offer && (
              <div className="default text-wra-1 flex-shr-1 justify-con-cnt text-ali-cnt">
                <span>{offer}</span>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemMenu;
