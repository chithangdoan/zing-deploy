import React from 'react';
import HotArtistIcon from '../HotArtistIcon';
import HotArtistName from '../HotArtistName';
import './style.scss';

const HotArtistLink = () => {
  return (
    <div className='hot-artist-link'>
      <HotArtistName />
      <HotArtistIcon />
    </div>
  );
};

export default HotArtistLink;
