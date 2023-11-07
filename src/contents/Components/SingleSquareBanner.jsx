import React from "react";
import { Link } from "react-router-dom";

const SingleSquareBanner = ({ img }) => {
  return (
    <div className="default height-100-p width-100-p ">
      <Link className="default height-100-p width-100-p">
        <div className="default height-100-p width-100-p">
          <img className=" img-fit-cov img-asp-rat-1-1 " src={img} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default SingleSquareBanner;
