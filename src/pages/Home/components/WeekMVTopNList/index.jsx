// libs
import React from "react";
// components
import WeekMVTopNItem from "../WeekMVTopNItem";

const WeekMVTopNList = ({ listItemTopN }) => (
  <div>
    {listItemTopN.map(({ item, index }) => (
      <WeekMVTopNItem key={index} item={item} />
    ))}
  </div>
);

export default WeekMVTopNList;
