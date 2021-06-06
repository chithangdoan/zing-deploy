// libs
import React from "react";
// components
import VideoHotLink from "../VideoHotLink";
import VideoHotPagination from "../VideoHotPagination";
// scss
import "./style.scss";

const VideoHotTop = () => (
  <div className="video-hot-top">
    <VideoHotLink />
    <VideoHotPagination />
  </div>
);

export default VideoHotTop;
