// Libs
import React from "react";
// Components
import MenuPagesItem from "../MenuPagesItem";
// SCSS
import "./style.scss";
// constant
import { ROUTES } from "../../../../routes/appRoute";

const renderList = ROUTES.map((item) => <MenuPagesItem item={item} />);

const MenuPagesList = () => <div className="menu-pages-list">{renderList}</div>;

export default MenuPagesList;
