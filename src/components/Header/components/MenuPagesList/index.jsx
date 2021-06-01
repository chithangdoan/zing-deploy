// Libs
import React, { useState } from "react";
import classNames from "classnames";
// Components
import MenuPagesItem from "../MenuPagesItem";
// constant
import { ROUTES } from "../../../../routes/appRoute";
// hooks
import useLocale from "../../../../hooks/useLocale";
// SCSS
import "./style.scss";

const MenuPagesList = () => {
  const [activeMenuPage, setActiveMenuPage] = useState(ROUTES[0].name);

  const handleChangeMenuPage = (page) => {
    setActiveMenuPage(page);
  };

  const styleButton = useLocale();

  const css = classNames({
    "menu-pages-list__style-1": styleButton.activeStyleButton === "style-1",
  });

  const renderList = ROUTES.map(({ name, path }) => (
    <MenuPagesItem
      key={path}
      name={name}
      path={path}
      activeMenuPage={activeMenuPage}
      handleChangeMenuPage={handleChangeMenuPage}
    />
  ));

  return <div className={css}>{renderList}</div>;
};

export default MenuPagesList;
