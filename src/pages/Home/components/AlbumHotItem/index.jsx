// libs
import React from "react";
// components
import AlbumHotPhoto from "../AlbumHotPhoto";
import AlbumHotSong from "../AlbumHotSong";
import AlbumHotSinger from "../AlbumHotSinger";

const AlbumHotItem = ({ item }) => (
  <div className="album-hot-item">
    <AlbumHotPhoto img={item.img} />
    <AlbumHotSong song={item.song} />
    <AlbumHotSinger singer={item.singer} />
  </div>
);

export default AlbumHotItem;
