"use client";

import YoutubeIcon from "@/assets/youtube.svg";
import YouTubeIframeLoader from "youtube-iframe";

import PageTitle from "@/components/PageTitle";
import { BangDreamBands } from "@/type";
import { addHyphen } from "@/utils/stringUtils";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import Loading from "@/app/character/loading";
import { Suspense } from "react";
import SkeletonLoading from "@/app/character/SkeletonLoading";
import {
  closeIframe,
  getYoutubeVideoId,
  onPlayerReady,
} from "@/utils/youtubeUtils";
import Hamburger from "../Hamburger";
import useOutsideClick from "@/hooks/useOutsideClick";

type CharacterPageProps = {
  bangDreamBands: BangDreamBands[];
};

const CharacterPage = ({ bangDreamBands }: CharacterPageProps) => {
  const bandIndex = [1, 0, 6, 7, 3, 2, 4, 5];
  const [videoId, setVideoId] = useState<string>("");
  const [isPoppinPartyIFrameOpen, setIsPoppinPartyIFrameOpen] =
    useState<boolean>(false);

  const iFrameWrapperRef = useRef<HTMLDivElement | null>(null);

  var bangDreamBandIframeVideo: any;

  const [isIFrameOpen, setIsIFrameOpen] = useState<boolean>(false);
  useOutsideClick(iFrameWrapperRef, () => {
    closeIframe(setIsIFrameOpen, bangDreamBandIframeVideo);
  });
  const handlePoppinPartyIFrame = (videoId: string) => {
    setIsIFrameOpen(!isIFrameOpen);
    setVideoId(videoId);
  };
  useEffect(() => {
    console.log(videoId);
    if (isIFrameOpen) {
      YouTubeIframeLoader.load(function (YT) {
        bangDreamBandIframeVideo = new YT.Player(`youtube-${videoId}`, {
          height: "100%",
          width: "100%",
          videoId: getYoutubeVideoId(videoId),
          playerVars: {
            autoplay: 1,
          },
          events: {
            onReady: onPlayerReady,
          },
        });
      });
    }
  }, [isIFrameOpen, videoId]);
  // useEffect(() => {
  //   const handleWrapperClick = (e: MouseEvent) => {
  //     if (
  //       iFrameWrapperRef.current &&
  //       !iFrameWrapperRef.current.contains(e.target as Node)
  //     ) {
  //       // The click occurred outside the iframe wrapper
  //       // Close the modal or perform your desired action here
  //       // For example, you can call a close function
  //       closeIFrame();
  //     }
  //   };

  //   document.addEventListener("click", handleWrapperClick);

  //   return () => {
  //     document.removeEventListener("click", handleWrapperClick);
  //   };
  // }, [closeIFrame]);

  return (
    <div>
      <div className="character-container mx-auto w-auto max-w-7xl">
        <div></div>
        <div className="m-auto px-12 ">
          <Suspense fallback={<Loading />}>
            <div className="grid grid-cols-1 grid-rows-2 gap-x-8 gap-y-20 px-[50px] md:grid-cols-2">
              {bandIndex.map((index) => {
                const band = bangDreamBands[index];
                return (
                  <div key={index} className="band-info relative">
                    <Link
                      href={`/character/${addHyphen(band.band)}`}
                      className="relative"
                    >
                      <div className="overflow-hidden">
                        <CldImage
                          src={band.bandAllMemberImage}
                          alt=""
                          className="poppin-party-member relative h-[330px] w-[590px] object-cover"
                          width="1100"
                          height="1100"
                        />
                      </div>
                    </Link>

                    <div className="item-info flex items-center gap-6">
                      <CldImage
                        src={band.image}
                        alt={band.band}
                        className="h-[30%] w-[30%]"
                        width="1100"
                        height="1100"
                      />
                      <div className="flex flex-col">
                        <span>{band.band}</span>
                        <div className="mt-[6px] text-sm text-[#333333]">
                          通称 : {band.bandJapaneseName}
                        </div>
                      </div>
                    </div>
                    <div className="item-info_more absolute  right-0 w-[110px] ">
                      <span className="z-20 text-[#b92b5d]">MORE</span>
                    </div>
                    <div
                      className="absolute bottom-0 right-0 z-10 mb-52 w-[168px] cursor-pointer bg-white  pl-[15px]"
                      onClick={() =>
                        handlePoppinPartyIFrame(
                          getYoutubeVideoId(band.movieUrl) as string,
                        )
                      }
                    >
                      <div className="flex items-center gap-4  py-2">
                        <Image src={YoutubeIcon} alt="YoutubeIcon" />
                        <div className="item-movie flex">
                          <span className="">MOVIE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Suspense>
        </div>
        <div className="header-nav_common">
          <div className="header-nav_wrapper"></div>
        </div>
      </div>
      {{ isIFrameOpen } ? <Hamburger state={isIFrameOpen} /> : null}

      {isIFrameOpen ? (
        <div
          className={`inset-0 z-50 ${
            isIFrameOpen ? "flex" : "hidden"
          } fixed  items-center justify-center bg-black/40 `}
          ref={iFrameWrapperRef}
        >
          <div className="h-[40%] w-[100%] lg:h-[75%] lg:w-[75%]">
            <div id={`youtube-${videoId}`}></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CharacterPage;
