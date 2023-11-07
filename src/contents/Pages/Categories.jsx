import React, { useState } from "react";
import { MainNavbar } from "../Lists/MainNavbarList";
import { Link } from "react-router-dom";
import useShowPanels from "../customHooks/useShowPanels";
import { v4 as uuidv4 } from "uuid";
const Categories = () => {
  const [state, setState] = useState("");
  const [exp, setExp] = useState("");
  const { currentState } = useShowPanels();
  const toggleState = (item) => {
    setState(item.name);
    setExp(item);
  };

  return (
    <>
      {currentState === "verylowWidth" ? (
        <div className="default flex-dir-row width-100-p height-100-custom  over-flw-hid gap-ver-0-hor-20-px">
          <div className="default wid-100-px height-100-p  flex-dir-row background-col-low-cream over-flw-y-aut  ">
            <div className="default width-100-p ali-ite-cnt height-100-p  ">
              <div className="default width-100-p height-100-p  ">
                {MainNavbar.map((item) => {
                  return (
                    <div
                      key={uuidv4()}
                      onClick={() => toggleState(item)}
                      className={`default  flex-dir-row hei-100-px ${
                        state === item.name && "bg-col-whi"
                      } ali-ite-cnt font-siz-12-px ali-ite-cnt justify-con-cnt `}
                    >
                      <div className="default flex-dir-row height-100-p flex-gro-1">
                        <div
                          className={`default height-100-p wid-5-px  bor-all-rad-9999-px ${
                            state === item.name && "bg-colo-blu"
                          } `}
                        ></div>
                        <div className="default  ali-ite-cnt justify-con-cnt cur-sty-oh-poi flex-gro-1">
                          <img
                            className="default wid-50-px  "
                            src={item.icon}
                            alt=""
                          />
                          <div className="default text-wra-1 ">{item.name}</div>
                        </div>
                        <div
                          className={`default height-100-p wid-5-px   `}
                        ></div>
                      </div>
                    </div>
                  );
                })}
                <div className="default hei-30-px justify-con-cnt"></div>
              </div>
            </div>
          </div>
          <div className="default flex-gro-1 flex-shr-1 height-100-p flex-dir-col width-50-p  over-flw-y-aut">
            <>
              {!exp.expansion ? (
                <></>
              ) : (
                <>
                  <div className="default hei-100-px wid-100-px  justify-con-cnt ali-ite-cnt text-ali-cnt">
                    <Link
                      to={`/${exp.name}`}
                      className="default text-dec-non font-col-black "
                    >
                      {"See All"}
                    </Link>
                  </div>
                  {exp.expansion.map((expan) => {
                    return (
                      <div key={uuidv4()} className="default">
                        {Object.keys(expan.subCategories).map((key) => {
                          return (
                            <div
                              key={uuidv4()}
                              className="default flex-dir-col width-100-p "
                            >
                              <div className="default flex-dir-row flex-wrap-1 width-100-p ">
                                {expan.subCategories[key].map((ele) => {
                                  return (
                                    <div
                                      key={uuidv4()}
                                      className="default justify-con-cnt justify-con-cnt hei-100-px "
                                    >
                                      <Link
                                        to={`/${
                                          exp.name
                                        }?${expan.name.toLowerCase()}=${ele}`}
                                        className="default text-dec-non font-col-black wid-100-px mar-rig-10px text-wrap-1 justify-con-cnt ali-ite-cnt text-ali-cnt"
                                      >
                                        {ele}
                                      </Link>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                  <div className="default hei-30-px  justify-con-cnt"></div>
                </>
              )}
            </>
          </div>
        </div>
      ) : (
        <>
          <div>
            <span>Something Wrong Plese Go Back</span>
          </div>
        </>
      )}
    </>
  );
};

export default Categories;
