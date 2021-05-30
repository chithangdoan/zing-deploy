// libs
import React from "react";
// components
import FooterItem from "../FooterItem";

const FooterList = ({ list }) => (
  <div>
    {list.map(({ item, index }) => (
      <FooterItem key={index} link={item} />
    ))}
  </div>
);

export default FooterList;
