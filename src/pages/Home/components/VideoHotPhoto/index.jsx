// libs
import React from "react";
// components
import VideoHotOverLay from "../VideoHotOverLay";
import VideoHotPlay from "../VideoHotPlay";
// scss
import "./style.scss";

const VideoHotPhoto = ({ img }) => (
  <div className="video-hot-photo-wrapper">
    <div className="video-hot-photo">
      <img alt="video-hot" src={img} />
    </div>
    <VideoHotOverLay />
    <VideoHotPlay />
  </div>
);

export default VideoHotPhoto;
