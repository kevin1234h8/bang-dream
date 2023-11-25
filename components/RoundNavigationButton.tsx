import React from "react";

type RoundNavigationButtonProps = {
  isRotate: boolean;
  isButtonDisabled: boolean;
};

const RoundNavigationButton = ({
  isRotate,
  isButtonDisabled,
}: RoundNavigationButtonProps) => {
  return (
    <button
      disabled={isButtonDisabled}
      className={`flex h-12 w-12 cursor-pointer items-center ${
        isRotate ? "rotate-180" : ""
      } justify-center rounded-full border border-lightRed ${
        isButtonDisabled
          ? "disabled:pointer-events-none disabled:border-lightRed/50 disabled:text-lightRed/50"
          : ""
      }  text-lightRed hover:bg-lightRed hover:text-white`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
};

export default RoundNavigationButton;
