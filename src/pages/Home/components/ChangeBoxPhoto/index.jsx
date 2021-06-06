// libs
import React from "react";
// scss
import "./style.scss";

const ChangeBoxPhoto = ({ img }) => (
  <div className="change-box-photo">
    <img alt="change-box" src={img} />
  </div>
);

export default ChangeBoxPhoto;
