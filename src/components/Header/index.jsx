// Libs
import React from "react";
import classNames from "classnames";
// Components
import HeaderInner from "./mains/HeaderInner";
// SCSS
import "./style.scss";

const Header = ({
  styleLayout,
  activeHeaderFooterColor,
  preferredLocale,
  changeLanguage,
}) => {
  const css = classNames(
    { header: styleLayout === 1 },
    activeHeaderFooterColor
  );

  return (
    <div className={css}>
      <HeaderInner
        styleLayout={styleLayout}
        preferredLocale={preferredLocale}
        changeLanguage={changeLanguage}
      />
    </div>
  );
};

export default Header;
