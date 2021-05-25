// libs
import React from "react";
// scss
import "./style.scss";

const AlbumHotPhoto = ({ img }) => (
  <div className="album-hot-photo">
    <img alt="album-hot" src={img} />
  </div>
);

export default AlbumHotPhoto;
