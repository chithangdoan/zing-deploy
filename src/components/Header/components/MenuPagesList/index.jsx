// Libs
import React, { useState } from "react";
// Components
import MenuPagesItem from "../MenuPagesItem";
// SCSS
import "./style.scss";
// constant
import { ROUTES } from "../../../../routes/appRoute";

const MenuPagesList = () => {
  const [activeMenuPage, setActiveMenuPage] = useState(ROUTES[0].name);

  const handleChangeMenuPage = (page) => {
    setActiveMenuPage(page);
  };

  const renderList = ROUTES.map(({ name, path }) => (
    <MenuPagesItem
      key={path}
      name={name}
      path={path}
      activeMenuPage={activeMenuPage}
      handleChangeMenuPage={handleChangeMenuPage}
    />
  ));

  return <div className="menu-pages-list">{renderList}</div>;
};

export default MenuPagesList;
