// libs
import React from "react";
import { Button } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
// scss
import "./style.scss";

const VideoHotPagination = ({
  clickPreviousHandler,
  clickBackHandler,
  previousDisable,
  nextDisable,
}) => (
  <div>
    <div className="video-hot-pagination">
      <Button
        disabled={previousDisable}
        type="primary"
        onClick={() => {
          clickPreviousHandler();
        }}
      >
        <CaretLeftOutlined />
      </Button>
      <Button
        disabled={nextDisable}
        onClick={() => {
          clickBackHandler();
        }}
        type="primary"
      >
        <CaretRightOutlined />
      </Button>
    </div>
  </div>
);

export default VideoHotPagination;
