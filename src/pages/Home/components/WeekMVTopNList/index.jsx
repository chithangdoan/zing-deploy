import React from "react";
import WeekMVTopNItem from "../WeekMVTopNItem";

const WeekMVTopNList = ({ topN }) => {
  const renderListItem = topN.map(({ id, img, number, song, singer }) => (
    <WeekMVTopNItem
      key={id}
      img={img}
      number={number}
      song={song}
      singer={singer}
    />
  ));

  return <div>{renderListItem}</div>;
};

export default WeekMVTopNList;
