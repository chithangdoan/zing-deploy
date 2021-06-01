// libs
import React from "react";
// components
import ContentInner from "./mains/ContentInner";
// scss
import "./style.scss";

const Home = ({ handleChosenDiv }) => (
  <div className="content">
    <ContentInner handleChosenDiv={handleChosenDiv} />
  </div>
);

export default Home;
