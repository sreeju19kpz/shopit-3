import React from "react";

const Searchbar = () => {
  return (
    <>
      <div className="default flex-gro-1 flex padd-lef-10-px padd-rig-10-px max-wid-600-px width-100-p ">
        <div className="default width-100-p flex flex-dir-row hei-60-px ali-ite-cnt">
          <form className="default bor-wid-1px bor-all-rad-9999-px width-100-p">
            <label className="default flex-gro-1 flex flex-dir-row ">
              <div className="default flex hei-33-px wid-33-px justify-con-cnt ali-ite-cnt padd-rig-24px padd-lef-24px bor-rig-wid-1px">
                <span className="default  hei-22-px wid-22-px ">
                  <svg viewBox="-0.48 -0.48 24.96 24.96" fill="none">
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
              </div>
              <div className="default flex flex-gro-1  mar-rig-10px mar-lef-10px">
                <input
                  type="text"
                  className="default flex flex-gro-1 width-100-p bor-sty-non background-col-none outline-sty-non "
                />
              </div>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
