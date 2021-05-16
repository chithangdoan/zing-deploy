import React from 'react';
import HotArtistMainPhoto from '../HotArtistMainPhoto';

const HotArtistMain = ({ main }) => {
  return (
    <div>
      <HotArtistMainPhoto img={main.img} />
    </div>
  );
};

export default HotArtistMain;
