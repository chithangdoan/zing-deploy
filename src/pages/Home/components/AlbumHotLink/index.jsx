import React from 'react';
import AlbumHotIcon from '../AlbumHotIcon';
import AlbumHotName from '../AlbumHotName';
import './style.scss';

const AlbumHotLink = () => {
  return (
    <div className='album-hot-link'>
      <AlbumHotName />
      <AlbumHotIcon />
    </div>
  );
};

export default AlbumHotLink;
