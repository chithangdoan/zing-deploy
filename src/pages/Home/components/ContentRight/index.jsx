// libs
import React from "react";
// components
import WeekMV from "../WeekMV";
import HotTopic from "../HotTopic";
import YourFavouriteSong from "../YourFavouriteSong";

const ContentRight = () => (
  <div className="content-right">
    <YourFavouriteSong />
    <HotTopic />
    <HotTopic />
    <WeekMV />
    <HotTopic />
    <HotTopic />
  </div>
);

export default ContentRight;
