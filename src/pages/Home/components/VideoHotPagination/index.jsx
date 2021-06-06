// libs
import React, { useContext } from "react";
import { Button } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
// contexts
import PaginationContext from "../../../../contexts/paginationContext";
// css
import "./style.scss";

const VideoHotPagination = () => {
  const {
    clickPreviousHandlerVideo,
    clickBackHandlerVideo,
    previousDisableVideo,
    nextDisableVideo,
  } = useContext(PaginationContext);

  return (
    <div className="video-hot-pagination">
      <Button
        disabled={previousDisableVideo}
        type="primary"
        onClick={() => {
          clickPreviousHandlerVideo();
        }}
      >
        <CaretLeftOutlined />
      </Button>
      <Button
        disabled={nextDisableVideo}
        onClick={() => {
          clickBackHandlerVideo();
        }}
        type="primary"
      >
        <CaretRightOutlined />
      </Button>
    </div>
  );
};

export default VideoHotPagination;
