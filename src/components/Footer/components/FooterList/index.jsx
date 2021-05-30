// libs
import React from "react";
// components
import FooterItem from "../FooterItem";

const FooterList = ({ list }) => (
  <div>
    {list.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <FooterItem key={index} link={item} />
    ))}
  </div>
);

export default FooterList;
