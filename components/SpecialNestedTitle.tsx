import { bangDreamStarOutlineIconSrc } from "@/assets/bangDreamStarOutlineIcon";
import { editBandName } from "@/utils/bandNameUtils";
import Image from "next/image";
import { type } from "os";
import React from "react";

type SpecialNestedTitleProps = {
  nestedTitle: string;
};

const SpecialNestedTitle = ({ nestedTitle }: SpecialNestedTitleProps) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={bangDreamStarOutlineIconSrc}
        width={20}
        height={20}
        alt="bangDreamStarOulineIcon"
      />
      <div className="yakuhanjp">{editBandName(nestedTitle)}編</div>
    </div>
  );
};

export default SpecialNestedTitle;
