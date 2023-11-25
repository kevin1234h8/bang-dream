"use client";

import BangDreamAppIcon from "@/assets/434x0w.webp";
import BangDreamLogo from "@/assets/bang-dream-logo.png";
import AppStore from "@/assets/img_badge_appstore.png";
import PlayStore from "@/assets/img_badge_googleplay.png";
import InstagramIcon from "@/assets/instagram.svg";
import LineIcon from "@/assets/line.svg";
import MusicIcon from "@/assets/music-next.svg";
import MusicTracker from "@/assets/music-tracker.svg";
import PauseIcon from "@/assets/pause.svg";
import PlayIcon from "@/assets/play.svg";
import TwitterIcon from "@/assets/twitter.svg";
import YoutubeIcon from "@/assets/youtube.svg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import datas from "@/data/data.json";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import bgButtonLine from "@/assets/bg_button_line.png";
import bgButtonTwitter from "@/assets/bg_button_twitter.png";
import bgButtonYoutube from "@/assets/bg_button_youtube.png";
import lineWhiteIcon from "@/assets/line-white.svg";
import twitterWhiteIcon from "@/assets/twitter-white.svg";
import youtubeWhiteIcon from "@/assets/youtube-white.svg";
import FooterPolicy from "@/components/FooterPolicy";
import { MusicPlaying, RandomBangDreamBandMember } from "@/type";
import { Howl } from "howler";
import { CldImage } from "next-cloudinary";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getNextMusicTitle, getPreviousMusicTitle } from "@/utils/musicUtils";
import Link from "next/link";
import { addHyphen } from "@/utils/stringUtils";

type LayoutPageProps = {
  children: React.ReactNode;
  randomBangDreamBandMembers: RandomBangDreamBandMember[];
};

