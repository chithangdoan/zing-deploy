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

const renderList = listItem.map((item) => (
  <FooterList key={Math.random()} list={item.list} />
));
const FooterMultiList = () => (
  <div className="footer-multi-list">{renderList}</div>
);

export default FooterMultiList;
