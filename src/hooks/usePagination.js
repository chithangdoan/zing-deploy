// libs
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchPaginationVideo } from "../actions/video";
import { fetchPaginationAlbum } from "../actions/album";
import { fetchPaginationLove } from "../actions/love";

const usePagination = (name, isHovered) => {
  const [page, setPage] = useState(1);

  const listKeys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown"];

  const pageLast = Math.ceil(5 / 2);

  const [previousDisable, setPreviousDisable] = useState(false);

  const [nextDisable, setNextDisable] = useState(false);

  const dispatch = useDispatch();

  const data = useSelector((state) => state[name].data);

  useEffect(() => {
    switch (name) {
      case "video":
        dispatch(fetchPaginationVideo(page, 2));

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
        dispatch(fetchPaginationAlbum(page, 2));

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

      case "love":
        dispatch(fetchPaginationLove(page, 2));

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
    }
  };

  const clickBackHandler = () => {
    if (page >= 1 && page < pageLast) {
      setPage(page + 1);
    }
  };

  const downHandler = (e) => {
    if (isHovered && listKeys.includes(e.key)) {
      e.preventDefault();

      switch (e.key) {
        case "ArrowUp":
        case "PageUp":
          setPage(page + 1);
          break;

        case "ArrowDown":
        case "PageDown":
          setPage(page - 1);
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
