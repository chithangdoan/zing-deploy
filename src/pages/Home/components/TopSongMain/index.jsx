import React from 'react';
import './style.scss';

const TopSongMain = ({ imageDefault }) => {
  return (
    <div>
      <img className='top-song-main' alt='top-song-main' src={imageDefault} />
    </div>
  );
};

export default TopSongMain;
