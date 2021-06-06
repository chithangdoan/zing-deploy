// libs
import React from "react";
// components
import YourFavouriteSongInner from "../YourFavouriteSongInner";
// css
import "./style.scss";

const YourFavouriteSong = () => (
  <div className="your-favourite-song">
    <img src="https://bit.ly/2TBVTQ8" alt="your-favourite-song" />
    <div className="your-favourite-song-overlay"></div>
    <YourFavouriteSongInner />
  </div>
);

export default YourFavouriteSong;

// https://bit.ly/2TBVTQ8

// src = "https://bit.ly/3wXT0Yo";
