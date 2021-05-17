// libs
import React from "react";
// components
import AlbumHotName from "../AlbumHotName";
import AlbumHotIcon from "../AlbumHotIcon";
// scss
import "./style.scss";

const AlbumHotLink = () => (
  <div className="album-hot-link">
    <AlbumHotName />
    <AlbumHotIcon />
  </div>
);

export default AlbumHotLink;
