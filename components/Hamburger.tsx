import React from "react";

type HamburgerProps = {
  state: boolean;
};

const Hamburger = ({ state }: HamburgerProps) => {
  return (
    <div className={`justify-end m-4 ${state ? "flex" : "hidden"}`}>
      <div
        className={`header-hamburger cursor-pointer  ${state ? "open" : ""}`}
      >
        <button className="header-hamburger_button ">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Hamburger;
