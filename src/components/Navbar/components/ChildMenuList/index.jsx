// libs
import React from "react";
// components
import ChildMenuLink from "../ChildMenuLink";
import ChildMenuTitle from "../ChildMenuTitle";
// scss
import "./style.scss";

const ChildMenuList = ({ title, list }) => {
  const renderList = list.map((item) => <ChildMenuLink link={item} />);
  return (
    <div className="child-menu-list">
      <ChildMenuTitle title={title} />
      {renderList}
    </div>
  );
};

export default ChildMenuList;
