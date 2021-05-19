import React, { useEffect, useState } from "react";
// import VideoHotItem from "../VideoHotItem";
import axios from "axios";
import "./style.scss";

// const listItem = [
//   {
//     id: Math.random(),
//     img:
//       "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg",
//     song: "Walk On Da Street",
//     singer: "16 Typh, 16 BRT",
//   },
//   {
//     id: Math.random(),
//     img:
//       "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg",
//     song: "Walk On Da Street",
//     singer: "16 Typh, 16 BRT",
//   },
//   {
//     id: Math.random(),
//     img:
//       "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg",
//     song: "Walk On Da Street",
//     singer: "16 Typh, 16 BRT",
//   },
//   {
//     id: Math.random(),
//     img:
//       "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg",
//     song: "Walk On Da Street",
//     singer: "16 Typh, 16 BRT",
//   },
//   {
//     id: Math.random(),
//     img:
//       "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg",
//     song: "Walk On Da Street",
//     singer: "16 Typh, 16 BRT",
//   },
//   {
//     id: Math.random(),
//     img:
//       "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg",
//     song: "Walk On Da Street",
//     singer: "16 Typh, 16 BRT",
//   },
//   {
//     id: Math.random(),
//     img:
//       "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg",
//     song: "Walk On Da Street",
//     singer: "16 Typh, 16 BRT",
//   },
//   {
//     id: Math.random(),
//     img:
//       "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg",
//     song: "Walk On Da Street",
//     singer: "16 Typh, 16 BRT",
//   },
//   {
//     id: Math.random(),
//     img:
//       "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg",
//     song: "Walk On Da Street",
//     singer: "16 Typh, 16 BRT",
//   },
//   {
//     id: Math.random(),
//     img:
//       "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg",
//     song: "Walk On Da Street",
//     singer: "16 Typh, 16 BRT",
//   },
//   {
//     id: Math.random(),
//     img:
//       "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg",
//     song: "Walk On Da Street",
//     singer: "16 Typh, 16 BRT",
//   },
//   {
//     id: Math.random(),
//     img:
//       "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg",
//     song: "Walk On Da Street",
//     singer: "16 Typh, 16 BRT",
//   },
// ];

// const renderItem = listItem.map((item) => <VideoHotItem item={item} />);

const VideoHotList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/chithangdoan/zing/album")
      .then((res) => {
        console.log(res.data);
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
