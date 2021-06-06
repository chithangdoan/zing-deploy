// libs
import React from "react";
// contexts
import PaginationContext from "../../../../contexts/paginationContext";
// components
import VideoHotTop from "../VideoHotTop";
import VideoHotList from "../VideoHotList";
// hooks
import usePagination from "../../../../hooks/usePagination";
import useHover from "../../../../hooks/useHover";

const VideoHot = () => {
  const video = "video";

  const [hoverRef, isHovered] = useHover(null);

  const [
    dataVideo,
    clickPreviousHandlerVideo,
    clickBackHandlerVideo,
    previousDisableVideo,
    nextDisableVideo,
  ] = usePagination(video, isHovered);

  return (
    <PaginationContext.Provider
      value={{
        dataVideo,
        clickPreviousHandlerVideo,
        clickBackHandlerVideo,
        previousDisableVideo,
        nextDisableVideo,
      }}
    >
      <div ref={hoverRef} className="video-hot">
        <VideoHotTop />
        <VideoHotList />
      </div>
    </PaginationContext.Provider>
  );
};

export default VideoHot;
