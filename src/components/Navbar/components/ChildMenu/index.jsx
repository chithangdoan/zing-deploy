// Libs
import React from "react";
// Components
import ChildMenuList from "../ChildMenuList";
// SCSS
import "./style.scss";

const ChildMenu = ({ sub }) => (
  <div className="child-menu-wrapper">
    <div className="child-menu">
      {sub.map(({ title, name, index }) => (
        <ChildMenuList key={index} title={title} name={name} />
      ))}
    </div>
  </div>
);

export default ChildMenu;
