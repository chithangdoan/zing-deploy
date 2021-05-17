import React from "react";
import PartnerList from "../PartnerList";
import PartnerTitle from "../PartnerTitle";
import "./style.scss";

const Partner = () => (
  <div className="partner">
    <PartnerTitle />
    <PartnerList />
  </div>
);

export default Partner;
