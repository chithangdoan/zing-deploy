import React from "react";
import VietSongLeft from "../VietSongLeft";
import VietSongRight from "../VietSongRight";
import "./style.scss";

const VietSong = () => (
  <div className="viet-song">
    <VietSongLeft />
    <VietSongRight />
  </div>
);

export default VietSong;