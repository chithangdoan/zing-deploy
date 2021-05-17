import React from "react";
import VietSongPhoto from "../VietSongPhoto";
import VietSongTextBox from "../VietSongTextBox";
import VietSongToolItem from "../VietSongToolItem";
import "./style.scss";

const VietSongItem = () => (
  <div className="viet-song-item">
    <VietSongPhoto />
    <VietSongTextBox />
    <VietSongToolItem />
  </div>
);

export default VietSongItem;
