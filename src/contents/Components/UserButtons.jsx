import React from "react";
import { NavLink } from "react-router-dom";
import CartTotal from "./CartTotal";

const UserButtons = ({ name, url, details, svg }) => {
  return (
    <NavLink
      to={url}
      role="link"
      aria-label="user-button"
      aria-details={details}
      className="default text-dec-non justify-con-cnt font-col-black mar-rig-8px mar-lef-8px height-100-p"
    >
      <div className="default hei-33-px wid-33-px justify-con-cnt ali-ite-cnt">
        {name === "cart" && <CartTotal />}
        <div id={name} className="default hei-22-px wid-22-px ">
          <span>
            <img src={svg} alt="" />
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default UserButtons;
