// libs
import React from "react";
// components
import VietSongNewLink from "../VietSongNewLink";
import VietSongNewList from "../VietSongNewList";
// css
import "./style.scss";

const VietSongRight = () => (
  <div className="viet-song-right">
    <VietSongNewLink />
    <VietSongNewList />
  </div>
);

export default VietSongRight;
