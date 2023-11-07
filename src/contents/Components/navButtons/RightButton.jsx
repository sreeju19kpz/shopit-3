import React from "react";

const RightButton = ({ Click }) => {
  return (
    <div
      onClick={Click}
      className="default wid-33-px tra-tim-100ms-sec height-100-p ali-ite-cnt justify-con-cnt feat-btn-ob-hov bor--rad-1-dvb "
    >
      <div className="default wid-22-px hei-22-px ">
        <svg
          viewBox="0 0 1024.00 1024.00"
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_iconCarrier">
            <path
              d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
              fill="#000000"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default RightButton;
