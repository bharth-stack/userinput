import React from "react";
import classc from "./InputButton.module.css";
const Button = (props) => {
  return (
    <button
      className={classc.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
