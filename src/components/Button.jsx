import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, className = "", to }) => {
  return (
    <Link
      to={to}
      className={`
        rounded-full
        border
        border-white/30
        bg-white/20
        md:px-5
        px-3
        md:py-3
        py-2
        text-xs
        text-white
        backdrop-blur-md
        transition
        hover:scale-[1.02]
        hover:bg-white/30
        uppercase
        font-bold
        ${className}
      `}
    >
      {text}
    </Link>
  );
};

export default Button;
