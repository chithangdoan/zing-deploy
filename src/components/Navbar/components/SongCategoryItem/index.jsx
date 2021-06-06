// libs
import React from "react";
// components
import SongCategoryLink from "../SongCategoryLink";
import ChildMenu from "../ChildMenu";
// scss
import "./style.scss";

const SongCategoryItem = ({ name, sub }) => (
  <div className="song-category-item">
    <SongCategoryLink name={name} />
    <ChildMenu sub={sub} />
  </div>
);

export default SongCategoryItem;
