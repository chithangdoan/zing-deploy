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
  const { activeStyleButton } = useLocale();

  const themeStyle = {
    "style-1": "header-inner-inline",
    "style-2": "header-inner",
    "style-3": "header-inner",
  };

  const className = classNames([themeStyle[activeStyleButton]]);

  return (
    <div className={className}>
      {activeStyleButton === "style-1" ? (
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
        <div className={className}>
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
