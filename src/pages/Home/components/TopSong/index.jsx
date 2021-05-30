// libs
import React, { useState, useEffect } from "react";
// components
import TopSongList from "../TopSongList";
import TopSongMain from "../TopSongMain";
// mocks
import { topSong } from "../../../../mocks/Home/topSong";

const TopSong = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const [imageDefault, setImageDefault] = useState(topSong[activeIdx].img);

  useEffect(() => {
    const time = setInterval(() => {
      if (activeIdx >= topSong.length - 1) {
        setActiveIdx(0);
      } else {
        setActiveIdx(activeIdx + 1);
      }
      setImageDefault(topSong[activeIdx].img);
    }, 3000);

    return () => clearInterval(time);
  }, [activeIdx]);

  const handleMouseEnter = (imgHover) => {
    const indexHoverSong = topSong.findIndex((song) => song.img === imgHover);

    if (indexHoverSong !== -1) {
      setActiveIdx(indexHoverSong);
      setImageDefault(topSong[indexHoverSong].img);
    }
  };

  return (
    <div className="top-song">
      <TopSongMain imageDefault={imageDefault} />
      <TopSongList
        topSong={topSong}
        activeIndex={activeIdx}
        handleMouseEnter={handleMouseEnter}
      />
    </div>
  );
};

export default TopSong;
