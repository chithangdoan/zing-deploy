import React from "react";
import WeekMVTopNImage from "../WeekMVTopNImage";
import WeekMVTopNNumber from "../WeekMVTopNNumber";
import WeekMVTopNOverplay from "../WeekMVTopNOverplay";
import "./style.scss";

const WeekMVTopNItemLeft = ({ img, number }) => (
  <div className="week-mv-top-n-item-left">
    <WeekMVTopNImage img={img} />
    <WeekMVTopNOverplay />
    <WeekMVTopNNumber number={number} />
  </div>
);

export default WeekMVTopNItemLeft;
