// libs
import React from "react";
import { Select } from "antd";
// scss
import "./style.scss";

const LangSwitcher = ({ preferredLocale, changeLanguage }) => {
  const { Option } = Select;

  return (
    <div className="lang-switcher">
      <Select
        className="alo"
        defaultValue={preferredLocale}
        style={{ width: 120, border: "purple" }}
        onChange={changeLanguage}
      >
        <Option value="en">English</Option>
        <Option value="vi">Việt Nam</Option>
      </Select>
    </div>
  );
};

export default LangSwitcher;
