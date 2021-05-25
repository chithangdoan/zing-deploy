// libs
import React from "react";
// components
import ContentInner from "./mains/ContentInner";
// scss
import "./style.scss";

const Content = ({ handleChosenDiv }) => (
  <div className="content">
    <ContentInner handleChosenDiv={handleChosenDiv} />
  </div>
);

export default Content;
