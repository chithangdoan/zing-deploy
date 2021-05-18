// libs
import React from "react";
// components
import ContentLeft from "../ContentLeft";
import ContentRight from "../ContentRight";
// scss
import "./style.scss";

const ContentTop = () => (
  <div className="content-top">
    <ContentLeft />
    <ContentRight />
  </div>
);

export default ContentTop;
