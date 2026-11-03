import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, className = "", to }) => {
  return (
    <Link
      to={to}
      className={`rb-button ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;
