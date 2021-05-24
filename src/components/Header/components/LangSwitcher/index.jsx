import React from "react";

const LangSwitcher = ({ preferredLocale, changeLanguage }) => (
  <div className="login-button">
    <select
      className="custom-select"
      value={preferredLocale}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <option value="en">English</option>
      <option value="vi">Việt Nam</option>
    </select>
  </div>
);

export default LangSwitcher;
