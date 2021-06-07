// libs
import React from "react";
// components
import TopSongItem from "../TopSongItem";
// scss
import "./style.scss";

const TopSongList = ({ topSong, imageDefault, handleMouseEnter }) => {
  const RenderList = topSong.map(({ img }) => (
    <TopSongItem
      key={Math.random()}
      img={img}
      imageDefault={imageDefault}
      handleMouseEnter={handleMouseEnter}
    />
  ));

  return <div className="top-song-list">{RenderList}</div>;
};

export default TopSongList;
