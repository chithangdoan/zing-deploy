import React from 'react';
import './style.scss';

const HotArtistItemPhoto = ({ img }) => {
  return (
    <div className='hot-artist-item-photo'>
      <img alt='hot-artist-item-photo' src={img} />
    </div>
  );
};

export default HotArtistItemPhoto;
