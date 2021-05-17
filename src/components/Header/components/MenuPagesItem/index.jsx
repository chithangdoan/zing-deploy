// Libs
import React from "react";
// SCSS
import "./style.scss";

const MenuPagesItem = ({ item }) => (
  <>
    <button type="button" className="menu-pages-item">
      {item}
    </button>
  </>
);

export default MenuPagesItem;
