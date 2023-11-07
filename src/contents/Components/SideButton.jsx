import React from "react";
import useShowPanels from "../customHooks/useShowPanels";

const SideButton = ({ close }) => {
  const { currentState } = useShowPanels();
  return (
    <>
      {currentState === "lowWidth" && (
        <div className="default flex  ali-ite-cnt hei-60-px   justify-con-cnt ali-ite-cnt">
          <div
            onClick={close}
            className="default flex hei-33-px wid-33-px  justify-con-cnt ali-ite-cnt cur-sty-oh-poi"
          >
            <div className="default flex hei-22-px wid-22-px  justify-con-cnt ali-ite-cnt">
              <svg
                viewBox="-1.68 -1.68 27.36 27.36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                  <path
                    d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                  <path
                    d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideButton;
