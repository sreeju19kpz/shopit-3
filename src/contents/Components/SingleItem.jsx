import React from "react";
import { Link } from "react-router-dom";

const ItemMenu = ({ id, name, img, price, offer, ratings }) => {
  return (
    <div className="default flex-dir-row height-100-p ali-ite-cnt padd-rig-10-px  padd-lef-10-px padd-top-10-px  padd-top-10-px ">
      <div className="default width-100-p height-100-p flex-gro-1 justify-con-cnt ali-ite-cnt  bor-sty-sol bor-wid-1px bor-col-lig-2">
        <div className="default  mar-lef-20px mar-rig-20px  padd-bot-10-px  height-100-p  ">
          <Link
            to={`/${id}`}
            className="default flex-dir-col width-100-p height-100-p ali-ite-cnt justify-con-spc-btw text-dec-non gap-1-rem "
          >
            <div
              className={`default  justify-con-cnt ali-ite-cnt flex-gro-1 tra-sca-1-15 tra-tim-5-sec`}
            >
              <img className="width-70-p img-fit-cov" src={img} alt="" />
            </div>
            <div className="default ali-ite-cnt flex-gro-1 justify-con-cnt  gap-7-px">
              {name && (
                <div className="default text-wra-1 flex-shr-1 justify-con-cnt text-ali-cnt">
                  <span className="default justify-con-cnt text-dec-non font-col-black-lig-3 font-siz-13-px">
                    {name.toUpperCase()}
                  </span>
                </div>
              )}
              <div className="default ali-ite-cnt"></div>
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
