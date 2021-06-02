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
  const active = useLocale();
  
  const css = classNames(
    { "header__style-1": active.activeStyleButton === "style-1" },
    { "header__style-2": active.activeStyleButton === "style-2" },
    activeHeaderFooterColor
  );

  return (
    <div className={css}>
      <HeaderInner />
    </div>
  );
};

export default Header;
