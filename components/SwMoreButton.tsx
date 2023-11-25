import band from "@/data/band";
import { addHyphen } from "@/utils/stringUtils";
import Link from "next/link";

type SwMoreButtonProps = {
  text: string;
  url: string;
  bandName: string;
};
const SwMoreButton = ({ text, url, bandName }: SwMoreButtonProps) => {
  return (
    <Link
      href={url}
      className={`sw-btn-anchor ${addHyphen(
        bandName
      )} flex items-center justify-around mb-16`}
    >
      <div></div>
      <div>{text}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </Link>
  );
};

export default SwMoreButton;