const LayoutPage = ({
  children,
  randomBangDreamBandMembers,
}: LayoutPageProps) => {
  const [yumeSong, setYumeSong] = useState<any>();
  const [returnsSong, setReturnsSong] = useState<any>();
  const [miraiTrainSong, setMiraiTrainSong] = useState<any>();

  const randomIndex = Math.floor(
    Math.random() * randomBangDreamBandMembers.length,
  );
  const randomBangDreamBandMember = randomBangDreamBandMembers[randomIndex];
  useEffect(() => {
    var returnsSong = new Howl({
      src: [
        "https://res.cloudinary.com/deszjgxlm/video/upload/v1695409060/y2mate.com_-_Returns_hse3fc.mp3",
      ],
      preload: true,
    });

    var yumeSong = new Howl({
      src: [
        "https://res.cloudinary.com/deszjgxlm/video/upload/v1695410594/yume_qkrl4e.mp3",
      ],
      preload: true,
    });

    var miraiTrainSong = new Howl({
      src: [
        "https://res.cloudinary.com/deszjgxlm/video/upload/v1698231669/mirai-train_lpgpkq.mp3",
      ],
      preload: true,
    });

    setReturnsSong(returnsSong);
    setYumeSong(yumeSong);
    setMiraiTrainSong(miraiTrainSong);
  }, []);

  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [isMusicContainerOpen, setIsMusicContainerOpen] =
    useState<boolean>(false);
  const [isMusicTracklistOpen, setIsMusicTracklistOpen] =
    useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [musicPlaying, setMusicPlaying] = useState<MusicPlaying>({
    title: "Returns",
    artist: "Poppin Party",
  });

  gsap.registerPlugin(ScrollTrigger);

  const sideLeftTextRef = useRef(null);
  const footerRef = useRef(null);
  const footerInnerRef = useRef(null);
  const sideRightRef = useRef(null);

  useEffect(() => {
    const sideLeftText = sideLeftTextRef.current;
    const footer = footerRef.current;
    const footerInner = footerInnerRef.current;
    const tl = gsap.timeline();

    tl.to(sideLeftText, { duration: 0.3, opacity: 0 });
    ScrollTrigger.create({
      animation: tl,
      trigger: footer,
      start: "top center",
      end: "bottom center",
      endTrigger: footerInner,
      toggleActions: "restart none reverse reverse",
    });
  }, []);

  useEffect(() => {
    const sideRight = sideRightRef.current;
    const footer = footerRef.current;
    const footerInner = footerInnerRef.current;
    const tl = gsap.timeline();

    tl.to(sideRight, { duration: 0.3, opacity: 0 });
    ScrollTrigger.create({
      animation: tl,
      trigger: footer,
      start: "top center",
      end: "bottom center",
      endTrigger: footerInner,
      toggleActions: "restart none reverse reverse",
    });
  }, []);

  useEffect(() => {
    const url = window.location.pathname;
    const pathSegments = url.split("/").filter((segment) => segment);
    const character = pathSegments[0];
    if (character === "") {
      setActiveMenu("");
    } else {
      setActiveMenu(character);
    }
  }, [activeMenu]);

  const toggleReturnsSongPlay = () => {
    returnsSong.playing() ? returnsSong.pause() : returnsSong.play();
    setMusicPlaying({
      title: "Returns",
      artist: "Poppin Party",
    });
  };

  const toggleYumeSongPlay = () => {
    yumeSong.playing() ? yumeSong.pause() : yumeSong.play();
    setMusicPlaying({
      title: "夢を撃ち抜く瞬間に！",
      artist: "Poppin Party",
    });
  };

  const toggleMiraiTrainMusicPlay = () => {
    miraiTrainSong.playing() ? miraiTrainSong.pause() : miraiTrainSong.play();
    setMusicPlaying({
      title: "ミライトレイン",
      artist: "Poppin Party",
    });
  };

  const handleOpenMusicTracklist = () => {
    setIsMusicTracklistOpen(true);
  };

  const handleCloseMusicTracklist = () => {
    setIsMusicTracklistOpen(false);
  };

  const musicTitles = [
    "Returns",
    "夢を撃ち抜く瞬間に！",
    "ミライトレイン",
    "僕が名前を呼ぶ日",
  ];

  const handleNextMusic = () => {
    const nextMusic = getNextMusicTitle(musicTitles, musicPlaying.title);
    setMusicPlaying({
      title: nextMusic,
      artist: musicPlaying.artist,
    });
    if (nextMusic === "Returns") {
      if (returnsSong.playing()) {
        returnsSong.pause();
      } else {
        if (yumeSong.playing()) {
          yumeSong.stop();
        }
        if (miraiTrainSong.playing()) {
          miraiTrainSong.stop();
        }
        returnsSong.play();
      }
    } else if (nextMusic === "夢を撃ち抜く瞬間に！") {
      if (yumeSong.playing()) {
        yumeSong.pause();
      } else {
        if (returnsSong.playing()) {
          returnsSong.stop();
        }
        if (miraiTrainSong.playing()) {
          miraiTrainSong.stop();
        }
        yumeSong.play();
      }
    } else if (nextMusic === "ミライトレイン") {
      if (miraiTrainSong.playing()) {
        miraiTrainSong.pause();
      } else {
        if (returnsSong.playing()) {
          returnsSong.stop();
        }
        if (yumeSong.playing()) {
          yumeSong.stop();
        }
        miraiTrainSong.play();
      }
    }
  };

  const handlePreviousMusic = () => {
    const previousMusic = getPreviousMusicTitle(
      musicTitles,
      musicPlaying.title,
    );
    setMusicPlaying({
      title: previousMusic,
      artist: musicPlaying.artist,
    });

    if (previousMusic === "Returns") {
      if (returnsSong.playing()) {
        returnsSong.pause();
      } else {
        if (yumeSong.playing()) {
          yumeSong.stop();
        }
        if (miraiTrainSong.playing()) {
          miraiTrainSong.stop();
        }
        returnsSong.play();
      }
    } else if (previousMusic === "夢を撃ち抜く瞬間に！") {
      if (yumeSong.playing()) {
        yumeSong.pause();
      } else {
        if (returnsSong.playing()) {
          returnsSong.stop();
        }
        if (miraiTrainSong.playing()) {
          miraiTrainSong.stop();
        }
        yumeSong.play();
      }
    } else if (previousMusic === "ミライトレイン") {
      if (miraiTrainSong.playing()) {
        miraiTrainSong.pause();
      } else {
        if (returnsSong.playing()) {
          returnsSong.stop();
        }
        if (yumeSong.playing()) {
          yumeSong.stop();
        }
        miraiTrainSong.play();
      }
    }
  };

  return (
    <>
      <div className={`header-nav ${isHamburgerOpen ? "open" : ""}`}>
        <div className="header-nav-wrapper">
          <div className="flex flex-col items-center gap-10">
            <div className="flex items-center gap-10">
              <Image
                src={BangDreamLogo}
                alt="BangDreamLogo"
                className="band-dream-logo w-80"
              />
              <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                {datas.menu.map((menu) => {
                  const isMenuActive = menu.name.toLowerCase() === activeMenu;
                  return (
                    <Link
                      href={menu.URL}
                      key={menu.name}
                      className={`nav-header-menu ${
                        isMenuActive ? "active" : ""
                      }`}
                    >
                      <div className="nav-header-menu-container flex items-center gap-6 px-10 py-4">
                        <div className="nav-header-menu-name">{menu.name}</div>
                        <div className="nav-header-menu-japanese-name">
                          {menu.japanese}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-center gap-8">
              <div className="text-[#b92b5d]">OFFICIAL SNS</div>
              <div className="flex items-center justify-center gap-4">
                <Link target="_blank" href="https://twitter.com/bang_dream_gbp">
                  <Image
                    src={TwitterIcon}
                    alt="TwitterIcon"
                    className="sns-icon "
                  />
                </Link>
                <Link target="_blank" href="https://page.line.me/fht6793t">
                  <Image
                    src={LineIcon}
                    alt="LineIcon"
                    className="sns-icon w-[20px]"
                  />
                </Link>
                <Link href="https://www.youtube.com/channel/UCN-bFIdJM0gQlgX7h6LKcZA">
                  <Image
                    src={YoutubeIcon}
                    alt="YoutubeIcon"
                    className="sns-icon "
                  />
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div
        className={`music-player-tracklist_wrapper ${
          isMusicTracklistOpen ? "open" : ""
        }`}
        // className={`music-player-tracklist_wrapper `}
      >
        <div className="music-player-tracklist_container show showed">
          <ul className="music-player-tracklist">
            <li
              onClick={toggleReturnsSongPlay}
              className={`track_item ${
                musicPlaying.title === "Returns" ? "active" : ""
              }`}
            >
              <Link
                className="track_link current"
                id="track-0"
                href="#"
                data-song="0"
              >
                <p className="title">Returns</p>
                <p className="artist">Poppin Party</p>
              </Link>
            </li>
            <li
              onClick={toggleYumeSongPlay}
              className={`track_item ${
                musicPlaying.title === "夢を撃ち抜く瞬間に！" ? "active" : ""
              }`}
            >
              <Link className="track_link" id="track-1" href="#" data-song="1">
                <p className="title">夢を撃ち抜く瞬間に！</p>
                <p className="artist">Poppin Party</p>
              </Link>
            </li>
            <li
              onClick={toggleMiraiTrainMusicPlay}
              className={`track_item ${
                musicPlaying.title === "ミライトレイン" ? "active" : ""
              }`}
            >
              <Link className="track_link" id="track-2" href="#" data-song="2">
                <p className="title">ミライトレイン</p>
                <p className="artist">Poppin Party </p>
              </Link>
            </li>
            {/* <li
              onClick={toggleBokuGaNamaeWoYobuHi}
              className={`track_item ${
                musicPlaying.title === "僕が名前を呼ぶ日" ? "active" : ""
              }`}
            >
              <a className="track_link" id="track-2" href="#" data-song="3">
                <p className="title">僕が名前を呼ぶ日</p>
                <p className="artist">HoneyWorks</p>
              </a>
            </li> */}
            <button
              onClick={handleCloseMusicTracklist}
              className="tracklist_close"
            >
              <div className="close-icon">
                <span></span>
                <span></span>
              </div>
            </button>
          </ul>
        </div>
      </div>

      <div className="music-player-container">
        <button
          onClick={() => setIsMusicContainerOpen(!isMusicContainerOpen)}
          className={`navigation ${isMusicContainerOpen ? "show" : ""}`}
        >
          <span className="nav_show">
            <span
              className={`sw-song ${
                returnsSong?.playing() ||
                yumeSong?.playing() ||
                miraiTrainSong?.playing()
                  ? "on"
                  : ""
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="text">
              <div>VOCAL</div>
              <div>SONG</div>
            </span>
          </span>
          <div className="close-icon">
            <span></span>
            <span></span>
          </div>
        </button>

        <div
          className={`music-player-navigation ${
            isMusicContainerOpen ? "show" : ""
          }`}
        >
          <div className="music-player-menu">
            <div className="flex h-[100%] items-center justify-around">
              <div className="flex w-[250px] items-center ">
                <button className="tracklist_open">
                  <Image
                    onClick={handleOpenMusicTracklist}
                    src={MusicTracker}
                    className="tracklist"
                    alt="MusicTracker"
                  />
                </button>
                <div className="music-player_title">
                  <div className="tracking-[1px]">{musicPlaying.title}</div>
                  <div className="text-xs">{musicPlaying.artist}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  onClick={handlePreviousMusic}
                  src={MusicIcon}
                  alt="MusicPrevious"
                  className="rotate-180 cursor-pointer"
                />
                {musicPlaying.title === "Returns" ? (
                  <Image
                    onClick={toggleReturnsSongPlay}
                    src={returnsSong?.playing() ? PauseIcon : PlayIcon}
                    alt={returnsSong?.playing() ? "PauseIcon" : "PlayIcon"}
                    className="w-10 cursor-pointer"
                  />
                ) : musicPlaying.title === "夢を撃ち抜く瞬間に！" ? (
                  <Image
                    onClick={toggleYumeSongPlay}
                    src={yumeSong.playing() ? PauseIcon : PlayIcon}
                    alt={yumeSong.playing() ? "PauseIcon" : "PlayIcon"}
                    className="w-10 cursor-pointer"
                  />
                ) : musicPlaying.title === "ミライトレイン" ? (
                  <Image
                    onClick={toggleMiraiTrainMusicPlay}
                    src={miraiTrainSong.playing() ? PauseIcon : PlayIcon}
                    alt={miraiTrainSong.playing() ? "PauseIcon" : "PlayIcon"}
                    className="w-10 cursor-pointer"
                  />
                ) : null}

                <Image
                  onClick={handleNextMusic}
                  src={MusicIcon}
                  alt="MusicIcon"
                  className="rotate-360 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={sideLeftTextRef}
        className="side-left-text sm:hidden md:hidden lg:block"
      >
        BANG DREAM ! GIRLS BAND PARTY !
      </div>
      <div
        ref={sideRightRef}
        className="side-right   hidden items-center gap-[40px] lg:flex"
      >
        <div className="side-right-text">SHARE</div>
        <Link target="_blank" href="https://twitter.com/bang_dream_gbp">
          <Image className="sns-icon" src={TwitterIcon} alt="TwitterIcon" />
        </Link>
        <Link target="_blank" href="https://page.line.me/fht6793t">
          <Image className="sns-icon w-[20px]" src={LineIcon} alt="LineIcon" />
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/channel/UCN-bFIdJM0gQlgX7h6LKcZA"
        >
          <Image
            className="sns-icon w-[20px]"
            src={YoutubeIcon}
            alt="YoutubeIcon"
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/bang_dream_gbp_official/"
        >
          <Image
            className="sns-icon w-[20px]"
            src={InstagramIcon}
            alt="InstagramIcon"
          />
        </Link>
      </div>
      <div className="m-0 flex justify-end lg:m-4">
        <div
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          className={`header-hamburger ${isHamburgerOpen ? "open" : ""}`}
        >
          <button className="header-hamburger_button ">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <Navbar activeMenu={activeMenu} />
      <div>{children}</div>
      <div
        ref={footerRef}
        className={`footer pt-[140px] ${
          activeMenu === "" || activeMenu == undefined ? "bg-[#fdfefe]" : ""
        }`}
      >
        <div
          ref={footerInnerRef}
          className="footer_inner relative h-[500px] pt-[136px]"
        >
          <div className=" h-[500px] bg-[#b85175]">
            <div className="footer-box relative top-[-285px] m-auto flex w-auto max-w-5xl items-center justify-around gap-16 bg-white bg-gradient-to-r from-[#b4bff2] to-[#f49dc6] p-20">
              <div className="flex items-center justify-center gap-8 border-r-white ">
                <Image
                  src={BangDreamAppIcon}
                  alt="BangDreamAppIcon"
                  className="rounded-3xl"
                  width={130}
                />
                <div className="flex flex-col items-start gap-3">
                  <div className="flex items-center justify-center gap-1">
                    <div className="relative w-[80px] text-xs text-[#6c5173] after:absolute after:right-[12px] after:top-[5px] after:h-[4px] after:w-[4px] after:rounded-full after:bg-white after:content-['']">
                      タイトル
                    </div>
                    <div className="w-[80px] text-xs text-[#6c5173]">
                      バンドリ
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="relative w-[80px] text-xs text-[#6c5173] after:absolute after:right-[12px] after:top-[5px] after:h-[4px] after:w-[4px] after:rounded-full after:bg-white after:content-['']">
                      ジャンル
                    </div>
                    <div className="w-[80px] text-xs text-[#6c5173]">
                      リズム
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center justify-center gap-4">
                  <Link
                    target="_blank"
                    href="https://app.adjust.com/xf8xmuy?redirect=https%3A%2F%2Fapps.apple.com%2Fjp%2Fapp%2Fid1195834442"
                  >
                    <Image src={AppStore} alt="AppStore" width={150} />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://app.adjust.com/i6ek911?redirect=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fhl%3Dja%26id%3Djp.co.craftegg.band"
                  >
                    <Image src={PlayStore} alt="PlayStore" width={150} />
                  </Link>
                </div>
                <div className="flex flex-col">
                  <div className="text-[9px] text-[#6c5173]">
                    ※Android、Google PlayおよびGoogle Playロゴは、Google
                    LLCの商標です。
                  </div>
                  <div className="text-[9px] text-[#6c5173]">
                    ※iPhone、iTunesおよびApp
                    Storeは、米国およびその他の国々で登録されたApple
                    Inc.の商標です。
                  </div>
                </div>
              </div>
            </div>
            <div className="relative top-[-300px] z-[1] mx-auto w-auto max-w-5xl">
              <div className="grid grid-cols-2 gap-8">
                <Link
                  href={`/character/${addHyphen(
                    randomBangDreamBandMember.bandMembers.band,
                  )}/${addHyphen(randomBangDreamBandMember.bandMembers.name)}`}
                  className="member__footer w-auto"
                >
                  <div>
                    <CldImage
                      width={1100}
                      height={100}
                      src={
                        randomBangDreamBandMember.bandMembers.image[0]
                          .outfitSeasonThree[0]
                      }
                      alt="kasumi_season_3outfit"
                      className="member-image__footer z-50"
                    />
                  </div>
                  <div>
                    <CldImage
                      className="absolute top-[140px] z-[-2] w-[160px] mix-blend-multiply"
                      src={randomBangDreamBandMember.logo}
                      width={300}
                      height={300}
                      alt="band_logo"
                    />
                  </div>
                  <div className="member-info__footer">
                    {/* <div className="member-name__footer">
                      {randomBangDreamBandMember.bandMembers.name}
                    </div>
                    <div className="member-japanese-name__footer">
                      {randomBangDreamBandMember.bandMembers.japaneseName}
                    </div> */}
                    <div className="footer-chara_more flex items-center gap-10">
                      <div className="text-[14px] text-white">MORE</div>
                      <div className="footer-chara_more__dot"></div>
                    </div>
                  </div>
                </Link>
                <div className="relative top-[120px] flex flex-col gap-16">
                  <div className="header-nav-wrapper">
                    <div className="flex  flex-col gap-10">
                      <div className="flex items-center gap-10">
                        <div className="grid grid-cols-2 gap-x-[0.2rem] gap-y-[0.2rem]">
                          {datas.menu.map((menu) => {
                            const isMenuActive =
                              menu.name.toLowerCase() === activeMenu;
                            return (
                              <Link
                                href={menu.URL}
                                key={menu.name}
                                className={`nav-header-menu_footer ${
                                  isMenuActive ? "active" : ""
                                }`}
                              >
                                <div className="nav-header-menu-container flex items-center gap-6 px-10 py-2">
                                  <div className="nav-header-menu-name_footer text-[12px] text-white">
                                    {menu.name}
                                  </div>
                                  <div className="nav-header-menu-japanese-name_footer text-[9px] text-[#ffccde]">
                                    {menu.japanese}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="relative flex items-center gap-4 py-[30px] ">
                    <div className="text-[14px] text-white">
                      OFFICIAL <br /> SNS
                    </div>
                    <div className="flex items-center gap-4">
                      <Image
                        src={bgButtonTwitter}
                        alt="bgButtonTwitter"
                        width={100}
                        className="after:bg-red-600 after: relative after:absolute after:h-10 after:w-10  after:content-['']"
                      />
                      <div className="absolute left-[85px] flex items-center justify-center gap-2">
                        {/* <Link href=""></Link> */}
                        <Image
                          src={twitterWhiteIcon}
                          alt="twitterWhiteIcon"
                          width={20}
                          className="relative flex items-center justify-center"
                        />
                        <div className="text-[12px] text-white">Twitter</div>
                      </div>
                      <Image
                        src={bgButtonYoutube}
                        alt="bgButtonYoutube"
                        width={100}
                        className="relative flex items-center justify-center"
                      />
                      <div className="absolute left-[202px] flex items-center justify-center gap-2">
                        <Image
                          src={youtubeWhiteIcon}
                          alt="youtubeWhiteIcon"
                          width={20}
                          className="relative flex items-center justify-center"
                        />
                        <div className="text-[12px] text-white">Youtube</div>
                      </div>
                      <Image
                        src={bgButtonLine}
                        alt="bgButtonLine"
                        width={100}
                        className="relative flex items-center justify-center"
                      />
                      <div className="absolute left-[327px] flex items-center justify-center gap-2">
                        <Image
                          src={lineWhiteIcon}
                          alt="lineWhiteIcon"
                          width={20}
                          className="relative flex items-center justify-center"
                        />
                        <div className="text-[12px] text-white">Line</div>
                      </div>
                    </div>
                    <span className="absolute top-[-3px] h-[2px] w-[100%] bg-[#ad4167] before:absolute before:right-[-6px] before:top-[-0.5px] before:h-[4px] before:w-[4px] before:rounded-full before:bg-[#ad4167]  after:absolute after:left-[-6px] after:top-[-0.5px] after:h-[4px] after:w-[4px] after:rounded-full after:bg-[#ad4167]"></span>
                    <span className="absolute top-[108px] h-[2px] w-[100%] bg-[#ad4167] before:absolute before:right-[-6px] before:top-[-0.5px] before:h-[4px] before:w-[4px] before:rounded-full before:bg-[#ad4167]  after:absolute after:left-[-6px] after:top-[-0.5px] after:h-[4px] after:w-[4px] after:rounded-full after:bg-[#ad4167]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 h-[250px] bg-[#302a2f]">
            <div className="ml-10 flex items-center justify-around gap-4">
              <div className="flex items-center gap-4">
                <FooterPolicy policy="Site Policy" />
                <FooterPolicy policy="Privacy Policy" />
                <FooterPolicy policy="動画等配信ガイドライン" />
                <FooterPolicy policy="二次創作ガイドライン" />
              </div>
              <div className="mt-10 text-[11px] text-[#696068]">
                ©BanG Dream! Project ©Craft Egg Inc. ©bushiroad All Rights
                Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutPage;
