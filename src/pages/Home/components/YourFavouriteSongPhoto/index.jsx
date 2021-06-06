// libs
import React from "react";
import { RightCircleOutlined } from "@ant-design/icons";
// css
import "./style.scss";

const YourFavouriteSongPhoto = () => (
  <div className="your-favourite-song-photo">
    <img alt="your-favourite-song" src="https://bit.ly/3wXT0Yo" />
    <RightCircleOutlined style={{ fontSize: "2rem" }} />
  </div>
);

export default YourFavouriteSongPhoto;
