import React from "react";
import TopSongItem from "../TopSongItem";
import "./style.scss";

const TopSongList = ({ listItem, activeIndex, handleMouseEnter }) => {
  const RenderList = listItem.map((item, index) => (
    <TopSongItem
      key={Math.random()}
      item={item}
      index={index}
      activeIndex={activeIndex}
      handleMouseEnter={handleMouseEnter}
    />
  ));

  return <div className="top-song-list">{RenderList}</div>;
};

export default TopSongList;
