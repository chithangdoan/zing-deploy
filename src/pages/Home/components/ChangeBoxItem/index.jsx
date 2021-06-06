// libs
import React from "react";
// components
import ChangeBoxPhoto from "../ChangeBoxPhoto";
import ChangeBoxSong from "../ChangeBoxSong";
// scss
import "./style.scss";

const ChangeBoxItem = ({ img, song }) => (
  <div className="change-box-item">
    <ChangeBoxPhoto img={img} />
    <ChangeBoxSong song={song} />
  </div>
);

export default ChangeBoxItem;
