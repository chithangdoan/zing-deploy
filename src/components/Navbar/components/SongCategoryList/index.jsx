// libs
import React from "react";
// components
import SongCategoryItem from "../SongCategoryItem";
// scss
import "./style.scss";

const listItem = [
  {
    name: "#zing-chart",
    sub: [
      {
        title: "#ZINGCHART",
        name: ["Bài hát", "MV"],
      },
      {
        title: "TUẦN",
        name: ["Bài hát", "MV", "Album"],
      },
      {
        title: "US-UK CHART",
        name: ["Bài hát", "MV", "Album"],
      },
      {
        title: "KPOP CHART",
        name: ["Bài hát", "MV", "Album"],
      },
    ],
  },
  {
    name: "Top 100",
    sub: [
      {
        title: "#ZINGCHART",
        name: ["Bài hát", "MV"],
      },
      {
        title: "TUẦN",
        name: ["Bài hát", "MV", "Album"],
      },
      {
        title: "US-UK CHART",
        name: ["Bài hát", "MV", "Album"],
      },
      {
        title: "KPOP CHART",
        name: ["Bài hát", "MV", "Album"],
      },
    ],
  },
  {
    name: "Chủ đề",
    sub: [
      {
        title: "#ZINGCHART",
        name: ["Bài hát", "MV"],
      },
      {
        title: "TUẦN",
        name: ["Bài hát", "MV", "Album"],
      },
      {
        title: "US-UK CHART",
        name: ["Bài hát", "MV", "Album"],
      },
      {
        title: "KPOP CHART",
        name: ["Bài hát", "MV", "Album"],
      },
    ],
  },
  {
    name: "Video",
    sub: [
      {
        title: "#ZINGCHART",
        name: ["Bài hát", "MV"],
      },
      {
        title: "TUẦN",
        name: ["Bài hát", "MV", "Album"],
      },
      {
        title: "US-UK CHART",
        name: ["Bài hát", "MV", "Album"],
      },
      {
        title: "KPOP CHART",
        name: ["Bài hát", "MV", "Album"],
      },
    ],
  },
  {
    name: "Album",
    sub: [
      {
        title: "#ZINGCHART",
        name: ["Bài hát", "MV"],
      },
      {
        title: "TUẦN",
        name: ["Bài hát", "MV", "Album"],
      },
      {
        title: "US-UK CHART",
        name: ["Bài hát", "MV", "Album"],
      },
      {
        title: "KPOP CHART",
        name: ["Bài hát", "MV", "Album"],
      },
    ],
  },
  {
    name: "Nghệ sĩ",
    sub: [
      {
        title: "#ZINGCHART",
        name: ["Bài hát", "MV"],
      },
      {
        title: "TUẦN",
        name: ["Bài hát", "MV", "Album"],
      },
      {
        title: "US-UK CHART",
        name: ["Bài hát", "MV", "Album"],
      },
      {
        title: "KPOP CHART",
        name: ["Bài hát", "MV", "Album"],
      },
    ],
  },
  {
    name: "VIP",
    sub: [
      {
        title: "#ZINGCHART",
        name: ["Bài hát", "MV"],
      },
      {
        title: "TUẦN",
        name: ["Bài hát", "MV", "Album"],
      },
      {
        title: "US-UK CHART",
        name: ["Bài hát", "MV", "Album"],
      },
      {
        title: "KPOP CHART",
        name: ["Bài hát", "MV", "Album"],
      },
    ],
  },
];

const renderList = listItem.map((item) => <SongCategoryItem item={item} />);

const SongCategoryList = () => (
  <div className="song-category-list">{renderList}</div>
);

export default SongCategoryList;
