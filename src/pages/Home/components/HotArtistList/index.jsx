// libs
import React from "react";
// components
import HotArtistLeft from "../HotArtistLeft";
import HotArtistRight from "../HotArtistRight";
// mocks
import { hotArtist } from "../../../../mocks/Home/hotArtist";
// scss
import "./style.scss";

const main = hotArtist.shift();
const sub = hotArtist;

const HotArtistList = () => (
  <div className="hot-artist-list">
    <HotArtistLeft main={main} />
    <HotArtistRight sub={sub} />
  </div>
);

export default HotArtistList;
