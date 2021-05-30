// libs
import React from "react";
// components
import DrawerClose from "../../components/DrawerClose";
import ThemeColors from "../../components/ThemeColorsList";
// scss
import "./style.scss";

const Display = ({
  listColors,
  handleClickShowDisplay,
  handleClickHeaderFooterColor,
}) => (
  <div className="display">
    <DrawerClose handleClickShowDisplay={handleClickShowDisplay} />
    <ThemeColors
      listColors={listColors}
      handleClickHeaderFooterColor={handleClickHeaderFooterColor}
    />
  </div>
);

export default Display;
