"use client";
import {
  getBangDreamBand,
  getBangDreamBandLogo,
  getBangDreamBandLogoByBandName,
} from "@/lib/BangDreamApiHandler";
// import React, { useState } from "react";
import BangDreamBandDetails from "@/components/BangDreamBandDetails";
import BangDreamBandLogoIcon from "@/components/BangDreamBandLogoIcon";
import BandPage from "@/components/page/BandPage";
import data from "@/data/band";
import { addHyphen, removeHyphens } from "@/utils/stringUtils";
import Link from "next/link";

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
      <div className="mx-auto flex w-auto max-w-5xl items-center justify-around">
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
      <div className="mx-auto my-[50px] w-[250px] max-w-5xl">
        <BangDreamBandLogoIcon logo={bangDreamBandLogoIcon.bangDreamBandLogo} />
      </div>

      {/* <Loading /> */}
      <div className="mx-auto mb-[100px] flex w-auto  max-w-5xl items-center gap-2">
        {/* <Suspense fallback={<Loading />}> */}
        {bandIndices.map((index) => {
          const band = bangDreamBand[index];
          return (
            <BangDreamBandDetails
              key={band.bandMembers.name}
              band={band.bandMembers}
            />
          );
        })}
        {/* </Suspense> */}
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
