// Libs
import React from "react";
// Components
import NavbarLeft from "../../components/NavbarLeft";
import NavbarRight from "../../components/NavbarRight";
// SCSS
import "./style.scss";

const NavbarInner = () => (
  <div className="navbar-inner">
    <NavbarLeft />
    <NavbarRight />
  </div>
);

export default NavbarInner;
