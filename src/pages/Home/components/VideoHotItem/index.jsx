// libs
import React from "react";
// components
import VideoHotPhoto from "../VideoHotPhoto";
import VideoHotSong from "../VideoHotSong";
import VideoHotSinger from "../VideoHotSinger";
// scss
import "./style.scss";

const VideoHotItem = ({ item }) => (
  <div className="video-hot-item">
    <VideoHotPhoto img={item.img} />
    <VideoHotSong song={item.song} />
    <VideoHotSinger singer={item.singer} />
  </div>
);

export default VideoHotItem;
