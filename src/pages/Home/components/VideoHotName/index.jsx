// Libs
import React, { useContext } from "react";
// context
import { LocaleContext } from "../../../../contexts/locale-context";
// css
import "./style.scss";

const VideoHotName = () => {
  const lang = useContext(LocaleContext);
  return <div className="video-hot-name">{lang.Home.videoHotName}</div>;
};

export default VideoHotName;
