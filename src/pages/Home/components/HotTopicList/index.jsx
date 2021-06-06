// libs
import React from "react";
import HotTopicItem from "../HotTopicItem";
// css
import "./style.scss";

const listItem = [
  {
    id: Math.random(),
    img: "https://bit.ly/3vWa0xX",
  },
  {
    id: Math.random(),
    img: "https://bit.ly/3v2kv1K",
  },
  {
    id: Math.random(),
    img: "https://bit.ly/3fVJOhn",
  },
  {
    id: Math.random(),
    img: "https://bit.ly/3fS6fEm",
  },
  {
    id: Math.random(),
    img: "https://bit.ly/3uWmpRt",
  },
];

const HotTopicList = () => (
  <div className="hot-topic-list">
    {listItem.map(({ id, img }) => (
      <HotTopicItem key={id} img={img} />
    ))}
  </div>
);

export default HotTopicList;
