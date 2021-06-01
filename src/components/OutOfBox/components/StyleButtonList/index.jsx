// libs
import React from "react";
// components
import StyleButtonItem from "../StyleButtonItem";
// hooks
import useLocale from "../../../../hooks/useLocale";
// scss
import "./style.scss";

const StyleButtonsList = () => {
  const styleButton = useLocale();

  return (
    <div className="style-buttons-list">
      <h3>Theme Layouts</h3>
      {styleButton.listStyleButtons.map(({ id, name }) => (
        <StyleButtonItem key={id} name={name} />
      ))}
    </div>
  );
};

export default StyleButtonsList;
