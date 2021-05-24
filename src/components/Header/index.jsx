// Libs
import React from "react";
// Components
import HeaderInner from "./mains/HeaderInner";
// SCSS
import "./style.scss";

const Header = ({ preferredLocale, changeLanguage }) => (
  <div className="header">
    <HeaderInner
      preferredLocale={preferredLocale}
      changeLanguage={changeLanguage}
    />
  </div>
);

export default Header;
