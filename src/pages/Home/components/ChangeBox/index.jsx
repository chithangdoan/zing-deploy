// libs
import React from "react";
// contexts
import PaginationContext from "../../../../contexts/paginationContext";
// components
import ChangeBoxTop from "../ChangeBoxTop";
import ChangeBoxList from "../ChangeBoxList";
// hooks
import useHover from "../../../../hooks/useHover";
import usePagination from "../../../../hooks/usePagination";
// scss
import "./style.scss";

const ChangeBox = () => {
  const love = "love";

  const [hoverRef, isHovered] = useHover(null);

  const [
    dataLove,
    clickPreviousHandlerLove,
    clickBackHandlerLove,
    previousDisableLove,
    nextDisableLove,
  ] = usePagination(love, isHovered);

  return (
    <PaginationContext.Provider
      value={{
        dataLove,
        clickPreviousHandlerLove,
        clickBackHandlerLove,
        previousDisableLove,
        nextDisableLove,
      }}
    >
      <div ref={hoverRef} className="change-box">
        <ChangeBoxTop />
        <ChangeBoxList />
      </div>
    </PaginationContext.Provider>
  );
};

export default ChangeBox;
