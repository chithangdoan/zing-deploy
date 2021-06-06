// libs
import React from "react";
// components
import HotArtistMainPhoto from "../HotArtistMainPhoto";
// css
import "./style.scss";

const HotArtistMain = ({ main }) => (
  <div className="hot-artist-main">
    <HotArtistMainPhoto img={main.img} />
  </div>
);

export default HotArtistMain;
