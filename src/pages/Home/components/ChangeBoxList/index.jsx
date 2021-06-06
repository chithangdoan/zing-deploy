// libs
import React, { useContext } from "react";
// contexts
import PaginationContext from "../../../../contexts/paginationContext";
// components
import ChangeBoxItem from "../ChangeBoxItem";
// css
import "./style.scss";

const ChangeBoxList = () => {
  const { dataLove } = useContext(PaginationContext);

  return (
    <div className="change-box-list">
      {dataLove &&
        dataLove.data.map(({ id, img, song }) => (
          <ChangeBoxItem key={id} img={img} song={song} />
        ))}
    </div>
  );
};

export default ChangeBoxList;
