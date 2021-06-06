// libs
import React from "react";

const arr = [
  {
    id: 0.37250319148019595,
    img: "https://bit.ly/3vM5nXg",
    number: 1,
    song: "Song 1 Loves Song Hot",
    singer: "Singer 1",
  },
];

const PaginationContext = React.createContext(arr);

export default PaginationContext;
