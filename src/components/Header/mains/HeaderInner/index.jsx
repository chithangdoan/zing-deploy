// Libs
import React from "react";
import classNames from "classnames";
// Components
import HeaderLogo from "../../components/HeaderLogo";
import SearchBox from "../../components/SearchBox";
import MenuPage from "../../components/MenuPagesList";
import LangSwitcher from "../../components/LangSwitcher";
import LoginButton from "../../components/LoginButton";
// hooks
import useLocale from "../../../../hooks/useLocale";
// SCSS
import "./style.scss";

const HeaderInner = () => {
  const styleButton = useLocale();

  const css = classNames(
    {
      "header-inner-inline": styleButton.activeStyleButton === "style-1",
    },
    {
      "header-inner": styleButton.activeStyleButton !== "style-1",
    }
  );

  return (
    <div className={css}>
      {styleButton.activeStyleButton === "style-1" ? (
        <>
          <div className="header-left">
            <HeaderLogo />
          </div>
          <div className="header-middle">
            <SearchBox />
            <MenuPage />

            <LangSwitcher />
          </div>
          <div className="header-right">
            <LoginButton />
          </div>
        </>
      ) : (
        <div className={css}>
          <HeaderLogo />
          <SearchBox />
          <MenuPage />
          <LangSwitcher />
          <LoginButton />
        </div>
      )}
    </div>
  );
};

export default HeaderInner;
