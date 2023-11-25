import React from "react";
import bangDreamStarOulineIcon from "@/assets/bang-dream-app-icon.jpg";
import Image from "next/image";
import { bangDreamStarOutlineIconSrc } from "@/assets/bangDreamStarOutlineIcon";

const SpecialDescription = ({ description }: { description: string }) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={bangDreamStarOutlineIconSrc}
        width={20}
        height={20}
        alt="bangDreamStarOulineIcon"
      />
      <div className="sw-special-archive-name yakuhanjp duration-400 font-medium  transition-transform ease-in-out group-hover:text-[#b92b5d]">
        {description}
      </div>
    </div>
  );
};

export default SpecialDescription;
