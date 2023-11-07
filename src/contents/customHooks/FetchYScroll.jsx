import { useEffect, useState } from "react";

const useFetchYScroll = () => {
  const [scrollData, setScrollData] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const setScrollY = () => {
      setScrollData((prev) => {
        if (window.scrollY > prev) {
          setIsScrollingUp(true);
        } else {
          setIsScrollingUp(false);
        }
        return window.scrollY;
      });
    };
    window.addEventListener("scroll", setScrollY);
    return () => {
      window.removeEventListener("scroll", setScrollY);
    };
  });
  return { isScrollingUp, scrollData };
};

export default useFetchYScroll;
