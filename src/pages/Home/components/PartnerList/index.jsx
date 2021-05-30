// libs
import React from "react";
// components
import PartnerItem from "../PartnerItem";
// mocks
import { partner } from "../../../../mocks/Home/partner";
// scss
import "./style.scss";

const renderList = partner.map((item) => (
  <PartnerItem key={Math.random()} item={item} />
));

const PartnerList = () => <div className="partner-list">{renderList}</div>;

export default PartnerList;
