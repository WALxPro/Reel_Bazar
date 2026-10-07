import React, { useState } from "react";
import { Link } from "react-router-dom";

const ACTIVE_BG =
  "linear-gradient(0deg, rgba(0, 54, 255, 0.55) -49%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%)";

const INACTIVE_BG =
  "linear-gradient(0deg, rgba(0, 0, 0, 0) -129%, rgba(255, 237, 237, 0.13) 100%, rgba(255, 255, 255, 0.1) 232%)";

const baseStyle = {
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: "30px",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 2px 0px",
};

const pillClasses = `
  cursor-pointer
  whitespace-nowrap
  px-5
  py-2.5
  text-sm
  font-medium
  text-white
  transition
  hover:brightness-125
  sm:px-[30px]
`;

const rightGroup = ["Long Form", "Short Form", "Explainer"];

const Pill = ({ label, active, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(label)}
    className={pillClasses}
    style={{
      ...baseStyle,
      background: active === label ? ACTIVE_BG : INACTIVE_BG,
    }}
  >
    {label}
  </button>
);

const HomeFilter = ({ onChange, caseStudyPath = "/case-study" }) => {
  const [active, setActive] = useState("Long Form");

  const select = (label) => {
    setActive(label);
    if (onChange) onChange(label);
  };

  return (
    <>
      {/* Heading */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1
          className="w-fit rounded-full px-3 py-2 text-sm font-semibold text-white md:px-7 md:py-3"
          style={{
            backdropFilter: "blur(10px)",
            background: ACTIVE_BG,
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "30px",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 2px 0px",
          }}
        >
          Selected Work
        </h1>

        <h2 className="mt-5 text-[28px] font-bold leading-[1.05] tracking-[-0.06em] text-white md:text-[48px]">
            Edits That Earn The 

   
            <br className="hidden md:block" /> Impact{" "}
            <span
              className="font-bold italic"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Next
            </span>{" "}
            Second.
          </h2>
        

          <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-white/70 md:text-lg">
             A snapshot of recent reels, podcasts, brand films and long form YouTube edits.
          </p>
      </div>

      {/* Filter buttons */}
      <div className="mx-auto mt-4 flex w-full max-w-[900px] flex-wrap items-center justify-center gap-3 sm:gap-5">
       

        <div className="flex flex-wrap items-center justify-center gap-[10px]">
          {rightGroup.map((label) => (
            <Pill key={label} label={label} active={active} onSelect={select} />
          ))}

          <Link
            to={caseStudyPath}
            className={pillClasses}
            style={{ ...baseStyle, background: INACTIVE_BG }}
          >
            All Category
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeFilter;