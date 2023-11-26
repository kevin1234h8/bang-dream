"use client";

import BangDreamProfile from "@/assets/bandori_profile.png";
import BgDecoCatch from "@/assets/bg_deco_catch.png";
import { BangDreamBand } from "@/type";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import IdxSubTitle from "../IdxSubTitle";
import SwButtonNormal from "../SwButtonNormal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import YouTubeIframeLoader from "youtube-iframe";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  RefObject,
} from "react";
import { closeIframe, getYoutubeVideoId } from "@/utils/youtubeUtils";
import useOutsideClick from "@/hooks/useOutsideClick";
import Hamburger from "../Hamburger";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { addHyphen } from "@/utils/stringUtils";

type HomePageProps = {
  bangDreamBands: BangDreamBand[] | null;
};

const HomePage = ({ bangDreamBands }: HomePageProps) => {
  // const refs = bangDreamBands.map(() => useRef(null));
  // const refs = Array.from({ length: bangDreamBands.length }, () =>
  //   useRef<HTMLAnchorElement>(null),
  // );
  const characterProfileDetailsRef = useRef(null);
  const iFrameWrapperRef = useRef<HTMLDivElement | null>(null);
  const refs: RefObject<HTMLAnchorElement> = useRef(null);
  // useEffect(() => {
  //   const characterProfileContainerOne  = refs[0].current;
  //   const characterProfileContainerTwo = refs[1].current;
  //   const characterProfileContainerThree = refs[2].current;
  //   const characterProfileContainerFour = refs[3].current;
  //   const characterProfileContainerFive = refs[4].current;
  //   const characterProfileDetails = characterProfileDetailsRef.current;

  //   const tl = gsap.timeline();
  //   tl.fromTo(
  //     characterProfileContainerOne,
  //     { x: -100, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 0.3 },
  //   );
  //   ScrollTrigger.create({
  //     animation: tl,
  //     trigger: characterProfileDetails,
  //     start: "top center",
  //     end: "bottom center",
  //     markers: true,
  //     toggleActions: "restart none none none",
  //     once: true,
  //   });

  //   tl.fromTo(
  //     characterProfileContainerTwo,
  //     { x: -100, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 0.3, delay: 0.1 },
  //   );
  //   ScrollTrigger.create({
  //     animation: tl,
  //     trigger: characterProfileDetails,
  //     start: "top center",
  //     end: "bottom center",
  //     markers: true,
  //     toggleActions: "restart none none none",
  //     once: true,
  //   });

  //   tl.fromTo(
  //     characterProfileContainerThree,
  //     { x: -100, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 0.3, delay: 0.1 },
  //   );
  //   ScrollTrigger.create({
  //     animation: tl,
  //     trigger: characterProfileDetails,
  //     start: "top center",
  //     end: "bottom center",
  //     markers: true,
  //     toggleActions: "restart none none none",
  //     once: true,
  //   });

  //   tl.fromTo(
  //     characterProfileContainerFour,
  //     { x: -100, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 0.3, delay: 0.1 },
  //   );
  //   ScrollTrigger.create({
  //     animation: tl,
  //     trigger: characterProfileDetails,
  //     start: "top center",
  //     end: "bottom center",
  //     markers: true,
  //     toggleActions: "restart none none none",
  //     once: true,
  //   });

  //   tl.fromTo(
  //     characterProfileContainerFive,
  //     { x: -100, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 0.3, delay: 0.1 },
  //   );
  //   ScrollTrigger.create({
  //     animation: tl,
  //     trigger: characterProfileDetails,
  //     start: "top center",
  //     end: "bottom center",
  //     markers: true,
  //     toggleActions: "restart none none none",
  //     once: true,
  //   });
  // }, []);
  var homepageIframeVideo: any = null;
  const [
    isHomePageYoutubeIFrameVideoOpen,
    setIsHomePageYoutubeIFrameVideoOpen,
  ] = useState<boolean>(false);
  useOutsideClick(isHomePageYoutubeIFrameVideoOpen, iFrameWrapperRef, () => {
    closeIframe(setIsHomePageYoutubeIFrameVideoOpen, homepageIframeVideo);
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      YouTubeIframeLoader.load(function (YT) {
        new YT.Player(
          `youtube-${getYoutubeVideoId(
            "https://www.youtube.com/embed/Zz3iJejwNuI",
          )}`,
          {
            height: "100%",
            width: "100%",
            videoId: getYoutubeVideoId(
              "https://www.youtube.com/embed/Zz3iJejwNuI",
            ),
            playerVars: {
              autoplay: 1,
              loop: 1,
              mute: 1,
            },
          },
        );
      });
    }
  });

  useEffect(() => {
    YouTubeIframeLoader.load(function (YT) {
      homepageIframeVideo = new YT.Player(`youtube-iframe`, {
        height: "100%",
        width: "100%",
        videoId: getYoutubeVideoId("https://www.youtube.com/embed/Zz3iJejwNuI"),
        playerVars: {
          autoplay: 1,
        },
      });
    });
  }, [isHomePageYoutubeIFrameVideoOpen]);

  const idxBanners = [
    {
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2023/01/11203427/bnr_6th-teaser.png",
      redirectUri: "https://anniv-bang-dream.bushimo.jp/6th/",
    },
    {
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2021/10/08125319/banner_oficial_moniras2nd.png",
      redirectUri:
        "https://bang-dream.bushimo.jp/bs2_morfonica_raise-a-suilen/",
    },
    {
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2021/04/bnr-switch.png",
      redirectUri: "https://bang-dream.bushimo.jp/switch/",
    },
    {
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2021/03/ホームバナー_バンストコミカライズ.png",
      redirectUri: "https://bang-dream.bushimo.jp/special/comic/",
    },
    {
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2021/02/banner_oficial_contentguidelines-1-1.png",
      redirectUri: "https://bang-dream.bushimo.jp/rule/",
    },
    {
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2020/10/bnr_bs3-2.png",
      redirectUri: "https://bang-dream.bushimo.jp/bs3/",
    },
    {
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2020/04/banner_news_xxx-1.png",
      redirectUri: "https://bang-dream.com/goods/1747",
    },
    {
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2019/09/GRP_PASS_banner-1.png",
      redirectUri: "https://bang-dream.bushimo.jp/garupapass/",
    },
    {
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2020/11/BGD_LINE_banner_3_game_2.jpg",
      redirectUri: "https://store.line.me/stickershop/product/18982",
    },
  ];
  const handleHomepageYoutubeIFrameVideoOpen = () => {
    setIsHomePageYoutubeIFrameVideoOpen(!isHomePageYoutubeIFrameVideoOpen);
    if (isHomePageYoutubeIFrameVideoOpen) {
      homepageIframeVideo.playVideo();
    }
  };

  const [progressWidth, setProgressWidth] = useState<number>(0);
  const effectCallback = useMemo(() => {
    return () => {
      const duration = 3500;
      const numberOfIntervals = 100;

      const interval = setInterval(() => {
        setProgressWidth((prevWidth) => {
          const newWidth = (prevWidth + 1) % 101;

          if (newWidth > 90) {
            clearInterval(interval);
            return 100;
          }

          return newWidth;
        });
      }, duration / numberOfIntervals);

      return () => clearInterval(interval);
    };
  }, [setProgressWidth]);

  useLayoutEffect(effectCallback, [progressWidth]);

  const credits = [
    {
      role: "企画・制作",
      name: "株式会社Craft Egg",
    },
    {
      role: "原案・メインシナリオ",
      name: "中村航",
    },
    {
      role: "キャラクターデザイン／メインビジュアル",
      name: "信澤収、ひと和（原案）、Craft Egg",
    },
    {
      role: "キャラクター原案",
      name: "ひと和 ／ Craft Eggイラストチーム",
    },
    {
      role: "音楽プロデュース",
      name: "三矢禅晃 ／ ブシロードミュージック",
    },
    {
      role: "主題歌・劇中歌",
      name: "中村航 ／ 織田あすか（Elements Garden）／ 岩橋星実（Elements Garden）",
    },
  ];
  console.log("progressWidth", progressWidth);
  return (
    <div className="homepage-container mx-auto mt-0 w-auto  max-w-full pb-24  lg:mt-8">
      <div className="mx-auto  my-0 w-auto  max-w-5xl lg:my-8">
        <Swiper
          modules={[Autoplay, Navigation, EffectFade, Pagination]}
          effect="fade"
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation
          className="homepage-swiper-container"
          pagination={{
            type: "fraction",
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => setProgressWidth(0)}
        >
          <SwiperSlide>
            <div className="h-[400px] overflow-hidden">
              <Image
                width={5000}
                height={1100}
                className="w-full"
                src="https://s3-ap-northeast-1.amazonaws.com/bang-dream-portal/a55a28f5-0fd0-4c7f-a2d3-87b9fbc6d027.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[400px] overflow-hidden">
              <Image
                width={5000}
                height={1100}
                className="w-full"
                src="https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/webp/pc/index/img_kv.webp"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          className={`relative top-[-44px] h-[4px] bg-red `}
          style={{ width: progressWidth + "%" }}
        ></div>
        <div className="group my-12 flex items-center justify-between bg-white">
          <div className="flex items-center">
            <div className="h-20 w-[20px] bg-[#f9cee2] duration-[0.4s] ease-in-out group-hover:w-[40px]"></div>
            <div className="relative left-0 h-[2px] w-12 bg-[#b92b5d] duration-[0.4s] ease-in-out group-hover:left-[-65px]"></div>
          </div>
          <div className="yakuhanjp px-8 py-4 text-[#b92b5d]">
            【2023年10月12日】新バンド「MyGO!!!!!」登場！
          </div>
          <div className="group flex items-center gap-4 pr-16">
            <div className=" text-[#b92b5d]">MORE</div>
            <div className="flex items-center ">
              <div className="h-[1px] w-[1.2rem] bg-[#b92b5d] duration-[0.4s] ease-in-out group-hover:w-[0.5rem]"></div>
              <div className="h-[4px] w-[4px] rounded-full bg-[#b92b5d] duration-[0.4s] ease-in-out group-hover:h-[10px] group-hover:w-[10px]"></div>
            </div>
          </div>
        </div>
        <div className="my-12">
          <Image
            width={2100}
            height={1100}
            src={
              "https://heaven-burns-red.com/assets/images/pc/index/bg_preregi_top.png"
            }
            alt="bg_preregi_top.png"
            className="scale-150"
          />
          <Swiper
            modules={[EffectFade, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            // autoplay={{
            //   delay: 4000,
            //   disableOnInteraction: false,
            // }}
            className="main-image-container"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {idxBanners.map((idxBanner, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link
                    target="_blank"
                    href={idxBanner.redirectUri}
                    className="group"
                  >
                    <Image
                      width={3100}
                      height={2100}
                      src={idxBanner.image}
                      alt="idxBannerImage"
                      className="w-full shadow-md duration-[0.4s] ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Image
            width={5100}
            height={1100}
            src={
              "https://heaven-burns-red.com/assets/images/pc/index/bg_preregi_bottom.png"
            }
            alt="bg_preregi_bottom"
            className="w-full scale-150"
          />
        </div>
        <IdxSubTitle subTitle="MOVIE" japaneseSubTitle="ムービー" />
        <div className="group relative mb-12 h-[380px] overflow-hidden lg:h-[580px]">
          <div
            className="pointer-events-none scale-[1.45]"
            id={`youtube-${getYoutubeVideoId(
              `https://www.youtube.com/embed/Zz3iJejwNuI`,
            )}`}
          ></div>
          <div className="absolute inset-0 h-full w-full bg-red/30">
            <Image
              src={
                "https://heaven-burns-red.com/assets/images/pc/index/bg_movie_frame.png"
              }
              alt=""
              width={1100}
              height={1300}
            />
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={handleHomepageYoutubeIFrameVideoOpen}
          >
            <Image
              src={
                "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2021%2015%22%3E%20%3Cpath%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20.495%202.437c-.229-.866-.907-1.549-1.769-1.78-1.561-.422-7.82-.422-7.82-.422s-6.26%200-7.821.422c-.861.231-1.54.914-1.77%201.78C.897%204.009.897%207.286.897%207.286s0%203.279.418%204.85c.23.866.909%201.549%201.77%201.781%201.561.422%207.821.422%207.821.422s6.259%200%207.82-.422c.862-.232%201.54-.915%201.769-1.781.42-1.571.42-4.85.42-4.85s0-3.277-.42-4.849zM8.858%2010.263V4.31l5.232%202.977-5.232%202.976z%22%2F%3E%3C%2Fsvg%3E"
              }
              alt="youtube-white-icon"
              className="duration-[0.4s] ease-in-out group-hover:scale-125"
              width={100}
              height={100}
            />
          </div>
        </div>
        <Link
          href={"https://www.youtube.com/@bang_dream_official"}
          target="_blank"
          className="group relative mb-12 flex items-center justify-center"
        >
          <Image
            width={250}
            height={250}
            className="relative left-[4px] top-[3px] duration-[0.4s] ease-in-out group-hover:left-2 group-hover:top-2"
            alt="button"
            src={
              "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20285%2075%22%3E%20%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23bc1d1d%22%20d%3D%22M17.979%203.561h262.708v53.13l-13.944%2013.87H3.687V17.879L17.979%203.561z%22%2F%3E%3C%2Fsvg%3E"
            }
          />
          <Image
            src={
              "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20278%2068%22%3E%20%3Cpath%20fill%3D%22%23bc1d1d%22%20fill-rule%3D%22evenodd%22%20d%3D%22M277.199%2067.2H0V13.999L14%200h263.199v53.199l-14.001%2014h14.001v.001z%22%20opacity%3D%22.8%22%2F%3E%3C%2Fsvg%3E"
            }
            alt=""
            width={250}
            height={250}
            className="absolute"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-3 ">
            <div className="flex items-center justify-center">
              <Image
                width={15}
                height={15}
                className="duration-[0.4s] ease-in-out group-hover:scale-125"
                src={
                  "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2021%2015%22%3E%20%3Cpath%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20.495%202.437c-.229-.866-.907-1.549-1.769-1.78-1.561-.422-7.82-.422-7.82-.422s-6.26%200-7.821.422c-.861.231-1.54.914-1.77%201.78C.897%204.009.897%207.286.897%207.286s0%203.279.418%204.85c.23.866.909%201.549%201.77%201.781%201.561.422%207.821.422%207.821.422s6.259%200%207.82-.422c.862-.232%201.54-.915%201.769-1.781.42-1.571.42-4.85.42-4.85s0-3.277-.42-4.849zM8.858%2010.263V4.31l5.232%202.977-5.232%202.976z%22%2F%3E%3C%2Fsvg%3E"
                }
                alt="youtubeIcon"
              />
            </div>
            <div className="text-md tracking-[2px] text-white">
              Youtube Channel
            </div>
            <Image
              className="relative right-[-10px] top-[-15px]"
              src={
                "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2097%2098%22%3E%20%3Cpath%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M88.385%201.224L28.42.983c-4.743-.008-8.27%203.502-8.253%207.863.016%204.36%203.576%207.913%208.743%207.913l40.464.189L2.525%2083.691c-1.975%203.064-2.008%208.051.05%2011.158%203.105%203.09%208.09%203.107%2011.179.034l66.839-66.742.165%2041.207c.027%204.36%203.58%207.922%207.935%207.94%202.187%200%204.163-.893%205.584-2.292%201.422-1.425%202.297-3.39%202.297-5.579L96.319%209.18c-.033-4.386-3.57-7.913-7.934-7.956z%22%2F%3E%3C%2Fsvg%3E"
              }
              alt="right-icon"
              width={5}
              height={5}
            />
          </div>
        </Link>
        <div>
          <Image src={BgDecoCatch} alt="BgDecoCatch" />
          <div className="catch_inner page-title text-center text-[48px] leading-relaxed">
            <div>
              <span className="main-catch_inner">香澄</span>たちが進む、
              <span className="main-catch_inner">3年目</span>の物語
            </div>
          </div>
          <Image className="rotate-180" src={BgDecoCatch} alt="BgDecoCatch" />
        </div>
        <div className="my-20 grid grid-cols-3 gap-x-20 gap-y-16">
          {credits.map((credit, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
              >
                <div className="yakuhanjp text-sm text-[#b92b5d]">
                  {credit.role}
                </div>
                <div className="yakuhanjp text-center text-lg font-light">
                  {credit.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-12">
          <SwButtonNormal redirectUri="/music" text="MUSIC" />
          <SwButtonNormal redirectUri="/story" text="STORY" />
          <SwButtonNormal redirectUri="/system" text="SYSTEM" />
        </div>
        <IdxSubTitle subTitle="CHARACTER" japaneseSubTitle="キャラクター" />
        <div className=" relative bg-white">
          <div className="h-[600px] overflow-hidden">
            <Image
              width={1100}
              height={1100}
              src={
                "https://w0.peakpx.com/wallpaper/166/548/HD-wallpaper-toyama-kasumi-guitar-instrument-cherry-blossom-brown-hair-bang-dream-animal-ears-anime.jpg"
              }
              alt="poppin party"
            />
          </div>
          <div
            className="z-10 flex items-center justify-between gap-8 px-12"
            ref={characterProfileDetailsRef}
          >
            <CldImage
              width={200}
              height={200}
              src="logo_poppinparty_idwmsx"
              alt="poppin-party-logo"
              className="rounded-lg"
            />
            <div>
              <div className="text-[36px] text-[#b92b5d]">Poppin’Party</div>
              <div className="yakuhanjp my-2 text-[10px] tracking-[4px] text-[#b92b5d]">
                ポッピンパーティー
              </div>
              <div className="yakuhanjp w-[219px]  bg-[#b92b5d] px-1 text-[12px] text-white ">
                通称 : Poppin’Party『ポピパ』
              </div>
            </div>
            <Image
              src={BangDreamProfile}
              alt="BangDreamProfile"
              width={1100}
              height={1100}
              className="h-[320px] w-[320px]"
            />
            <div className=" group relative z-10 flex items-center">
              <div className="absolute left-[-15px] h-8 w-8 rounded-full bg-[#ffccde] duration-[0.4s] ease-in-out group-hover:h-10 group-hover:w-10"></div>
              <div className="z-10  text-[10px] text-red">MORE</div>
              <div className="flex items-center">
                <div className="h-[1px] w-[1.2rem] bg-[#b92b5d] duration-[0.4s] ease-in-out group-hover:w-[0.5rem]"></div>
                <div className="h-[4px] w-[4px] rounded-full bg-[#b92b5d] duration-[0.4s] ease-in-out group-hover:h-[10px] group-hover:w-[10px]"></div>
              </div>
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-between gap-8 px-12">
            {bangDreamBands?.map((bangDreamBand, index) => {
              return (
                <Link
                  href={`/character/${addHyphen(
                    bangDreamBand.bandMembers.band,
                  )}/${addHyphen(bangDreamBand.bandMembers.name)}`}
                  key={index}
                  className="character-profile-container"
                  // ref={refs[index]}
                >
                  <div className="relative h-[300px] overflow-hidden ">
                    <div className=" character-profile absolute top-[45px] z-10 h-[400px] w-full"></div>
                    <div className=" bg-red-300  absolute top-[45px] h-[400px] w-full"></div>

                    <CldImage
                      width={3100}
                      height={1100}
                      className="relative top-[120px] z-10 scale-[2.4]  after:absolute after:top-0 after:h-[20px] after:w-[20px] after:bg-blue-500 after:content-[''] "
                      alt={bangDreamBand.bandMembers.name}
                      src={
                        bangDreamBand.bandMembers.image[0].outfitSeasonThree[0]
                      }
                    />
                  </div>
                  <div className="yakuhanjp z-[10] mb-5 mt-3 text-center text-sm  text-white">
                    {bangDreamBand.bandMembers.japaneseName}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="absolute   bottom-0 z-[2] h-[170px] w-full bg-[#b92b5d]"></div>
        </div>
      </div>
      {{ isHomePageYoutubeIFrameVideoOpen } ? (
        <Hamburger state={isHomePageYoutubeIFrameVideoOpen} />
      ) : null}

      {isHomePageYoutubeIFrameVideoOpen ? (
        <div
          className={`inset-0 z-50 ${
            isHomePageYoutubeIFrameVideoOpen ? "flex" : "hidden"
          } fixed  items-center justify-center bg-black/40`}
          ref={iFrameWrapperRef}
        >
          <div className="h-[40%] w-[100%] lg:h-[75%] lg:w-[75%]">
            <div id="youtube-iframe"></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HomePage;
