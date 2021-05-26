// libs
import React from "react";
import { Button } from "antd";
// scss
import "./style.scss";

const WeekMVTabItem = ({ tabName, handleSongs }) => (
  <div className="week-mv-tab-item">
    <Button
      onClick={() => {
        handleSongs(tabName);
      }}
      type="primary"
    >
      {tabName}
    </Button>
  </div>
);

export default WeekMVTabItem;
