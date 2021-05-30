// libs
import React from "react";
// components
import WeekMVTop1Item from "../WeekMVTop1Item";
import WeekMVTop1Overlay from "../WeekMVTop1Overlay";
import WeekMVTop1Play from "../WeekMVTop1Play";
// scss
import "./style.scss";

const WeekMVTop1 = ({ img, number, song, singer }) => (
  <div className="week-mv-top-1">
    <WeekMVTop1Item img={img} number={number} song={song} singer={singer} />
    <WeekMVTop1Overlay />
    <WeekMVTop1Play />
  </div>
);

export default WeekMVTop1;
