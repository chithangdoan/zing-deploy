// libs
import React from "react";
import classNames from "classnames";
// components
import FooterInner from "./mains/FooterInner";
// scss
import "./style.scss";

const Footer = ({ activeHeaderFooterColor }) => {
  const css = classNames("footer", activeHeaderFooterColor);
  return (
    <div className={css}>
      <FooterInner />
    </div>
  );
};

export default Footer;
