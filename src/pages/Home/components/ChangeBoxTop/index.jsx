// libs
import React from "react";
// components
import ChangeBoxName from "../ChangeBoxName";
import ChangeBoxPagination from "../ChangeBoxPagination";
// scss
import "./style.scss";

const ChangeBoxTop = () => (
  <div className="change-box-top">
    <ChangeBoxName />
    <ChangeBoxPagination />
  </div>
);

export default ChangeBoxTop;
