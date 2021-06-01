// libs
import React from "react";
// component
import AlbumHotTop from "../AlbumHotTop";
import AlbumHotList from "../AlbumHotList";
// hooks
import useHover from "../../../../hooks/useHover";
import usePagination from "../../../../hooks/usePagination";

const AlbumHot = ({ handleChosenDiv }) => {
  const video = "album";
  const [hoverRef, isHovered] = useHover(null);
  const [
    data,
    clickPreviousHandler,
    clickBackHandler,
    previousDisable,
    nextDisable,
  ] = usePagination(video, isHovered);

  return (
    <div ref={hoverRef} className="album-hot">
      <AlbumHotTop
        clickPreviousHandler={clickPreviousHandler}
        clickBackHandler={clickBackHandler}
        previousDisable={previousDisable}
        nextDisable={nextDisable}
      />
      <AlbumHotList handleChosenDiv={handleChosenDiv} data={data} />
    </div>
  );
};

export default AlbumHot;
