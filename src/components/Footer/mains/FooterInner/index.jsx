// libs
import React from "react";
// components
import FooterLogo from "../../components/FooterLogo";
import FooterTextBox from "../../components/FooterTextBox";
import FooterMultiList from "../../components/FooterMultiList";
import FooterOther from "../../components/FooterOther";

// scss
import "./style.scss";

const FooterInner = () => (
  <div className="footer-inner">
    <FooterLogo />
    <FooterTextBox />
    <FooterMultiList />
    <FooterOther />
  </div>
);

export default FooterInner;
