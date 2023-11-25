"use client";

import { BandMember, BangDreamBand } from "@/type";
import React from "react";
import { CldImage } from "next-cloudinary";
import { addHyphen } from "@/utils/stringUtils";
import Link from "next/link";
type BangDreamBandDetailsProps = {
  band: BandMember;
};

const BangDreamBandDetails = ({ band }: BangDreamBandDetailsProps) => {
  return (
    <div
      className={`band-member-container ${
        // band.band === "Pastel Palettes"
        //   ? "Pastel-palettes"
        //   : addHyphen(band.band)
        addHyphen(band.band)
      } overflow-hidden h-[400px]`}
    >
      <Link
        href={`/character/${addHyphen(band.band)}/${addHyphen(band.name)}`}
        className="overflow-hidden h-[400px] relative rounded-[20px]"
      >
        <CldImage
          width="1100"
          className=" band-member "
          height="1400"
          src={band.image[0].outfitSeasonThree[0]}
          sizes="100%"
          alt={band.name}
        />
        <div
          className={`band-member-role ${
            // band.band === "Pastel Palettes"
            //   ? "Pastel-palettes"
            //   : band.band === "Hello Happy World"
            //   ? "hello-happy-world"
            //   : band.band
            addHyphen(band.band)
          }`}
        >
          {band.role}
        </div>
        <div className="band-member-name z-[20]">
          <div className={`member-name ${addHyphen(band.band)} font-bold`}>
            {band.japaneseName}
          </div>
          <div className="text-[12px] font-semibold">CV.{band.cv}</div>
        </div>
      </Link>
    </div>
  );
};

export default BangDreamBandDetails;
