import React from "react";
import WeekMVTopNItem from "../WeekMVTopNItem";

const WeekMVTopNList = ({ listItemTopN }) => {
  const renderListItem = listItemTopN.map((item) => (
    <WeekMVTopNItem item={item} />
  ));

  return <div>{renderListItem}</div>;
};

export default WeekMVTopNList;