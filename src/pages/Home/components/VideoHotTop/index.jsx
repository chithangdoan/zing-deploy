// libs
import React from "react";
// components
import VideoHotLink from "../VideoHotLink";
import VideoHotPagination from "../VideoHotPagination";
// scss
import "./style.scss";

const VideoHotTop = ({
  clickPreviousHandler,
  clickBackHandler,
  previousDisable,
  nextDisable,
}) => (
  <div className="video-hot-top">
    <VideoHotLink />
    <VideoHotPagination
      clickPreviousHandler={clickPreviousHandler}
      previousDisable={previousDisable}
      clickBackHandler={clickBackHandler}
      nextDisable={nextDisable}
    />
  </div>
);

export default VideoHotTop;
