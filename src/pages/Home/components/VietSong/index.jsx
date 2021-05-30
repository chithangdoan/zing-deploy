// libs
import React from "react";
// components
import VietSongLeft from "../VietSongLeft";
import VietSongRight from "../VietSongRight";
// scss
import "./style.scss";

const VietSong = () => (
  <div className="viet-song">
    <VietSongLeft />
    <VietSongRight />
  </div>
);

export default VietSong;
