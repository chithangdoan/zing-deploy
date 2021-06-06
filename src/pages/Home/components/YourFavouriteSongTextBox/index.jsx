// libs
import React from "react";
// components
import YourFavouriteSongTitle from "../YourFavouriteSongTitle";
import YourFavouriteSongDes from "../YourFavouriteSongDes";
// css
import "./style.scss";

const YourFavouriteSongTextBox = () => (
  <div className="your-favourite-song-text-box">
    <YourFavouriteSongTitle />
    <YourFavouriteSongDes />
  </div>
);

export default YourFavouriteSongTextBox;
