// libs
import React from "react";
// components
import HotArtistName from "../HotArtistName";
import HotArtistIcon from "../HotArtistIcon";
// scss
import "./style.scss";

const HotArtistLink = () => (
  <div className="hot-artist-link">
    <HotArtistName />
    <HotArtistIcon />
  </div>
);

export default HotArtistLink;
