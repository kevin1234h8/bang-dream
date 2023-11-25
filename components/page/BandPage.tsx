"use client";

import YouTubeIframeLoader from "youtube-iframe";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import SwPlay from "@/assets/thumbnail_play.svg";
import SwMoreButton from "../SwMoreButton";
import BangDreamBandYoutubeIFrameVideo from "../BangDreamBandYoutubeIFrameVideo";
import { BangDreamBandLogoIcon, BangDreamBandLogos } from "@/type";
import BangDreamBandLogo from "../BangDreamBandLogo";
import { addHyphen } from "@/utils/stringUtils";
import Hamburger from "../Hamburger";
import { getYoutubeVideoId, onPlayerReady } from "@/utils/youtubeUtils";
import useOutsideClick from "@/hooks/useOutsideClick";
import Loading from "@/app/character/loading";

type BandPageProps = {
  bangDreamBandLogoIcon: BangDreamBandLogoIcon | null;
  bangDreamBandLogos: BangDreamBandLogos | null;
  bandName: string;
};

const BandPage = ({
  bangDreamBandLogoIcon,
  bangDreamBandLogos,
  bandName,
}: BandPageProps) => {
  const [
    isBangDreamBandYoutubeIFrameVideoOpen,
    setIsBangDreamBandYoutubeIFrameVideoOpen,
  ] = useState<boolean>(false);
  var bangDreamBandIframeVideo: any = null;

  useEffect(() => {
    if (isBangDreamBandYoutubeIFrameVideoOpen) {
      YouTubeIframeLoader.load(function (YT) {
        bangDreamBandIframeVideo = new YT.Player(`youtube-iframe`, {
          height: "100%",
          width: "100%",
          videoId: getYoutubeVideoId(
            bangDreamBandLogoIcon?.bangDreamBandLogo.youtube as string,
          ),
          playerVars: {
            autoplay: 1,
          },
          events: {
            onReady: onPlayerReady,
          },
        });
      });
    }
  }, [isBangDreamBandYoutubeIFrameVideoOpen]);

  const handleBangDreamBandYoutubeIFrameVideoOpen = () => {
    setIsBangDreamBandYoutubeIFrameVideoOpen(
      !isBangDreamBandYoutubeIFrameVideoOpen,
    );
    if (bangDreamBandIframeVideo) {
      bangDreamBandIframeVideo.playVideo();
    }
  };
  const closeIframe = () => {
    setIsBangDreamBandYoutubeIFrameVideoOpen(false);
    if (bangDreamBandIframeVideo) {
      bangDreamBandIframeVideo.destroy(); // Destroy the previous player instance
      bangDreamBandIframeVideo = null;
    }
  };

  useEffect(() => {
    YouTubeIframeLoader.load(function (YT) {
      new YT.Player(
        `youtube-${getYoutubeVideoId(
          bangDreamBandLogoIcon?.bangDreamBandLogo.youtube as string,
        )}`,
        {
          height: "100%",
          width: "100%",
          videoId: getYoutubeVideoId(
            bangDreamBandLogoIcon?.bangDreamBandLogo.youtube as string,
          ),
          playerVars: {
            autoplay: 1, // Autoplay when the player is ready
            loop: 1, // Loop the video
            mute: 1, // Mute the video
          },
        },
      );
    });
  }, []);

  return (
    <div>
      <div
        className="embed-youtube"
        onClick={handleBangDreamBandYoutubeIFrameVideoOpen}
      >
        <div
          className="youtube-api max-w-5xl"
          id={`youtube-${getYoutubeVideoId(
            bangDreamBandLogoIcon?.bangDreamBandLogo.youtube as string,
          )}`}
          // title="【#ガルパ超大型アップデート】Afterglow『That Is How I Roll!』3Dライブ映像"
        ></div>
        <div className="sw-play-container">
          <div className="sw-play-content">
            <Image
              className="sw-play"
              src={SwPlay}
              alt="AppStore"
              width={150}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-auto max-w-5xl flex-col items-center justify-center gap-8">
        <div className="relative top-[-35px] flex flex-col items-center justify-center gap-4">
          <div>
            <div
              className={`small w-[600px] text-[2.2rem] ${addHyphen(bandName)}`}
            >
              花咲川女子学園で結成された
            </div>
          </div>
          <div>
            <div className={`large ${addHyphen(bandName)}`}>
              ガールズバンド！
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-[18px] font-bold tracking-[4px]">
          <div>ガールズバンド時代にキラキラ輝く５人組女子高生バンド。</div>
          <div>
            自分たちの気持ちを音にのせて、たくさんのドキドキを届けるために日々ライブをしている。
          </div>
        </div>
        <SwMoreButton text="コミックを読む" url="/" bandName={bandName} />
      </div>
      <div className="mx-auto mb-[4rem] flex w-auto max-w-5xl items-center justify-center gap-12">
        {bangDreamBandLogos?.bangDreamBandLogos.map(
          (logo: any, index: number) => {
            return (
              <Suspense fallback={<Loading />} key={index}>
                <BangDreamBandLogo logo={logo} bandName={bandName} />
              </Suspense>
            );
          },
        )}
      </div>
      {{ isBangDreamBandYoutubeIFrameVideoOpen } ? (
        <Hamburger state={isBangDreamBandYoutubeIFrameVideoOpen} />
      ) : null}

      <BangDreamBandYoutubeIFrameVideo
        isBangDreamBandYoutubeIFrameVideoOpen={
          isBangDreamBandYoutubeIFrameVideoOpen
        }
        closeIframe={closeIframe}
      />
    </div>
  );
};

export default BandPage;
