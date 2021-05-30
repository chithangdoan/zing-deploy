import React from "react";
import WeekMVTopNItemLeft from "../WeekMVTopNItemLeft";
import WeekMVTopNItemRight from "../WeekMVTopNItemRight";
import "./style.scss";

const WeekMVTopNItem = ({ img, number, song, singer }) => (
  <div className="week-mv-top-n-item">
    <WeekMVTopNItemLeft img={img} number={number} />
    <WeekMVTopNItemRight song={song} singer={singer} />
  </div>
);

export default WeekMVTopNItem;
