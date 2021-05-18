// libs
import React from "react";
// components
import HomeButton from "../HomeButton";
import MyMusic from "../MyMusic";
import Separation from "../Separation";
import SongCategoryList from "../SongCategoryList";
// scss
import "./style.scss";

const NavbarLeft = () => (
  <div className="navbar-left">
    <HomeButton />
    <MyMusic />
    <Separation />
    <SongCategoryList />
  </div>
);

export default NavbarLeft;
