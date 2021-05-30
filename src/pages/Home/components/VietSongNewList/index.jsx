// libs
import React from "react";
// components
import VietSongItem from "../VietSongItem";
// mocks
import { vietSong } from "../../../../mocks/Home/vietSong";
// scss
import "./style.scss";

const renderList = vietSong.map((item) => (
  <VietSongItem key={item.id} item={item} />
));
const VietSongNewList = () => (
  <div className="viet-song-new-list">{renderList}</div>
);

export default VietSongNewList;
