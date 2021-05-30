// libs
import React from "react";
// components
import RankItem from "../RankItem";
// mocks
import { topSong } from "../../../../mocks/Home/topSong";
// scss
import "./style.scss";

const renderList = topSong.map(({ number, img, song, singer }) => (
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
