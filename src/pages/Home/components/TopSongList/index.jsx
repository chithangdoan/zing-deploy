import React from 'react';
import TopSongItem from '../TopSongItem';
import './style.scss';

const TopSongList = ({ listItem }) => {
  const RenderList = listItem.map((item) => <TopSongItem img={item.img} />);

  return <div className='top-song-list'>{RenderList}</div>;
};

export default TopSongList;
