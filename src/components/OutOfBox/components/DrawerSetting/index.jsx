// libs
import React from "react";
import { LeftSquareOutlined } from "@ant-design/icons";
// scss
import "./style.scss";

const DrawerSetting = ({ handleClickShowDisplay }) => (
  <div className="drawer-setting" onClick={handleClickShowDisplay}>
    <LeftSquareOutlined style={{ fontSize: "2rem", color: "#fff" }} />
  </div>
);

export default DrawerSetting;
