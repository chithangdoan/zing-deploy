// libs
import React from "react";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
// scss
import "./style.scss";
import { Button } from "antd";

const AlbumHotPagination = ({
  clickPreviousHandler,
  clickBackHandler,
  previousDisable,
  nextDisable,
}) => (
  <div className="album-hot-pagination">
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
);

export default AlbumHotPagination;
