// libs
import React from "react";
// components
import "./style.scss";

const HotTopicItem = ({ img }) => (
  <div className="hot-topic-item">
    <img alt="hot-topic" src={img} />
  </div>
);

export default HotTopicItem;
