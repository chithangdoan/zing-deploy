// libs
import React from "react";
import WeekMVTabItem from "../WeekMVTabItem";
// components

// scss
import "./style.scss";

const WeekMVTabList = ({ tabsName, currentTab, handleSongs }) => {
  const renderList = tabsName.map((tabName) => (
    <WeekMVTabItem
      key={Math.random()}
      tabName={tabName}
      currentTab={currentTab}
      handleSongs={handleSongs}
    />
  ));

  return <div className="week-mv-tab-list">{renderList}</div>;
};

export default WeekMVTabList;
