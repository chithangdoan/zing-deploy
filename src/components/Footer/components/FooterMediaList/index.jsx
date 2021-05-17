// libs
import React from "react";
import {
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  IeOutlined,
} from "@ant-design/icons";
// scss
import "./style.scss";

const FooterMediaList = () => (
  <div className="footer-media-list">
    <div>
      <AndroidOutlined />
    </div>
    <div>
      <AppleOutlined />
    </div>
    <div>
      <WindowsOutlined />
    </div>
    <div>
      <IeOutlined />
    </div>
  </div>
);

export default FooterMediaList;
