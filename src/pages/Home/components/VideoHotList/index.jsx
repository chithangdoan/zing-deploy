// libs
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchPaginationVideo } from "../../../../actions/video";
// components
import VideoHotItem from "../VideoHotItem";
// hooks
import useHover from "../../../../hooks/useHover";
// css
import "./style.scss";

const VideoHotList = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const video = useSelector((state) => state.video.data);

  const pageCount = Math.ceil(20 / 12);

  useEffect(() => {
    dispatch(fetchPaginationVideo(page, 12));

    if (page <= 1) {
      setPage(1);
    }
    if (page >= pageCount) {
      setPage(pageCount);
    }
  }, [dispatch, page, pageCount]);

  const [hoverRef, isHovered] = useHover();

  const listKeys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown"];

  const downHandler = (e) => {
    if (isHovered && listKeys.indexOf(e.key) > -1) {
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
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });

  return (
    <div ref={hoverRef} className="video-hot-list">
      {video &&
        video.data.map((item) => <VideoHotItem key={item.id} item={item} />)}
    </div>
  );
};

export default VideoHotList;
