import React, { useEffect, useState } from "react";
import { FooterList } from "../Lists/FooterList";
import useShowPanels from "../customHooks/useShowPanels";
import { Link } from "react-router-dom";
import EmailNewsLetter from "./EmailNewsLetter";
import { v4 as uuidv4 } from "uuid";
import {
  Facebook,
  Instagram,
  Twitter,
  GitHub,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  const { currentState } = useShowPanels();

  return (
    <footer className="default width-100-p  ali-ite-cnt justify-con-cnt bor-sty-sol mar-top-10px bor-col-lig-2 bor-top-wid-1px bot0">
      <div className="default width-100-p max-wid-1280-px pad-30-px gap-100-px ">
        <div
          className={`default width-100-p ${
            currentState === "fullWidth" && "flex-dir-row "
          }`}
        >
          <div className="default flex-gro-1  mar-top-40px">logo</div>
          <div className="default  ">
            <div className="default flex-dir-row ">
              <div
                className={`default  dis-grid ${
                  currentState === "verylowWidth" ? "grid-col-2" : "grid-col-4 "
                }  width-100-p `}
              >
                {FooterList.map((item) => {
                  return (
                    <div
                      key={uuidv4()}
                      className={`default gap-20-px ${
                        currentState === "lowWidth"
                          ? "wid-110-px"
                          : currentState === "verylowWidth"
                          ? "width-100-p"
                          : "wid-200-px"
                      }  mar-top-40px`}
                    >
                      <div className="default font-col-black ">
                        <span>{item.heading}</span>
                      </div>
                      <div className="default gap-20-px ">
                        {item.items.map((ite) => {
                          return (
                            <div key={uuidv4()} className="default">
                              <Link className="text-dec-non ">
                                <span className="font-col-lig-3 lin-hei-24-px ">
                                  {ite}
                                </span>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="default width-100-p gap-30-px">
          <div
            className={`default width-100-p gap-30-px ${
              currentState === "fullWidth" ||
              currentState === "highWidth" ||
              currentState === "mediumWidth"
                ? "flex-dir-row"
                : "flex-dir-col"
            }`}
          >
            <div className="default flex-gro-1 gap-7-px">
              <div className="default ">Subscribe to our newsletter</div>
              <div className="default font-col-lig-3">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </div>
            </div>
            <div className="default flex-gro-1 flex-dir-row flex-ali-end flex-dir-row ">
              <div
                className={`default width-100-p  ${
                  (currentState === "fullWidth" ||
                    currentState === "highWidth" ||
                    currentState === "mediumWidth") &&
                  "flex-ali-end"
                }`}
              >
                <EmailNewsLetter />
              </div>
            </div>
          </div>
          <div
            className={`default width-100-p ${
              currentState === "verylowWidth" || currentState === "lowWidth"
                ? "flex-dir-col"
                : "flex-dir-row"
            }  mar-top-30px mar-bot-30px`}
          >
            <div
              className="default flex-gro-1 hei-50-px justify-con-cnt "
              style={{
                order:
                  (currentState === "verylowWidth" ||
                    currentState === "lowWidth") &&
                  2,
              }}
            >
              <span className="font-col-lig-3 font-siz-875-rem ">
                © 2020 Your Company, Inc. All rights reserved.
              </span>
            </div>
            <div className="default flex-ali-end flex-dir-row gap-30-px hei-50-px ali-ite-cnt ">
              <Facebook className="cur-sty-oh-poi font-col-black-lig-2  font-col-black-lig-4" />
              <Instagram className="cur-sty-oh-poi font-col-black-lig-2  font-col-black-lig-4" />
              <Twitter className="cur-sty-oh-poi font-col-black-lig-2  font-col-black-lig-4" />
              <GitHub className="cur-sty-oh-poi font-col-black-lig-2  font-col-black-lig-4" />
              <YouTube className="cur-sty-oh-poi font-col-black-lig-2  font-col-black-lig-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
