import React from "react";
import HotArtistItem from "../HotArtistItem";
import "./style.scss";

const HotArtistRight = ({ sub }) => {
  const renderList = sub.map((item) => <HotArtistItem item={item} />);
  return <div className="hot-artist-right">{renderList}</div>;
};

export default HotArtistRight;
