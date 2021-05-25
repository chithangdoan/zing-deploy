// libs
import React from "react";
// components
import AlbumHotLink from "../AlbumHotLink";
import AlbumHotPagination from "../AlbumHotPagination";
// scss
import "./style.scss";

const AlbumHotTop = ({
  clickPreviousHandler,
  clickBackHandler,
  previousDisable,
  nextDisable,
}) => (
  <div className="album-hot-top">
    <AlbumHotLink />
    <AlbumHotPagination
      clickPreviousHandler={clickPreviousHandler}
      previousDisable={previousDisable}
      clickBackHandler={clickBackHandler}
      nextDisable={nextDisable}
    />
  </div>
);

export default AlbumHotTop;
