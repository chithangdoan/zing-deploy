// libs
import React from "react";
import classNames from "classnames";
// scss
import "./style.scss";

const TopSongItem = ({ img, imageDefault, handleMouseEnter }) => {
  const css = classNames("top-song-item", {
    active: img === imageDefault,
  });

  return (
    <div className={css}>
      <img
        alt="top-song-item"
        src={img}
        onMouseEnter={() => handleMouseEnter(img)}
      />
    </div>
  );
};

export default TopSongItem;
