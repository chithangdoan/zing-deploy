// Libs
import React from "react";
// Components
import ChildMenuList from "../ChildMenuList";
// SCSS
import "./style.scss";

const ChildMenu = ({ sub }) => {
  const renderList = sub.map(({ title, name, index }) => (
    <ChildMenuList key={index} title={title} name={name} />
  ));
  
  return (
    <div className="child-menu-wrapper">
      <div className="child-menu">{renderList}</div>
    </div>
  );
};

export default ChildMenu;
