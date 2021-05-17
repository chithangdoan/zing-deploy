// Libs
import React from "react";
// Components
import MenuPagesItem from "../MenuPagesItem";
// SCSS
import "./style.scss";

const listItem = ["MP3", "NEWS", "TV", "ZALO PC"];

const renderList = listItem.map((item) => <MenuPagesItem item={item} />);

const MenuPagesList = () => <div className="menu-pages-list">{renderList}</div>;

export default MenuPagesList;
