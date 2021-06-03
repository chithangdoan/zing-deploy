// Libs
import React from "react";
import classNames from "classnames";
// Components
import HeaderInner from "./mains/HeaderInner";
// hooks
import useLocale from "../../hooks/useLocale";
// SCSS
import "./style.scss";

const Header = ({ activeHeaderFooterColor }) => {
  const { activeStyleButton } = useLocale();

  const themeStyle = {
    "style-1": "header__style-1",
    "style-2": "header__style-2",
    "style-3": "header__style-3",
  };

  const className = classNames([
    themeStyle[activeStyleButton],
    activeHeaderFooterColor,
  ]);

  return (
    <div className={className}>
      <HeaderInner />
    </div>
  );
};

export default Header;
