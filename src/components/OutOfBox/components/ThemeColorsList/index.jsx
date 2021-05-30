// libs
import React from "react";
// components
import ThemeColorsBlock from "../ThemeColorsBlock";
// scss
import "./style.scss";

const ThemeColors = ({ listColors, handleClickHeaderFooterColor }) => {
  const render = listColors.map(({ name, color }) => (
    <ThemeColorsBlock
      name={name}
      color={color}
      handleClickHeaderFooterColor={handleClickHeaderFooterColor}
    />
  ));
  return <div className="theme-colors">{render}</div>;
};

export default ThemeColors;
