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
    <WeekMV />
    <WeekMV />
    <WeekMV />
    <WeekMV />
  </div>
);

export default ContentRight;
