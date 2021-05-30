// libs
import React from "react";
// scss
import "./style.scss";

const ThemeColorsBlock = ({ name, handleClickHeaderFooterColor }) => {
  const handleTranslateColor = (name) => {
    const listName = {
      "Đen Vâu": "black",
      Binz: "pink",
    };
    return listName[name];
  };

  const color = handleTranslateColor(name);

  const cssColor = `theme-colors-block ${color}`;

  return (
    <div
      className="theme-colors-wrapper"
      onClick={() => handleClickHeaderFooterColor(color)}
    >
      <div className={cssColor}></div>
      <div className="theme-colors-name">{name}</div>
    </div>
  );
};

export default ThemeColorsBlock;
