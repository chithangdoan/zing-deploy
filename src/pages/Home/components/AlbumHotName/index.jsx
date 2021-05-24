// libs
import React, { useContext } from "react";
// context
import { LocaleContext } from "../../../../contexts/locale-context";
// scss
import "./style.scss";

const AlbumHotName = () => {
  const lang = useContext(LocaleContext);
  return <div className="album-hot-name">{lang.Home.albumHotName}</div>;
};
export default AlbumHotName;
