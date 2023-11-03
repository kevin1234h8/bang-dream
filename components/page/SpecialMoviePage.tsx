"use client";

import React, { useEffect, useState, useRef } from "react";
import YouTubeIframeLoader from "youtube-iframe";
import PageTitle from "../PageTitle";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ReactScroll from "react-scroll";
import Index from "../Index";
import SubTitle from "../SubTitle";
import Image from "next/image";
import SpecialDescription from "../SpecialDescription";
import SwPlay from "@/assets/thumbnail_play.svg";
import ThumbnailPlayIcon from "@/assets/thumbnail_play.svg";
import { getYoutubeVideoId } from "@/utils/functionsUtils";
import { onPlayerReady } from "@/utils/youtubeUtils";
import useOutsideClick from "@/hooks/useOutsideClick";
import { SocialMedia, SpecialMovie } from "@/type";
import Hamburger from "../Hamburger";
import SpecialSubTitle from "../SpecialSubTitle";
import SpecialPagination from "../SpecialPagination";

type SpecialMoviePageProps = {
  specialPVMovies: SpecialMovie[];
  specialMVMovies: SpecialMovie[];
  specialPastelLifeMovies: SpecialMovie[];
  socialMedias: SocialMedia[];
};

const SpecialMoviePage = ({
  specialPVMovies,
  specialMVMovies,
  specialPastelLifeMovies,
  socialMedias,
}: SpecialMoviePageProps) => {
  const [nextSpecialRedirectUrl, setNextSpecialRedirectUrl] =
    useState<string>("");
  const [previousSpecialRedirectUrl, setPreviousSpecialRedirectUrl] =
    useState<string>("");
  const [isNextSpecialRedirectUrlExists, setIsNextSpecialRedirectUrlExists] =
    useState<boolean>(true);
  const [isPreviousSpecialRedirectUrl, setIsPreviousSpecialRedirectUrl] =
    useState<boolean>(true);
  const pathname = usePathname();

  const [isPVMovieOpen, setIsPVMovieOpen] = useState<boolean>(false);
  const [pvMovieIndex, setPvMovieIndex] = useState<number>();
  const [isMvMovieOpen, setIsMvMovieOpen] = useState<boolean>(false);
  const [mvMovieIndex, setMvMovieIndex] = useState<number>();

  const specialRedirectUrl = [
    "/special/sns",
    "/special/movie",
    "/special/manga",
    "/special/comic",
    "/special/streamer",
  ];

  const movieType = ["PV", "MV", "ぱすてるらいふ"];

  var pvMovieYoutubeIFrame: any = null;
  const videoIdRef = useRef<string>("");
  const handleOpenPVMovie = (videoId: string, index: number) => {
    setPvMovieIndex(index);
    videoIdRef.current = videoId;
    setIsPVMovieOpen(true);
  };

  const handleOpenMvMovie = (videoId: string, index: number) => {
    setMvMovieIndex(index);
    videoIdRef.current = videoId;
    setIsMvMovieOpen(true);
  };

  useEffect(() => {
    const videoId = videoIdRef.current;
    if (isPVMovieOpen) {
      YouTubeIframeLoader.load(function (YT) {
        pvMovieYoutubeIFrame = new YT.Player(`youtube-${videoId}`, {
          height: "100%",
          width: "100%",
          videoId: videoId,
          playerVars: {
            autoplay: 1,
          },
          events: {
            onReady: onPlayerReady,
          },
        });
      });
    }
  }, [isPVMovieOpen, videoIdRef.current]);

  const pvMovieIFrameWrapperRef = useRef<HTMLDivElement | null>(null);

  // useOutsideClick(pvMovieIFrameWrapperRef, () => {
  //   closePVMovieIFrame();
  // });

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      if (
        pvMovieIFrameWrapperRef.current &&
        !pvMovieIFrameWrapperRef.current.contains(event.target as Node)
      ) {
        closePVMovieIFrame();
      }
    };
    if (isPVMovieOpen) {
      document.addEventListener("click", handleWrapperClick);
    }
    return () => {
      document.removeEventListener("click", handleWrapperClick);
    };
  }, [isPVMovieOpen]);

  const closePVMovieIFrame = () => {
    setIsPVMovieOpen(false);
    if (pvMovieYoutubeIFrame) {
      pvMovieYoutubeIFrame.destroy(); // Destroy the previous player instance
      pvMovieYoutubeIFrame = null;
    }
  };

  return (
    <>
      {{ isPVMovieOpen } ? <Hamburger state={isPVMovieOpen} /> : null}

      <div className="max-w-4xl  mx-auto w-auto mb-24 sm:p-12 ">
        <SubTitle title="ムービー" />
        <div className="flex items-center justify-center gap-4">
          {movieType.map((type, index: number) => {
            return (
              <ReactScroll.Link
                key={index}
                to={type}
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                className="yakuhanjp special-sns-band"
              >
                {type}
              </ReactScroll.Link>
            );
          })}
        </div>
        <SpecialSubTitle specialSubTitle="PV" id="PV" />
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-y-[58px] gap-x-[28px]">
          {specialPVMovies.map((movie, index: number) => {
            return (
              <div key={index}>
                <div className="relative group overflow-hidden">
                  <div className="thumbnail-container ">
                    <div className="flex flex-col gap-4">
                      <Image
                        src={movie.thumbnail}
                        alt={"movie-thumbnail"}
                        width={1000}
                        height={1000}
                        className="rounded-lg group-hover:scale-105 transition duration-[0.4s] sm:w-[100%]"
                        priority
                      />
                      <SpecialDescription description={movie.description} />
                    </div>
                  </div>
                  <div className="thumbnail-play-container">
                    <Image
                      src={SwPlay}
                      width={30}
                      height={30}
                      className="thumbnail-play"
                      alt="thumbnail_play"
                      onClick={() =>
                        handleOpenPVMovie(
                          getYoutubeVideoId(movie.youtubeVideoUrl) as string,
                          index
                        )
                      }
                    />
                  </div>
                </div>
                <div
                  className={`fixed bg-[rgba(0,0,0,0.3)] ${
                    isPVMovieOpen && pvMovieIndex === index ? "flex" : "hidden"
                  } inset-0 z-20 items-center justify-center m-0 `}
                >
                  <div
                    ref={pvMovieIFrameWrapperRef}
                    className="w-[75%] h-[75%] "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      id={`youtube-${getYoutubeVideoId(movie.youtubeVideoUrl)}`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <SpecialSubTitle specialSubTitle="MV" id="MV" />
        <div className="grid md:grid-cols-2 sm:grid-cols-1  gap-y-[58px] gap-x-[28px]">
          {specialMVMovies.map((movie, index: number) => {
            return (
              <div key={index}>
                <div className="relative group overflow-hidden">
                  <div className="thumbnail-container ">
                    <div className="flex flex-col gap-4">
                      <Image
                        src={movie.thumbnail}
                        alt={"movie-thumbnail"}
                        width={1000}
                        height={1000}
                        className="rounded-lg group-hover:scale-105 transition duration-[0.4s]"
                        priority
                      />
                      <SpecialDescription description={movie.description} />
                    </div>
                  </div>
                  <div className="thumbnail-play-container">
                    <Image
                      src={SwPlay}
                      width={30}
                      height={30}
                      className="thumbnail-play"
                      alt="thumbnail_play"
                      onClick={() =>
                        handleOpenMvMovie(
                          getYoutubeVideoId(movie.youtubeVideoUrl) as string,
                          index
                        )
                      }
                    />
                  </div>
                </div>
                <div
                  className={`fixed bg-[rgba(0,0,0,0.3)] ${
                    isPVMovieOpen && pvMovieIndex === index ? "flex" : "hidden"
                  } inset-0 z-20 items-center justify-center m-0 `}
                >
                  <div
                    ref={pvMovieIFrameWrapperRef}
                    className="w-[75%] h-[75%] "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      id={`youtube-${getYoutubeVideoId(movie.youtubeVideoUrl)}`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <SpecialSubTitle specialSubTitle="ぱすてるらいふ" id="ぱすてるらいふ" />
        <div className="grid grid-cols-2 gap-y-[58px] gap-x-[28px]">
          {specialPastelLifeMovies.map((movie, index: number) => {
            return (
              <div key={index}>
                <div className="relative group overflow-hidden">
                  <div className="thumbnail-container ">
                    <div className="flex flex-col gap-4">
                      <Image
                        src={movie.thumbnail}
                        alt={"movie-thumbnail"}
                        width={1000}
                        height={1000}
                        className="rounded-lg group-hover:scale-105 transition duration-[0.4s]"
                        priority
                      />
                      <SpecialDescription description={movie.description} />
                    </div>
                  </div>
                  <div className="thumbnail-play-container">
                    <Image
                      src={SwPlay}
                      width={30}
                      height={30}
                      className="thumbnail-play"
                      alt="thumbnail_play"
                      // onClick={() =>
                      //   handleOpenPVMovie(
                      //     getYoutubeVideoId(movie.youtubeVideoUrl) as string,
                      //     index
                      //   )
                      // }
                    />
                  </div>
                </div>
                <div
                  className={`fixed bg-[rgba(0,0,0,0.3)] ${
                    isPVMovieOpen && pvMovieIndex === index ? "flex" : "hidden"
                  } inset-0 z-20 items-center justify-center m-0 `}
                >
                  <div
                    ref={pvMovieIFrameWrapperRef}
                    className="w-[75%] h-[75%] "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      id={`youtube-${getYoutubeVideoId(movie.youtubeVideoUrl)}`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SpecialMoviePage;
