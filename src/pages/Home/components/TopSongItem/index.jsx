import React from 'react';
import classNames from 'classnames';
import './style.scss';

const TopSongItem = ({ item, index, activeIndex, handleMouseEnter }) => {
  const show =
    activeIndex === index ? { active: true } : { [`un-active`]: false };

  const css = classNames('top-song-img', show);

  return (
    <div className={css}>
      <img
        onMouseEnter={() => handleMouseEnter(item.img, index)}
        alt='top-song-item'
        src={item.img}
      />
    </div>
  );
};

export default TopSongItem;
