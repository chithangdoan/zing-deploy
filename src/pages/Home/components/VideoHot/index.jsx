// libs
import React from "react";
// components
import VideoHotTop from "../VideoHotTop";
import VideoHotList from "../VideoHotList";
// hooks
import usePagination from "../../../../hooks/use-pagination";
import useHover from "../../../../hooks/use-hover";

const VideoHot = ({ handleChosenDiv }) => {
  const video = "video";
  const [hoverRef, isHovered] = useHover(null);
  const [
    data,
    clickPreviousHandler,
    clickBackHandler,
    previousDisable,
    nextDisable,
  ] = usePagination(video, isHovered);

  return (
    <div ref={hoverRef} className="video-hot">
      <VideoHotTop
        clickPreviousHandler={clickPreviousHandler}
        clickBackHandler={clickBackHandler}
        previousDisable={previousDisable}
        nextDisable={nextDisable}
      />
      <VideoHotList handleChosenDiv={handleChosenDiv} data={data} />
    </div>
  );
};

export default VideoHot;
