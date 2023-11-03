import {
  getBangDreamBand,
  getBangDreamBandLogo,
  getBangDreamBandLogoByBandName,
} from "@/lib/BandDreamApi";
// import React, { useState } from "react";
import data from "@/data/band";
import BangDreamBand from "@/model/BangDreamBand";
import BangDreamBandDetails from "@/components/BangDreamBandDetails";
import {
  addHyphen,
  formatBandName,
  removeHyphens,
} from "@/utils/functionsUtils";
import Link from "next/link";
import SwPlay from "@/assets/thumbnail_play.svg";
import Image from "next/image";
import { Suspense } from "react";
import SwMoreButton from "@/components/SwMoreButton";
import Loading from "./Loading";
import BangDreamBandLogo from "@/model/BangDreamBandLogo";
import BangDreamBandLogos from "@/components/BangDreamBandLogo";
import BangDreamBandLogoIcon from "@/components/BangDreamBandLogoIcon";
import BangDreamBandYoutubeIFrameVideo from "@/components/BangDreamBandYoutubeIFrameVideo";
import BandPage from "@/components/page/BandPage";

type Params = {
  params: {
    bandName: string;
  };
};

const page = async ({ params: { bandName } }: Params) => {
  bandName = removeHyphens(bandName);
  const bangDreamBandData = await getBangDreamBand(bandName);
  const bangDreamBandLogoDatas = await getBangDreamBandLogo();
  const bangDreamBandLogoIconByBandNameData =
    getBangDreamBandLogoByBandName(bandName);
  const [bangDreamBand, bangDreamBandLogos, bangDreamBandLogoIcon] =
    await Promise.all([
      bangDreamBandData,
      bangDreamBandLogoDatas,
      bangDreamBandLogoIconByBandNameData,
    ]);
  const bandIndices: number[] = [2, 4, 0, 3, 1];
  return (
    <div>
      <div className="flex items-center justify-center character-background my-20 relative">
        <div className="character-background-deco"></div>
        <div className="character-background-text">CHARACTER</div>
        <div className="character-background-text_japan">キャラクター</div>
      </div>
      <div className="max-w-5xl mx-auto w-auto flex items-center justify-around">
        {data.bandList.map((band, index) => {
          return (
            <Link
              key={index}
              className={`band-navigate-btn_name text-[10px] ${
                bandName === band.code ? "active" : ""
              }`}
              href={addHyphen(band.code)}
            >
              {band.bandName}
            </Link>
          );
        })}
      </div>
      <div className="mx-auto max-w-5xl w-[250px] my-[50px]">
        <BangDreamBandLogoIcon logo={bangDreamBandLogoIcon.bangDreamBandLogo} />
      </div>
      <div className="max-w-5xl w-auto mx-auto gap-2  mb-[100px] flex items-center">
        {bandIndices.map((index) => {
          const band = bangDreamBand[index];
          return (
            <Suspense fallback={<Loading />} key={band.bandMembers.name}>
              <BangDreamBandDetails band={band.bandMembers} />
            </Suspense>
          );
        })}
      </div>
      <BandPage
        bangDreamBandLogoIcon={bangDreamBandLogoIcon}
        bangDreamBandLogos={bangDreamBandLogos}
        bandName={bandName}
      />
    </div>
  );
};

export default page;
