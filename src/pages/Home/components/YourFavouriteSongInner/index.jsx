// libs
import React from "react";
// components
import YourFavouriteSongPhoto from "../YourFavouriteSongPhoto";
import YourFavouriteSongTextBox from "../YourFavouriteSongTextBox";
// css
import "./style.scss";

const YourFavouriteSongInner = () => (
  <div className="your-favourite-song-inner">
    <YourFavouriteSongPhoto />
    <YourFavouriteSongTextBox />
  </div>
);

export default YourFavouriteSongInner;
