import React from "react";
import "./style.scss";

const RankImage = ({ img }) => (
  <div>
    <img className="rank-image" alt="rank" src={img} />
  </div>
);

export default RankImage;
