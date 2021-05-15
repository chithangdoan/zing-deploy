import React from 'react';
import './style.scss';

const TopSongItem = ({ img }) => {
  return (
    <div>
      <img className='top-song-img' alt='top-song-item' src={img} />
    </div>
  );
};

export default TopSongItem;
