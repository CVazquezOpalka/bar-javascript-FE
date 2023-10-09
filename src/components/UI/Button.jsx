import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const {
    type = "button",
    label,
    disable = false,
    onClick,
    full = false,
    to = false,
    extraClass,
    outlined = false,
  } = props;
  const classBTN = `${
    outlined ? "hover:text-white" : "bg-primary text-white"
  } border border-primary px-5 py-2  ${full ? "w-full" : ""} ${
    disable ? "opacity-25" : "opacity-100"
  } hover:bg-secondary ${extraClass}`;

  if (to) {
    return (
      <Link className={classBTN} to={to}>
        {label}
      </Link>
    );
  }
  return (
    <button className={classBTN} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
