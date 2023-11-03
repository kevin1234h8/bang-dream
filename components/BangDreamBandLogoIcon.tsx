"use client";

import { BangDreamBandLogo } from "@/type";
import { CldImage } from "next-cloudinary";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
type BangDreamBandLogoIconProps = {
  logo: BangDreamBandLogo;
};
const BangDreamBandLogoIcon = ({ logo }: BangDreamBandLogoIconProps) => {
  const [
    isBangDreamBandYoutubeIFrameVideoOpen,
    setIsBangDreamBandYoutubeIFrameVideoOpen,
  ] = useState<boolean>(false);
  const bangDreamLogoRef = useRef(null);

  // useEffect(() => {
  //   const bangDreamLogo = bangDreamLogoRef.current;
  //   const tl = gsap.timeline();
  //   gsap.fromTo(
  //     bangDreamLogo,
  //     {
  //       opacity: 0,
  //       ease: "power2.out",
  //     },
  //     { opacity: 1, duration: 1.5 }
  //   );
  // }, []);

  return (
    <div>
      <CldImage
        ref={bangDreamLogoRef}
        width="1100"
        className={`bang-dream-logo`}
        height="1100"
        src={logo.image}
        sizes="100%"
        alt={logo.name}
      />
      <div className="iframe-wrapper">
        <div
          className={`fixed bg-[rgba(0,0,0,0.3)] ${
            isBangDreamBandYoutubeIFrameVideoOpen ? "flex" : "hidden"
          } inset-0 z-20 items-center justify-center m-0 h-full `}
        >
          <iframe src={logo.youtube} className="w-[80%] h-[80%] "></iframe>
        </div>
      </div>
    </div>
  );
};

export default BangDreamBandLogoIcon;
