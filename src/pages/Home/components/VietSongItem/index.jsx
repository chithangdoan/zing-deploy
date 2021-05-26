// libs
import React from "react";
// components
import VietSongPhoto from "../VietSongPhoto";
import VietSongTextBox from "../VietSongTextBox";
import VietSongToolItem from "../VietSongToolItem";
// scss
import "./style.scss";

const VietSongItem = ({ item }) => (
  <div className="viet-song-item">
    <VietSongPhoto img={item.img} />
    <VietSongTextBox item={item} />
    <VietSongToolItem />
  </div>
);

export default VietSongItem;
