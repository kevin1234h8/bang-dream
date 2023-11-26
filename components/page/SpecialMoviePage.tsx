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
import {} from "@/utils/stringUtils";
import { getYoutubeVideoId, onPlayerReady } from "@/utils/youtubeUtils";
import useOutsideClick from "@/hooks/useOutsideClick";
import { SocialMedia, SpecialMovie } from "@/type";
import Hamburger from "../Hamburger";
import SpecialSubTitle from "../SpecialSubTitle";
import SpecialPagination from "../SpecialPagination";

type SpecialMoviePageProps = {
  specialPVMovies: SpecialMovie[] | null;
  specialMVMovies: SpecialMovie[] | null;
  specialPastelLifeMovies: SpecialMovie[] | null;
  socialMedias: SocialMedia[] | null;
};

const SpecialMoviePage = ({
  specialPVMovies,
  specialMVMovies,
  specialPastelLifeMovies,
  socialMedias,
}: SpecialMoviePageProps) => {
  const pvMovieIFrameWrapperRef = useRef<HTMLDivElement | null>(null);
  var pvMovieYoutubeIFrame: any = null;
  const pvMovieIndex = [1, 0, 3, 2];
  const mvMovieIndex = [3, 0, 1, 4, 5, 6, 2];
  const pastelLifeMovieIndex = [1, 3, 5, 4, 2, 0];

  const [isPVMovieOpen, setIsPVMovieOpen] = useState<boolean>(false);
  const [isMvMovieOpen, setIsMvMovieOpen] = useState<boolean>(false);
  const [isPastelLifeMovieOpen, setIsPastelLifeMovieOpen] =
    useState<boolean>(false);

  const movieType = ["PV", "MV", "ぱすてるらいふ"];

  // const videoIdRef = useRef<string>("");
  const [videoId, setVideoId] = useState<string>("");
  const handleOpenPVMovie = (videoId: string) => {
    setVideoId(videoId);
    setIsPVMovieOpen(true);
  };

  const handleOpenMvMovie = (videoId: string) => {
    setVideoId(videoId);
    setIsMvMovieOpen(true);
  };

  const handleOpenPastelLifeMovie = (videoId: string) => {
    setVideoId(videoId);
    setIsPastelLifeMovieOpen(true);
  };

  useEffect(() => {
    if (isPVMovieOpen || isMvMovieOpen || isPastelLifeMovieOpen) {
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
  }, [isPVMovieOpen, videoId]);

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
  const closeMVMovieIFrame = () => {
    setIsPVMovieOpen(false);
    if (specialMVMovies) {
      pvMovieYoutubeIFrame.destroy(); // Destroy the previous player instance
      pvMovieYoutubeIFrame = null;
    }
  };
  const closePastelLifeMovieIFrame = () => {
    setIsPVMovieOpen(false);
    if (specialPastelLifeMovies) {
      pvMovieYoutubeIFrame.destroy(); // Destroy the previous player instance
      pvMovieYoutubeIFrame = null;
    }
  };
  if (!specialPVMovies || !specialMVMovies || !specialPastelLifeMovies) {
    return null;
  }
  return (
    <>
      {{ isPVMovieOpen } ? <Hamburger state={isPVMovieOpen} /> : null}
      {{ isMvMovieOpen } ? <Hamburger state={isMvMovieOpen} /> : null}
      {{ isPastelLifeMovieOpen } ? (
        <Hamburger state={isPastelLifeMovieOpen} />
      ) : null}

      <div className="mx-auto  mb-24 w-auto max-w-4xl sm:p-12 ">
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
        <div className="grid gap-x-[28px] gap-y-[58px] sm:grid-cols-1 md:grid-cols-2">
          {pvMovieIndex.map((index: number) => {
            const movie = specialPVMovies[index];
            return (
              <div key={index}>
                <div className="group relative overflow-hidden">
                  <div className="thumbnail-container">
                    <div className="flex flex-col gap-4">
                      <Image
                        src={movie.thumbnail}
                        alt={"movie-thumbnail"}
                        width={1000}
                        height={1000}
                        className="rounded-lg transition duration-[0.4s] group-hover:scale-105 sm:w-[100%]"
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
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <SpecialSubTitle specialSubTitle="MV" id="MV" />
        <div className="grid gap-x-[28px] gap-y-[58px]  sm:grid-cols-1 md:grid-cols-2">
          {mvMovieIndex.map((index: number) => {
            const movie = specialMVMovies[index];

            return (
              <div key={index}>
                <div className="group relative overflow-hidden">
                  <div className="thumbnail-container ">
                    <div className="flex flex-col gap-4">
                      <Image
                        src={movie.thumbnail}
                        alt={"movie-thumbnail"}
                        width={1000}
                        height={1000}
                        className="rounded-lg transition duration-[0.4s] group-hover:scale-105"
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
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <SpecialSubTitle specialSubTitle="ぱすてるらいふ" id="ぱすてるらいふ" />
        <div className="grid grid-cols-2 gap-x-[28px] gap-y-[58px]">
          {pastelLifeMovieIndex.map((index: number) => {
            const movie = specialPastelLifeMovies[index];
            return (
              <div key={index}>
                <div>{getYoutubeVideoId(movie.youtubeVideoUrl)}</div>

                <div className="group relative overflow-hidden">
                  <div className="thumbnail-container ">
                    <div className="flex flex-col gap-4">
                      <Image
                        src={movie.thumbnail}
                        alt={"movie-thumbnail"}
                        width={1000}
                        height={1000}
                        className="rounded-lg transition duration-[0.4s] group-hover:scale-105"
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
                        handleOpenPastelLifeMovie(
                          getYoutubeVideoId(movie.youtubeVideoUrl) as string,
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`fixed bg-[rgba(0,0,0,0.3)] ${
            isPVMovieOpen || isMvMovieOpen || isPastelLifeMovieOpen
              ? "flex"
              : "hidden"
          } inset-0 z-20 m-0 items-center justify-center `}
        >
          <div
            ref={pvMovieIFrameWrapperRef}
            className="h-[75%] w-[75%] "
            onClick={(e) => e.stopPropagation()}
          >
            <div id={`youtube-${videoId}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialMoviePage;
