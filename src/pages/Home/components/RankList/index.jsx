// libs
import React from "react";
// components
import RankItem from "../RankItem";
// mocks
import { rank } from "../../../../mocks/Home/rank";
// scss
import "./style.scss";

const renderList = rank.map(({ number, img, song, singer }) => (
  <RankItem
    key={Math.random()}
    number={number}
    img={img}
    song={song}
    singer={singer}
  />
));

const RankList = () => <div className="rank-list">{renderList}</div>;

export default RankList;
