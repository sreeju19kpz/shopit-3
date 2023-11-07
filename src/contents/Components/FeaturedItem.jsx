import React from "react";
import { Link } from "react-router-dom";

const FeaturedItem = ({ img }) => {
  return (
    <Link to={""} className="default  ali-ite-cnt width-100-p ">
      <div className="default width-100-p max-wid-400-px ">
        <img
          className="img-asp-rat-1-1 img-fit-cov width-100-p"
          src={img}
          alt=""
        />
      </div>
    </Link>
  );
};

export default FeaturedItem;
