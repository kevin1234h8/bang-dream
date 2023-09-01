"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import BangDreamAppIcon from "@/assets/bang-dream-app-icon.jpg";
import { useEffect, useRef, useState } from "react";
import PoppinPartyMember from "@/assets/poppin-party/poppin-party-all-member.jpg";
import { getBandDreamMember } from "@/lib/BandDreamApi";
import PoppinPartyLogo from "@/assets/poppin-party/poppin-party-logo.png";
import YoutubeIcon from "@/assets/youtube.svg";
import mp3File from "@/assets/Returns.mp3";
import ArrowDown from "@/assets/arrow-down.svg";
import Bands from "@/data/band";
import CharacterBackground from "@/assets/character-background.png";
import Link from "next/link";

export default function Home() {
  const [isPoppinPartyIFrameOpen, setIsPoppinPartyIFrameOpen] =
    useState<boolean>(false);
  const handlePoppinPartyIFrame = () => {
    setIsPoppinPartyIFrameOpen(!isPoppinPartyIFrameOpen);
  };

  console.log("isPoppinPartyIFrameOpen , ", isPoppinPartyIFrameOpen);
  // const bandDreamMembers = await getBandDreamMember();
  // console.log(bandDreamMembers);
  return (
    <div className="character-container">
      <div></div>

      <div className="m-auto px-12 ">
        <div className="flex items-center justify-center character-background my-20 relative">
          <div className="character-background-deco"></div>
          <div className="character-background-text">CHARACTER</div>
          <div className="character-background-text_japan">キャラクター</div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-20 px-[50px]">
          {Bands.map((band, index) => {
            return (
              <Link href={band.URL} key={index} className="band-info relative">
                <div className="relative">
                  <div className="overflow-hidden">
                    <Image
                      src={band.band_member_image}
                      alt=""
                      className="relative poppin-party-member w-[590px] h-[330px] object-cover"
                    />
                  </div>
                  <div
                    className="absolute z-10 bottom-0 cursor-pointer w-[168px] pl-[15px] right-0 mb-8  bg-white"
                    onClick={handlePoppinPartyIFrame}
                  >
                    <div className="flex items-center gap-4  py-2">
                      <Image src={YoutubeIcon} alt="YoutubeIcon" />
                      <div className="item-movie flex">
                        <span className="">MOVIE</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`fixed bg-[rgba(0,0,0,0.3)] ${
                    isPoppinPartyIFrameOpen ? "flex" : "hidden"
                  } inset-0 z-20 items-center justify-center m-0 h-full `}
                >
                  <iframe
                    src={band.movie_url}
                    className="w-[80%] h-[80%] "
                  ></iframe>
                </div>
                <div className="item-info flex gap-6 items-center">
                  <Image
                    src={band.band_logo}
                    alt=""
                    className="w-[30%] h-[30%]"
                  />
                  <div className="flex flex-col">
                    <span>{band.band_name}</span>
                    <div className="text-[#333333] text-sm mt-[6px]">
                      通称 : {band.band_japanese_name}
                    </div>
                  </div>
                </div>
                <div className="item-info_more absolute  right-0 w-[110px] ">
                  <span className="z-20 text-[#b92b5d]">MORE</span>
                </div>
              </Link>
            );
          })}

          {/* <div className="cursor-vertical-text">hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div> */}
        </div>

        {/* <Swiper
        spaceBetween={100}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper> */}
      </div>
      <div className="header-nav_common">
        <div className="header-nav_wrapper"></div>
      </div>
      <div className="pt-[240px] footer">
        <div className="footer_inner pt-[136px]">Footer</div>
      </div>
    </div>
  );
}
