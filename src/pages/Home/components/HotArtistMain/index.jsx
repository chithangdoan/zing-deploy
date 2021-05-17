// libs
import React from "react";
// components
import HotArtistMainPhoto from "../HotArtistMainPhoto";

const HotArtistMain = ({ main }) => (
  <div>
    <HotArtistMainPhoto img={main.img} />
  </div>
);

export default HotArtistMain;
