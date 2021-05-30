// libs
import React from "react";
import { CloseOutlined } from "@ant-design/icons";
// scss
import "./style.scss";

const DrawerClose = ({ handleClickShowDisplay }) => (
  <div className="drawer-close" onClick={handleClickShowDisplay}>
    <CloseOutlined />
  </div>
);

export default DrawerClose;
