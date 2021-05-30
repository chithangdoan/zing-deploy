// libs
import React from "react";
import classNames from "classnames";
import { Button } from "antd";
// scss
import "./style.scss";

const WeekMVTabItem = ({ tabName, currentTab, handleSongs }) => {
  const css = classNames("week-mv-tab-item", {
    "active-week-mv": currentTab === tabName,
  });

  return (
    <div className={css}>
      <Button
        onClick={() => {
          handleSongs(tabName);
        }}
        type="primary"
        disabled={currentTab === tabName}
      >
        {tabName}
      </Button>
    </div>
  );
};

export default WeekMVTabItem;
