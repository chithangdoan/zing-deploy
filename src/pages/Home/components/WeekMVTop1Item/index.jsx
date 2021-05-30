// libs
import React from "react";
// components
import WeekMVTop1Image from "../WeekMVTop1Image";
import WeekMVTop1Number from "../WeekMVTop1Number";
import WeekMVTop1TextBox from "../WeekMVTop1TextBox";
// scss
import "./style.scss";

const WeekMVTop1Item = ({ img, number, song, singer }) => (
  <div className="week-mv-top-1-item">
    <WeekMVTop1Image img={img} />
    <WeekMVTop1Number number={number} />
    <WeekMVTop1TextBox song={song} singer={singer} />
  </div>
);

export default WeekMVTop1Item;
