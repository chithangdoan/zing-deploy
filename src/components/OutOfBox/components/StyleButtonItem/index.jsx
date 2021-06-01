// libs
import React from "react";
import { Button } from "antd";
// hooks
import useLocale from "../../../../hooks/useLocale";
// scss
import "./style.scss";

const StyleButtonItem = ({ name }) => {
  const active = useLocale();

  return (
    <>
      {active.activeStyleButton === name ? (
        <Button
          style={{ "margin-right": "10px" }}
          type="primary"
          onClick={() => active.handleClickStyleButton(name)}
        >
          {name}
        </Button>
      ) : (
        <Button
          style={{ "margin-right": "10px" }}
          onClick={() => active.handleClickStyleButton(name)}
        >
          {name}
        </Button>
      )}
    </>
  );
};

export default StyleButtonItem;
