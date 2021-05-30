// libs
import React from "react";
// components
import ContentLeft from "../ContentLeft";
import ContentRight from "../ContentRight";
// scss
import "./style.scss";

const ContentTop = ({ handleChosenDiv }) => (
  <div className="content-top">
    <ContentLeft handleChosenDiv={handleChosenDiv} />
    <ContentRight />
  </div>
);

export default ContentTop;
