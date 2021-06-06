// libs
import React from "react";
// components
import ChildMenuTitle from "../ChildMenuTitle";
import ChildMenuLink from "../ChildMenuLink";
// scss
import "./style.scss";

const ChildMenuList = ({ title, name }) => (
  <div className="child-menu-list">
    <ChildMenuTitle title={title} />

    {name.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ChildMenuLink key={index} item={item} />
    ))}
  </div>
);

export default ChildMenuList;
