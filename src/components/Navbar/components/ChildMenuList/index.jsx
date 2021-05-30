// libs
import React from "react";
// components
import ChildMenuLink from "../ChildMenuLink";
import ChildMenuTitle from "../ChildMenuTitle";
// scss
import "./style.scss";

const ChildMenuList = ({ title, list }) => (
  <div className="child-menu-list">
    <ChildMenuTitle title={title} />
    {list.map(({ item, index }) => (
      <ChildMenuLink key={index} link={item} />
    ))}
  </div>
);

export default ChildMenuList;
