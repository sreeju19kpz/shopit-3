import React from "react";
import { Link } from "react-router-dom";

const HorOverflocComp = ({ item, asR }) => {
  return (
    <Link className="default width-100-p  height-100-p ">
      <img
        className={`${asR} img-fit-cov  gap-10-px padd-lef-10-px padd-rig-10-px `}
        src={item.img}
        alt=""
      />
    </Link>
  );
};

export default HorOverflocComp;
