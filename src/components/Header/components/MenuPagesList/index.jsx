// Libs
import React from "react";
// Components
import MenuPagesItem from "../MenuPagesItem";
// SCSS
import "./style.scss";
// constant
import { PATH } from "../../../../constants/path";

const renderList = PATH.map((item) => <MenuPagesItem item={item} />);

const MenuPagesList = () => <div className="menu-pages-list">{renderList}</div>;

export default MenuPagesList;
