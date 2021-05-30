// libs
import React from "react";
// components
import FooterList from "../FooterList";
// scss
import "./style.scss";

const listItem = [
  {
    list: ["Giới thiệu", "Copyright", "APIs"],
  },
  {
    list: ["Giới thiệu", "Copyright", "APIs"],
  },
  {
    list: ["Giới thiệu", "Copyright", "APIs"],
  },
  {
    list: ["Giới thiệu", "Copyright", "APIs"],
  },
];

const FooterMultiList = () => (
  <div className="footer-multi-list">
    {listItem.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <FooterList key={index} list={item.list} />
    ))}
  </div>
);

export default FooterMultiList;
