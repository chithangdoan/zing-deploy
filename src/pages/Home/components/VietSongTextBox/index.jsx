// libs
import React from "react";
// components
import VietSongSong from "../VietSongSong";
import VietSongSinger from "../VietSongSinger";
// scss
import "./style.scss";

const VietSongTextBox = ({ item }) => (
  <div className="viet-song-text-box">
    <VietSongSong song={item.song} />
    <VietSongSinger singer={item.singer} />
  </div>
);

export default VietSongTextBox;
