import { useEffect, useState } from "react";
import useFetchWindowSize from "./FetchWindowSize";

const useShowPanels = (ss) => {
  const { windowSize } = useFetchWindowSize();
  const [currentState, setState] = useState(ss);
  useEffect(() => {
    if (windowSize.winWidth <= 499) {
      setState("verylowWidth");
    }
    if (windowSize.winWidth <= 845 && windowSize.winWidth > 499) {
      setState("lowWidth");
    }
    if (windowSize.winWidth <= 1014 && windowSize.winWidth > 845) {
      setState("mediumWidth");
    }
    if (windowSize.winWidth < 1280 && windowSize.winWidth > 1014) {
      setState("highWidth");
    }
    if (windowSize.winWidth >= 1280) {
      setState("fullWidth");
    }
  }, [windowSize]);

  return { currentState };
};
export default useShowPanels;
