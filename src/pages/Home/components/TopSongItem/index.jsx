// libs
import React from "react";
import classNames from "classnames";
// scss
import "./style.scss";

const TopSongItem = ({ item, topSong, activeIndex, handleMouseEnter }) => {
  const indexHoverSong = topSong.findIndex((song) => song.img === item.img);

  const activeBorder = indexHoverSong === activeIndex;

  const css = classNames("top-song-item", { active: activeBorder });

  return (
    <div className={css}>
      <img
        alt="top-song-item"
        src={item.img}
        onMouseEnter={() => handleMouseEnter(item.img)}
      />
    </div>
  );
};

export default TopSongItem;
