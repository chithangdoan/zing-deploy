// Libs
import React from "react";
// Components
import SearchBoxInput from "../SearchBoxInput";
import SearchBoxButton from "../SearchBoxButton";
// SCSS
import "./style.scss";

const SearchBox = () => (
  <div className="search-box">
    <SearchBoxInput />
    <SearchBoxButton />
  </div>
);

export default SearchBox;
