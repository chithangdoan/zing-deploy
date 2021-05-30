// libs
import React from "react";
// components
import AlbumHotItem from "../AlbumHotItem";
// css
import "./style.scss";

const AlbumHotList = ({ data }) => (
  <div className="album-hot-list">
    {data &&
      data.data.map((item) => <AlbumHotItem key={item.id} item={item} />)}
  </div>
);

export default AlbumHotList;
