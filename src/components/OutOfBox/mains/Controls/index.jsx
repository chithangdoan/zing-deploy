// libs
import React from "react";
// components
import DrawerSetting from "../../components/DrawerSetting";
// scss
import "./style.scss";

const Controls = ({ handleClickShowDisplay }) => (
  <div className="controls">
    <DrawerSetting handleClickShowDisplay={handleClickShowDisplay} />
  </div>
);

export default Controls;
