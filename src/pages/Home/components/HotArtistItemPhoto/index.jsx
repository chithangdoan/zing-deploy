// libs
import React from "react";
// scss
import "./style.scss";

const HotArtistItemPhoto = ({ img }) => (
  <div className="hot-artist-item-photo">
    <img alt="hot-artist-item" src={img} />
  </div>
);

export default HotArtistItemPhoto;
