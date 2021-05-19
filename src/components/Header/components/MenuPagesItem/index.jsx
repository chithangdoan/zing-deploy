// Libs
import React from "react";
import { Link } from "react-router-dom";
// SCSS
import "./style.scss";

const MenuPagesItem = ({ item }) => (
  <>
    <Link to={item.path}>
      <button type="button" className="menu-pages-item">
        {item.name}
      </button>
    </Link>
  </>
);

export default MenuPagesItem;
