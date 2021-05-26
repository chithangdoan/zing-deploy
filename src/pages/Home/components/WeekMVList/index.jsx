// libs
import React from "react";
// scss
import "./style.scss";

const WeekMVList = ({ currentSongs }) => {
  const render = currentSongs.map(({ song }) => <p>{song}</p>);
  return <div className="week-mv-list">{render}</div>;
};

export default WeekMVList;
