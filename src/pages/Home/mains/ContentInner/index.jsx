// libs
import React from "react";
// components
import ContentTop from "../../components/ContentTop";
import ContentBottom from "../../components/ContentBottom";
// scss
import "./style.scss";

const ContentInner = () => (
  <div className="content-inner">
    <ContentTop />
    <ContentBottom />
  </div>
);

export default ContentInner;
