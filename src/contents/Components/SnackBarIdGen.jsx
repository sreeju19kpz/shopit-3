import React, { useEffect, useState } from "react";
import SnackBar from "./SnackBar";

const SnackBarIdGen = () => {
  const [id, setId] = useState(0);
  useEffect(() => {
    const initId = setInterval(() => {
      setId(Math.floor(Math.random() * (36 - 1) + 1));
    }, 8000);
    return () => {
      clearInterval(initId);
    };
  }, []);
  return <SnackBar id={id} />;
};

export default SnackBarIdGen;
