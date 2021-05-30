// libs
import React from "react";
// hooks
import useLocale from "../../../../hooks/useLocale";

const LangSwitcher = () => {
  const lang = useLocale();
  return (
    <div className="login-button">
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
