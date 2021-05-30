// libs
import React from "react";
// components
import TopSongItem from "../TopSongItem";
// scss
import "./style.scss";

const TopSongList = ({ topSong, activeIndex, handleMouseEnter }) => {
  const RenderList = topSong.map((item) => (
    <TopSongItem
      key={Math.random()}
      item={item}
      topSong={topSong}
      activeIndex={activeIndex}
      handleMouseEnter={handleMouseEnter}
    />
  ));

  return <div className="top-song-list">{RenderList}</div>;
};

export default TopSongList;
