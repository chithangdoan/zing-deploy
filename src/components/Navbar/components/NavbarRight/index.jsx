// libs
import React from "react";
// components
import BannerOffBox from "../BannerOffBox";
import UploadButton from "../UploadButton";
// scss
import "./style.scss";

const NavbarRight = () => (
  <div className="navbar-right">
    <BannerOffBox />
    <UploadButton />
  </div>
);

export default NavbarRight;
