// libs
import React, { useContext } from "react";
// contexts
import PaginationContext from "../../../../contexts/paginationContext";
// components
import VideoHotItem from "../VideoHotItem";
// css
import "./style.scss";

const VideoHotList = () => {
  const { dataVideo } = useContext(PaginationContext);

  return (
    <div className="video-hot-list">
      {dataVideo &&
        dataVideo.data.map((item) => (
          <VideoHotItem key={item.id} item={item} />
        ))}
    </div>
  );
};

export default VideoHotList;
