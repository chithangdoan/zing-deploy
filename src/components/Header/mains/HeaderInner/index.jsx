// Libs
import React from "react";
// Components
import HeaderLogo from "../../components/HeaderLogo";
import SearchBox from "../../components/SearchBox";
import MenuPage from "../../components/MenuPagesList";
import LangSwitcher from "../../components/LangSwitcher";
import LoginButton from "../../components/LoginButton";
// SCSS
import "./style.scss";

const HeaderInner = ({ preferredLocale, changeLanguage }) => (
  <div className="header-inner">
    <HeaderLogo />
    <SearchBox />
    <MenuPage />
    <LangSwitcher
      preferredLocale={preferredLocale}
      changeLanguage={changeLanguage}
    />
    <LoginButton />
  </div>
);

export default HeaderInner;
