// libs
import React from "react";
// components
import TopSongItem from "../TopSongItem";
// scss
import "./style.scss";

const TopSongList = ({ listItem, activeIndex, handleMouseEnter }) => (
  <div className="top-song-list">
    {listItem.map(({ item, index }) => (
      <TopSongItem
        key={index}
        item={item}
        index={index}
        activeIndex={activeIndex}
        handleMouseEnter={handleMouseEnter}
      />
    ))}
  </div>
);

export default TopSongList;
