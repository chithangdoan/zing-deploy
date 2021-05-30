// libs
import React from "react";
import {
  DownloadOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
// scss
import "./style.scss";

const VietSongToolItem = () => (
  <div className="viet-song-tool-item">
    <div>
      <DownloadOutlined style={{ fontSize: "16px", color: "#888" }} />
    </div>

    <div>
      <PlusOutlined style={{ fontSize: "16px", color: "#888" }} />
    </div>

    <div>
      <ShareAltOutlined style={{ fontSize: "16px", color: "#888" }} />
    </div>
  </div>
);

export default VietSongToolItem;
