import React from "react";
import WeekMVTopNSinger from "../WeekMVTopNSinger";
import WeekMVTopNSong from "../WeekMVTopNSong";
import "./style.scss";

const WeekMVTopNItemRight = ({ song, singer }) => (
  <div className="week-mv-top-n-right">
    <WeekMVTopNSong song={song} />
    <WeekMVTopNSinger singer={singer} />
  </div>
);

export default WeekMVTopNItemRight;
