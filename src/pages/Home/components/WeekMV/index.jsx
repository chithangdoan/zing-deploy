// libs
import React, { useState } from "react";
// components
import WeekMVLink from "../WeekMVLink";
// import WeekMVTabList from "../WeekMVTabList";
import WeekMVList from "../WeekMVList";
// mocks
import { tabMenuWeekMV, listSongsWeekMV } from "../../../../mocks/Home/weekMV";

const WeekMV = () => {
  const [currentTab, setCurrentTab] = useState(tabMenuWeekMV[0]);

  const [currentSongs, setCurrentSongs] = useState(
    listSongsWeekMV[tabMenuWeekMV[0]]
  );

  const handleSongs = (tab) => {
    setCurrentTab(tab);
    setCurrentSongs(listSongsWeekMV[tab]);

    console.log(listSongsWeekMV[tab]);
  };

  return (
    <div className="week-mv">
      <WeekMVLink />
      <WeekMVList
        tabsName={tabMenuWeekMV}
        currentTab={currentTab}
        handleSongs={handleSongs}
        currentSongs={currentSongs}
      />
    </div>
  );
};

export default WeekMV;
