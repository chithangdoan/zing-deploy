// libs
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchPaginationAlbum } from "../../../../actions/album";
// component
import AlbumHotTop from "../AlbumHotTop";
import AlbumHotList from "../AlbumHotList";
// hooks
import useHover from "../../../../hooks/use-hover";

const AlbumHot = ({ handleChosenDiv }) => {
  const [page, setPage] = useState(1);

  const [previousDisable, setPreviousDisable] = useState(false);

  const [nextDisable, setNextDisable] = useState(false);

  const dispatch = useDispatch();

  const album = useSelector((state) => state.album.data);

  const pageLast = Math.ceil(20 / 12);

  const [hoverRef, isHovered] = useHover(null);

  const listKeys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown"];

  useEffect(() => {
    dispatch(fetchPaginationAlbum(page, 12));

    if (page < 1) {
      setPage(1);
    }
    if (page > pageLast) {
      setPage(pageLast);
    }

    if (page === 1) {
      setPreviousDisable(true);
    } else {
      setPreviousDisable(false);
    }

    if (page === pageLast) {
      setNextDisable(true);
    } else {
      setNextDisable(false);
    }

    // eslint-disable-next-line no-console
    console.log(`Album ${pageLast}`);
    // eslint-disable-next-line no-console
    console.log(`previousDisable ${previousDisable}`);
    // eslint-disable-next-line no-console
    console.log(`nextDisable ${nextDisable}`);
  }, [dispatch, page, pageLast, previousDisable, nextDisable]);

  const clickPreviousHandler = () => {
    // eslint-disable-next-line no-console
    console.log(`Previous ${page}`);
    if (page > 1 && page <= pageLast) setPage(page - 1);
  };

  const clickBackHandler = () => {
    // eslint-disable-next-line no-console
    console.log(`Back ${page}`);
    if (page >= 1 && page < pageLast) setPage(page + 1);
  };

  const downHandler = (e) => {
    if (isHovered && listKeys.indexOf(e.key) > -1) {
      e.preventDefault();

      switch (e.key) {
        case "ArrowUp":
        case "PageUp":
          setPage(page + 1);
          // eslint-disable-next-line no-console
          console.log(`page = ${page}`);
          break;

        case "ArrowDown":
        case "PageDown":
          setPage(page - 1);
          // eslint-disable-next-line no-console
          console.log(`page = ${page}`);
          break;

        default:
          break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });

  return (
    <div ref={hoverRef} className="album-hot">
      <AlbumHotTop
        clickPreviousHandler={clickPreviousHandler}
        clickBackHandler={clickBackHandler}
        previousDisable={previousDisable}
        nextDisable={nextDisable}
      />
      <AlbumHotList handleChosenDiv={handleChosenDiv} album={album} />
    </div>
  );
};

export default AlbumHot;
