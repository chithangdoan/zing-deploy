// Libs
import React from "react";
// Components
import ChildMenuList from "../ChildMenuList";
// SCSS
import "./style.scss";

const ChildMenu = ({ sub }) => {
  const renderList = sub.map((item) => (
    <ChildMenuList key={item.path} title={item.title} list={item.name} />
  ));
  return <div className="child-menu">{renderList}</div>;
};

export default ChildMenu;
