// libs
import React from "react";
// components
import ChangeBoxName from "../ChangeBoxName";
import ChangeBoxList from "../ChangeBoxList";
// scss
import "./style.scss";

const ChangeBox = () => (
  <div className="change-box">
    <ChangeBoxName />
    <ChangeBoxList />
  </div>
);

export default ChangeBox;
