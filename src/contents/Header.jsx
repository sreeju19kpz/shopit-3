import React, { Suspense, lazy } from "react";
import useShowPanels from "./customHooks/useShowPanels";
import MobileHeader from "./MobileHeader";
import ComputerHeader from "./ComputerHeader";
import TabHeader from "./TabHeader";

const Header = () => {
  const { currentState } = useShowPanels("verylowWidth");
  return (
    <>
      {currentState === "verylowWidth" ? (
        <MobileHeader />
      ) : currentState === "lowWidth" ? (
        <TabHeader />
      ) : (
        <ComputerHeader />
      )}
    </>
  );
};

export default Header;
