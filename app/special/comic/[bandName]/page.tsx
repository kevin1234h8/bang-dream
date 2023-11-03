import bangDreamStarOutlineIconSrc from "@/assets/bangDreamStarOutlineIcon";
import PageTitle from "@/components/PageTitle";
import SpecialSubTitle from "@/components/SpecialSubTitle";
import SubTitle from "@/components/SubTitle";
import { getSpecialComic } from "@/lib/Special";
import { editBandName } from "@/utils/bandNameUtils";
import { removeHyphens } from "@/utils/functionsUtils";
import Image from "next/image";
import React from "react";

type Params = {
  params: {
    bandName: string;
  };
};

const page = async ({ params: { bandName } }: Params) => {
  console.log(bandName);
  const comicData = await getSpecialComic(removeHyphens(bandName));
  const [comic] = await Promise.all([comicData]);

  return (
    <div className="max-w-5xl mx-auto w-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="flex my-8 flex-col gap-4 items-center">
          <SubTitle title="バンドリ! ガールズバンドパーティ! The first page" />
          {/* <SpecialSubTitle specialSubTitle={`${editBandName(comic.band)}編`} /> */}
          <div className="flex items-center gap-4">
            <Image
              src={bangDreamStarOutlineIconSrc}
              width={20}
              height={20}
              alt="bangDreamStarOulineIcon"
            />
            <div className="text-[#ff3b72] md:text-lg">
              {editBandName(comic.band)}編
            </div>

            <Image
              src={bangDreamStarOutlineIconSrc}
              width={20}
              height={20}
              alt="bangDreamStarOulineIcon"
            />
          </div>
        </div>
        <div className="max-w-lg">
          {comic.content.map((image, index) => {
            return (
              <Image
                key={index}
                src={image}
                width="727"
                height="1024"
                alt=""
                loading="lazy"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
