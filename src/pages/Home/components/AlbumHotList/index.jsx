// libs
import React from "react";
// components
import AlbumHotItem from "../AlbumHotItem";
// css
import "./style.scss";

const AlbumHotList = ({ handleChosenDiv, album }) => (
  <div
    className="album-hot-list"
    onMouseEnter={() => {
      handleChosenDiv("album");
    }}
  >
    {album &&
      album.data.map((item) => <AlbumHotItem key={item.id} item={item} />)}
  </div>
);

export default AlbumHotList;
