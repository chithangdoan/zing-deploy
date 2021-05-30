// libs
import React from "react";
// components
import WeekMVTabList from "../WeekMVTabList";
import WeekMVTop1 from "../WeekMVTop1";
import WeekMVTopNList from "../WeekMVTopNList";
// scss
import "./style.scss";

const WeekMVList = ({ tabsName, currentTab, handleSongs, currentSongs }) => {
  const [top1WeekMV, topNListWeekMV] = [
    currentSongs[0],
    currentSongs.slice(1, currentSongs.length + 1),
  ];

  const { img, number, song, singer } = top1WeekMV;

  return (
    <div className="week-mv-list">
      <WeekMVTabList
        tabsName={tabsName}
        currentTab={currentTab}
        handleSongs={handleSongs}
      />
      <WeekMVTop1 img={img} number={number} song={song} singer={singer} />
      <WeekMVTopNList topNListWeekMV={topNListWeekMV} />
    </div>
  );
};

export default WeekMVList;
