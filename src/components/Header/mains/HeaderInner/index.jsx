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

const HeaderInner = ({ styleLayout, preferredLocale, changeLanguage }) => {
  const css = styleLayout === 1 ? "header-inner" : "";
  return (
    <div className={css}>
      {styleLayout === 1 ? (
        <>
          <div className="header-left">
            <HeaderLogo />
          </div>
          <div className="header-middle">
            <SearchBox />
            <MenuPage />

            <LangSwitcher
              preferredLocale={preferredLocale}
              changeLanguage={changeLanguage}
            />
          </div>
          <div className="header-right">
            <LoginButton />
          </div>
        </>
      ) : (
        <>
          <HeaderLogo />
          <SearchBox />
          <MenuPage />
          <LangSwitcher
            preferredLocale={preferredLocale}
            changeLanguage={changeLanguage}
          />
          <LoginButton />
        </>
      )}
    </div>
  );
};

export default HeaderInner;
