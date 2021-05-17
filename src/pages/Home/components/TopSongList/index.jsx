import React from 'react';
import PropTypes from 'prop-types';
import TopSongItem from '../TopSongItem';
import './style.scss';

const TopSongList = ({ listItem, activeIndex, handleMouseEnter }) => {
  const RenderList = listItem.map((item, index) => (
    <TopSongItem
      key={index}
      item={item}
      index={index}
      activeIndex={activeIndex}
      handleMouseEnter={handleMouseEnter}
    />
  ));

  return <div className='top-song-list'>{RenderList}</div>;
};

export default TopSongList;
