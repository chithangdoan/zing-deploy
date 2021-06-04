// Libs
import React from "react";
import classNames from "classnames";
// hooks
import useLocale from "../../../../hooks/useLocale";
// SCSS
import "./style.scss";

const LoginButton = () => {
  const styleButton = useLocale();

  const css = classNames(
    {
      "login-button__style-1": styleButton.activeStyleButton === "style-1",
    },
    {
      "login-button__style-2": styleButton.activeStyleButton === "style-2",
    }
  );
  return (
    <div className={css}>
      <button type="button">Đăng nhập</button>
    </div>
  );
};

export default LoginButton;
