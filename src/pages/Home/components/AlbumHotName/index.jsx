// libs
import React from "react";
// hooks
import useLocale from "../../../../hooks/useLocale";
// scss
import "./style.scss";

const AlbumHotName = () => {
  const lang = useLocale();
  return <div className="album-hot-name">{lang.Home.albumHotName}</div>;
};
export default AlbumHotName;
