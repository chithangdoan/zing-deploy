import React from 'react';
import HotArtistItemPhoto from '../HotArtistItemPhoto';

const HotArtistItem = ({ item }) => {
  return (
    <div>
      <HotArtistItemPhoto img={item.img} />
    </div>
  );
};

export default HotArtistItem;
