// libs
import React from "react";
// components
import WeekMVTopNItem from "../WeekMVTopNItem";
// scss
import "./style.scss";

const WeekMVTopNList = ({ topNListWeekMV }) => {
  const renderList = topNListWeekMV.map(({ img, number, song, singer }) => (
    <WeekMVTopNItem img={img} number={number} song={song} singer={singer} />
  ));
  return <div className="week-mv-top-n-list">{renderList}</div>;
};

export default WeekMVTopNList;
