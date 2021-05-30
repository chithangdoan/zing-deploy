// libs
import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
// scss
import "./style.scss";

const MenuPagesItem = ({
  name,
  path,
  activeMenuPage,
  handleChangeMenuPage,
}) => {
  const cssActivePage = classNames([
    "menu-pages-item",
    { "active-menu-page": name === activeMenuPage },
  ]);

  return (
    <>
      <Link to={path}>
        <button
          type="button"
          className={cssActivePage}
          onClick={() => handleChangeMenuPage(name)}
        >
          {name}
        </button>
      </Link>
    </>
  );
};

export default MenuPagesItem;
