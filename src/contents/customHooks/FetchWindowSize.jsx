import { useEffect, useState } from "react";

const useFetchWindowSize = () => {
  const [windowSize, detectWidth] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const detectSize = () => {
    detectWidth({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  });
  return { windowSize };
};

export default useFetchWindowSize;
