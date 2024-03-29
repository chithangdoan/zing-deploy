// libs
import React from "react";
import { CloudUploadOutlined } from "@ant-design/icons";
// scss
import "./style.scss";

const UploadButton = () => (
  <div className="upload-button">
    <CloudUploadOutlined style={{ fontSize: "22px", color: "purple" }} />
  </div>
);

export default UploadButton;
