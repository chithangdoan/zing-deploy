// libs
import React from "react";
// components
import CopyRight from "../CopyRight";
import License from "../License";
// scss
import "./style.scss";

const FooterTextBox = () => (
  <div className="footer-text-box">
    <CopyRight />
    <License />
  </div>
);

export default FooterTextBox;
