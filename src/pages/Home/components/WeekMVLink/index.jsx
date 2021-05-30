import React from "react";
import WeekMVLinkIcon from "../WeekMVLinkIcon";
import WeekMVLinkName from "../WeekMVLinkName";
import WeekMVLinkPlay from "../WeekMVLinkPlay";

import "./style.scss";

const WeekMVLink = () => (
  <div className="week-mv-link">
    <div className="week-mv-left">
      <WeekMVLinkName />
      <WeekMVLinkIcon />
    </div>

    <div className="week-mv-right">
      <WeekMVLinkPlay />
    </div>
  </div>
);

export default WeekMVLink;
