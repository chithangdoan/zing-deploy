import React from "react";
import RankSinger from "../RankSinger";
import RankSong from "../RankSong";

import "./style.scss";

const RankTextBox = ({ song, singer }) => (
  <div className="rank-text-box">
    <RankSong song={song} />
    <RankSinger singer={singer} />
  </div>
);

export default RankTextBox;
