import React from "react";
import RankDash from "../RankDash";
import RankImage from "../RankImage";
import RankNumber from "../RankNumber";
import RankTextBox from "../RankTextBox";
import RankToolList from "../RankToolList";

import "./style.scss";

const RankItem = ({ number, img, song, singer }) => (
  <div className="rank-item">
    <RankNumber number={number} />
    <RankDash />
    <RankImage img={img} />
    <RankTextBox song={song} singer={singer} />
    <RankToolList />
  </div>
);

export default RankItem;
