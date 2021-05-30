// libs
import React, { useState } from "react";
import classNames from "classnames";
// components
import Controls from "./mains/Controls";
import Display from "./mains/Display";
// scss
import "./style.scss";

const OutOfBox = ({ listColors, handleClickHeaderFooterColor }) => {
  const [showDisplay, setShowDisplay] = useState(false);

  const css = classNames("out-of-box", { show: showDisplay });

  const handleClickShowDisplay = () => {
    setShowDisplay(!showDisplay);
  };

  return (
    <div className={css}>
      <Controls handleClickShowDisplay={handleClickShowDisplay} />
      <Display
        listColors={listColors}
        handleClickShowDisplay={handleClickShowDisplay}
        handleClickHeaderFooterColor={handleClickHeaderFooterColor}
      />
    </div>
  );
};

export default OutOfBox;
