// libs
import React from "react";
// components
import FooterItem from "../FooterItem";

const FooterList = ({ list }) => {
  const renderItem = list.map((item) => <FooterItem link={item} />);
  return <div>{renderItem}</div>;
};

export default FooterList;
