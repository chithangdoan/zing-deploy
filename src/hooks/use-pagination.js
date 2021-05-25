// libs
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchPaginationAlbum } from "../actions/album";
import { fetchPaginationVideo } from "../actions/video";

const usePagination = (name, isHovered) => {
  const [page, setPage] = useState(1);

  const listKeys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown"];

  const pageLast = Math.ceil(20 / 12);

  const [previousDisable, setPreviousDisable] = useState(false);

  const [nextDisable, setNextDisable] = useState(false);

  const dispatch = useDispatch();

  const data = useSelector((state) => state[name].data);

  useEffect(() => {
    switch (name) {
      case "video":
        dispatch(fetchPaginationVideo(page, 12));

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
        break;
      case "album":
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
        break;
      default:
        break;
    }
  }, [dispatch, page, pageLast, previousDisable, nextDisable, name]);

  const clickPreviousHandler = () => {
    if (page > 1 && page <= pageLast) {
      setPage(page - 1);
      // eslint-disable-next-line no-console
      console.log(`Previous ${page}`);
    }
  };

  const clickBackHandler = () => {
    if (page >= 1 && page < pageLast) {
      setPage(page + 1);
      // eslint-disable-next-line no-console
      console.log(`Back ${page}`);
    }
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

  return [
    data,
    clickPreviousHandler,
    clickBackHandler,
    previousDisable,
    nextDisable,
  ];
};

export default usePagination;
