// libs
import React from "react";
// components
import ContentLeft from "../../components/ContentLeft";
import ContentRight from "../../components/ContentRight";
// scss
import "./style.scss";

const ContentTop = ({ handleChosenDiv }) => (
  <div className="content-top">
    <ContentLeft handleChosenDiv={handleChosenDiv} />
    <ContentRight />
  </div>
);

export default ContentTop;
