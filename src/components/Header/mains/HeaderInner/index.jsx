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

const HeaderInner = () => (
  <div className="header-inner">
    <HeaderLogo />
    <SearchBox />
    <MenuPage />
    <LangSwitcher />
    <LoginButton />
  </div>
);

export default HeaderInner;
