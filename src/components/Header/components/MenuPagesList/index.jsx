// Libs
import React, { useState } from "react";
import classNames from "classnames";
// Components
import MenuPagesItem from "../MenuPagesItem";
// constant
import { ROUTES } from "../../../../routes/AppRoute";
// hooks
import useLocale from "../../../../hooks/useLocale";
// SCSS
import "./style.scss";

const MenuPagesList = () => {
  const [activeMenuPage, setActiveMenuPage] = useState(ROUTES[0].name);

  const handleChangeMenuPage = (page) => {
    setActiveMenuPage(page);
  };

  const { activeStyleButton } = useLocale();

  const themeStyle = {
    "style-1": "menu-pages-list__style-1",
    "style-2": "menu-pages-list__style-2",
    "style-3": "menu-pages-list__style-3",
  };

  const css = classNames(themeStyle[activeStyleButton]);

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
