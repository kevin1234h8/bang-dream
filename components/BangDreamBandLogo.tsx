"use client";

import { BangDreamBandLogo } from "@/type";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React from "react";

type BangDreamBandLogoProps = {
  logo: BangDreamBandLogo;
  bandName: string;
};

const BangDreamBandLogo = ({ logo, bandName }: BangDreamBandLogoProps) => {
  return (
    <Link href={logo.redirect}>
      <CldImage
        width="1100"
        className={`band-logo ${logo.name === bandName ? "active" : ""}`}
        height="1100"
        src={logo.image}
        sizes="100%"
        alt={logo.name}
      />
    </Link>
  );
};

export default BangDreamBandLogo;
