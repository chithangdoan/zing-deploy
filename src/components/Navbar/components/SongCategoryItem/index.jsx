// libs
import React from "react";
// components
import SongCategoryLink from "../SongCategoryLink";
import ChildMenu from "../ChildMenu";
// scss
import "./style.scss";

const SongCategoryItem = ({ item }) => (
  <div className="song-category-item">
    <SongCategoryLink name={item.name} />
    <ChildMenu sub={item.sub} />
  </div>
);

export default SongCategoryItem;
