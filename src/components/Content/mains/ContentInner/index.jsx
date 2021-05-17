// libs
import React from "react";
// components
import ContentTop from "../../../../pages/Home/mains/ContentTop";
import ContentBottom from "../../../../pages/Home/mains/ContentBottom";
// scss
import "./style.scss";

const ContentInner = () => (
  <div className="content-inner">
    <ContentTop />
    <ContentBottom />
  </div>
);

export default ContentInner;
