import React, { useEffect, useState } from "react";
import {
  createSearchParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

const CheckBox = ({ ele, name }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const { pathname } = new URL(window.location.href);

  useEffect(() => {
    if (
      searchParams.has(name.toLowerCase()) &&
      searchParams.get(name.toLowerCase()) === ele
    ) {
      setIsChecked(true);
    } else setIsChecked(false);
  }, [searchParams]);
  const searchItem = () => {
    if (!isChecked) {
      navigate({
        pathname: `${pathname}`,
        search: `?${createSearchParams(`${name.toLowerCase()}=${ele}`)}`,
      });
    } else {
      navigate({
        pathname: ".",
      });
    }
  };

  return (
    <div className="width-100-p mak-ele-uns ">
      <form className="width-100-p">
        <label
          htmlFor={ele}
          className="default flex-dir-row justicy-con-spc-btw width-100-p gap-10-px"
        >
          <div>
            <input
              type="checkbox"
              name={ele}
              id={ele}
              checked={isChecked}
              onClick={searchItem}
            />
          </div>
          <div>
            <span> {ele}</span>
          </div>
        </label>
      </form>
    </div>
  );
};

export default CheckBox;
