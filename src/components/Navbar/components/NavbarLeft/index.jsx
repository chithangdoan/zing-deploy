// libs
import React from "react";
// components
import HomeButton from "../HomeButton";
import Separation from "../Separation";
import MyMusic from "../MyMusic";
import SongCategoryList from "../SongCategoryList";
// scss
import "./style.scss";

const NavbarLeft = () => (
  <div className="navbar-left">
    <HomeButton />
    <Separation />
    <MyMusic />
    <SongCategoryList />
  </div>
);

export default NavbarLeft;
