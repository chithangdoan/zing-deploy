// libs
import React from "react";
// components
import HotArtistItemPhoto from "../HotArtistItemPhoto";

const HotArtistItem = ({ item }) => (
  <div>
    <HotArtistItemPhoto img={item.img} />
  </div>
);

export default HotArtistItem;
