// libs
import React from "react";
// components
import HotArtistItemPhoto from "../HotArtistItemPhoto";

const HotArtistItem = ({ item }) => (
  <div className="hot-artist-item">
    <HotArtistItemPhoto img={item.img} />
  </div>
);

export default HotArtistItem;
