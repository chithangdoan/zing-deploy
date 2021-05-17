// Libs
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
// SCSS
import "./style.scss";

const SearchBoxButton = () => (
  <div className="search-box-button">
    <button type="button">
      <SearchOutlined />
    </button>
  </div>
);

export default SearchBoxButton;
