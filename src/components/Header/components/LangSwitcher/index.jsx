// libs
import React from "react";
// hooks
import useLocale from "../../../../hooks/useLocale";
// scss
import "./style.scss";

const LangSwitcher = () => {
  const lang = useLocale();
  return (
    <div className="lang-switcher">
      <select
        className="custom-select"
        value={lang.langCode}
        onChange={(e) => lang.changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="vi">Việt Nam</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
