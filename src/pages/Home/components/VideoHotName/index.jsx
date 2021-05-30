// Libs
import React from "react";
// hooks
import useLocale from "../../../../hooks/useLocale";
// css
import "./style.scss";

const VideoHotName = () => {
  const lang = useLocale();
  console.log(lang.locales);
  return <div className="video-hot-name">{lang.locales.Home.videoHotName}</div>;
};

export default VideoHotName;
