// libs
import React, { useContext } from "react";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
// contexts
import PaginationContext from "../../../../contexts/paginationContext";
// scss
import "./style.scss";

const ChangeBoxPagination = () => {
  const {
    clickPreviousHandlerLove,
    clickBackHandlerLove,
    previousDisableLove,
    nextDisableLove,
  } = useContext(PaginationContext);
  return (
    <div className="change-box-song">
      <div className="video-hot-pagination">
        <Button
          disabled={previousDisableLove}
          type="primary"
          onClick={() => {
            clickPreviousHandlerLove();
          }}
        >
          <CaretLeftOutlined />
        </Button>
        <Button
          disabled={nextDisableLove}
          onClick={() => {
            clickBackHandlerLove();
          }}
          type="primary"
        >
          <CaretRightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default ChangeBoxPagination;
