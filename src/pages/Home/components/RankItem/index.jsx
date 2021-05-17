import React from "react";
import RankDash from "../RankDash";
import RankImage from "../RankImage";
import RankNumber from "../RankNumber";
import RankTextBox from "../RankTextBox";
import RankToolList from "../RankToolList";

import "./style.scss";

const RankItem = ({ item }) => (
  <div className="rank-item">
    <RankNumber number={item.number} />
    <RankDash />
    <RankImage img={item.img} />
    <RankTextBox song={item.song} singer={item.singer} />
    <RankToolList />
  </div>
);

export default RankItem;
