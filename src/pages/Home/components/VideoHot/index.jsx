import React from "react";
import VideoHotLink from "../VideoHotLink";
import VideoHotList from "../VideoHotList";

const VideoHot = ({ handleChosenDiv }) => (
  <div>
    <VideoHotLink />
    <VideoHotList handleChosenDiv={handleChosenDiv} />
  </div>
);

export default VideoHot;
