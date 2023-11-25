import Image from "next/image";
import React from "react";

type IdxSubTitleProps = {
  subTitle: string;
  japaneseSubTitle: string;
};

const IdxSubTitle = ({ subTitle, japaneseSubTitle }: IdxSubTitleProps) => {
  return (
    <div className="relative my-8">
      <Image
        width={1500}
        height={1500}
        src="https://heaven-burns-red.com/assets/images/pc/index/bg_subtitle.png"
        alt=""
      />
      <div className="absolute inset-0  flex flex-col items-center justify-center text-[#b92b5d]">
        <div className="text-3xl ">{subTitle}</div>
        <div className="yakuhanjp text-sm">{japaneseSubTitle}</div>
      </div>
    </div>
  );
};

export default IdxSubTitle;
