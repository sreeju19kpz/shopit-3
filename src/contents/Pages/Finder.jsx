import React from "react";


import Searchbar from "../Components/Searchbar";
import { useNavigate } from "react-router-dom";

const Finder = () => {

  const navigate = useNavigate();
  const direct = () => {
    navigate(-1);
  };
  return (
    <div className="default width-100-p height-100-p  padd-lef-10px padd-rig-10px ali-ite-cnt ">
      <div className="default flex-dir-row width-100-p">
        <div className="default wid-60-px ali-ite-cnt justify-con-cnt ">
          <button
            onClick={direct}
            className="default wid-33-px hei-33-px ali-ite-cnt justify-con-cnt background-col-none "
          >
            <span className="default wid-22-px hei-22-px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="default flex-gro-1 flex-shr-1 flex-ali-str ">
          <div className="default  width-100-p">
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finder;
