
// libs
import React, { useEffect, useState } from "react";
import axios from "axios";
// scss
import "./style.scss";


const VideoHotList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/chithangdoan/zing/album")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className="video-hot-list">
      {data.map((item) => (
        <div key={item.id}>{item.song}</div>
      ))}
    </div>
  );
};

export default VideoHotList;
