// libs
import React from "react";
import classNames from "classnames";
// scss
import "./style.scss";

const RankNumber = ({ number }) => {
  const colorTop = (number) => {
    const top = {
      1: "top-1",
      2: "top-2",
      3: "top-3",
    };

    return top[number] || "";
  };

  const cssColor = classNames(["rank-number", colorTop(number)]);

  return <div className={cssColor}>{number}</div>;
};

export default RankNumber;
