"use client";

import ThumbnailPlayIcon from "@/assets/thumbnail_play.svg";
import data from "@/data/band";
import useOutsideClick from "@/hooks/useOutsideClick";
import { BandMember, BangDreamBand, SocialMedia } from "@/type";
import {
  changePoppinPartyBandName,
  getPreviousAndNextBandName,
} from "@/utils/bandNameUtils";
import {
  addHyphen,
  arrayToStringWithCommas,
  convertToUppercase,
  removeHyphens,
} from "@/utils/stringUtils";
import {
  closeIframe,
  getYoutubeVideoId,
  onPlayerReady,
} from "@/utils/youtubeUtils";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import YouTubeIframeLoader from "youtube-iframe";
import BangDreamMemberProfile from "./BangDreamMemberProfile";
import Hamburger from "./Hamburger";
import Index from "./Index";
import SwShare from "./SwShare";

type CharacterProps = {
  bangDreamMember: BandMember;
  socialMedias: SocialMedia[];
  bangDreamBand: BangDreamBand[];
  characterName: string;
  bandName: string;
};

const Character = ({
  bandName,
  bangDreamMember,
  socialMedias,
  bangDreamBand,
  characterName,
}: CharacterProps) => {
  const [bangDreamSeason, setBangDreamSeasonNumber] = useState<number>(3);
  const handleBangDreamMemberSeasonOutfit = (season: number) => {
    setBangDreamSeasonNumber(season);
  };
  const [isIFrameOpen, setIsIFrameOpen] = useState<boolean>(false);

  const handleOpenIFrame = () => {
    setIsIFrameOpen(!isIFrameOpen);
  };

  useEffect(() => {
    if (bangDreamMember.image[0].outfitSeasonOne.length > 0) {
      setBangDreamSeasonNumber(3);
    } else if (bangDreamMember.image[0].outfitSeasonTwo.length > 0) {
      setBangDreamSeasonNumber(3);
    } else if (bangDreamMember.image[0].outfitSeasonThree.length > 0) {
      setBangDreamSeasonNumber(3);
    }
  }, [
    bangDreamMember.image[0].outfitSeasonOne,
    bangDreamMember.image[0].outfitSeasonTwo,
    bangDreamMember.image[0].outfitSeasonThree,
  ]);

  if (bandName === "poppin-party") {
    return (bandName = changePoppinPartyBandName(removeHyphens(bandName)));
  }

  const { previousBandName, nextBandName } = getPreviousAndNextBandName(
    bandName,
    data.bandList,
  );

  const iFrameWrapperRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(iFrameWrapperRef, () => {
    closeIframe(setIsIFrameOpen, bangDreamBandIframeVideo);
  });

  let bangDreamBandIframeVideo: any = null;

  useEffect(() => {
    if (isIFrameOpen) {
      YouTubeIframeLoader.load(function (YT) {
        bangDreamBandIframeVideo = new YT.Player(
          `youtube-${getYoutubeVideoId(bangDreamMember.introductionMovie)}`,
          {
            height: "100%",
            width: "100%",
            videoId: getYoutubeVideoId(bangDreamMember.introductionMovie),
            playerVars: {
              autoplay: 1,
            },
            events: {
              onReady: onPlayerReady,
            },
          },
        );
      });
    }
  }, [isIFrameOpen]);

  return (
    <div>
      {{ isIFrameOpen } ? <Hamburger state={isIFrameOpen} /> : null}
      <div className="mb-4 flex items-end justify-center ">
        {bangDreamMember.image[0].outfitSeasonOne.length > 0 ? (
          <div
            className={`season ${bangDreamSeason === 1 ? "active" : ""}`}
            onClick={() => handleBangDreamMemberSeasonOutfit(1)}
          >
            シーズン1
          </div>
        ) : null}
        {bangDreamMember.image[0].outfitSeasonTwo.length > 0 ? (
          <div
            className={`season ${bangDreamSeason === 2 ? "active" : ""}`}
            onClick={() => handleBangDreamMemberSeasonOutfit(2)}
          >
            シーズン2
          </div>
        ) : null}
        {bangDreamMember.image[0].outfitSeasonThree.length > 0 ? (
          <div
            className={`season ${bangDreamSeason === 3 ? "active" : ""}`}
            onClick={() => handleBangDreamMemberSeasonOutfit(3)}
          >
            シーズン3
          </div>
        ) : null}
      </div>
      <div className="member-container">
        <div className="flex items-start">
          {/* <div className="vertical-writing_title">Toyama Kasumi</div> */}
          <div className="w-1/2">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {bangDreamSeason === 1 &&
              bangDreamMember.image[0].outfitSeasonOne.length > 0 ? (
                <>
                  {bangDreamMember.image[0].outfitSeasonOne.map(
                    (seasonOneOutfit: string) => {
                      return (
                        <SwiperSlide>
                          <CldImage
                            width="1100"
                            className="w-full"
                            height="1400"
                            src={seasonOneOutfit}
                            sizes="100%"
                            alt="Description of my image"
                          />
                        </SwiperSlide>
                      );
                    },
                  )}
                </>
              ) : bangDreamSeason === 2 ? (
                <>
                  {bangDreamMember.image[0].outfitSeasonTwo.map(
                    (seasonTwoOutfit: string) => {
                      return (
                        <SwiperSlide>
                          <CldImage
                            width="1100"
                            height="1400"
                            src={seasonTwoOutfit}
                            sizes="100vw"
                            alt="Description of my image"
                          />
                        </SwiperSlide>
                      );
                    },
                  )}
                </>
              ) : (
                <>
                  {bangDreamMember.image[0].outfitSeasonThree.map(
                    (seasonThreeOutfit: string) => {
                      return (
                        <SwiperSlide>
                          <CldImage
                            width="1100"
                            height="1400"
                            src={seasonThreeOutfit}
                            sizes="100vw"
                            alt="Description of my image"
                          />
                        </SwiperSlide>
                      );
                    },
                  )}
                </>
              )}
            </Swiper>
          </div>

          <div className="relative top-[110px] flex flex-col px-8 md:pl-8 md:pr-20 lg:px-8 ">
            <div className="flex items-center gap-4">
              <div className="relative bg-white p-4">
                <div className="flex items-center gap-2  ">
                  <div className="text-[12px] text-[#b92b5d]">
                    {bangDreamMember.band}
                  </div>
                  <div className="text-[12px] text-[#b92b5d]">
                    {bangDreamMember.role}
                  </div>
                </div>
                <div>
                  <div className="text-[42px] text-[#b92b5d]">
                    {bangDreamMember.japaneseName}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="w-[10px] text-[10px] text-[#b92b5d]">CV</div>
                  <div>{bangDreamMember.cv}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[10px] text-[10px] text-[#b92b5d]">Vo.</div>
                  <div>{bangDreamMember.cv}</div>
                </div>
              </div>
            </div>

            <div className=" member-japanese-name-hiragana text-[12px] text-[#b92b5d] ">
              {bangDreamMember.japaneseNameHiragana}
            </div>
            <div className="flex w-[100px] items-center justify-center bg-[#b92b5d] p-1 text-[12px] text-white">
              コード
            </div>
            <div className="my-4 text-xl">キラキラドキドキ</div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex w-[100px] items-center justify-center bg-[#b92b5d] p-1 text-[12px] text-white">
                  カード
                </div>
                <div className="w-[250px] ">
                  <CldImage
                    width="1334"
                    height="1002"
                    src={bangDreamMember.card}
                    sizes="100%"
                    alt="Description of my image"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex w-[100px] items-center justify-center bg-[#b92b5d] p-1 text-[12px] text-white">
                  ムービー
                </div>
                <figure className="thumbnail-container w-[250px] overflow-hidden">
                  <CldImage
                    width="1334"
                    height="1002"
                    src={bangDreamMember.thumbnail}
                    sizes="100%"
                    alt="Description of my image"
                    className="thumbnail object-cover"
                  />
                  <div className="thumbnail-play-container">
                    <Image
                      src={ThumbnailPlayIcon}
                      width={30}
                      height={30}
                      className="thumbnail-play"
                      alt="thumbnail_play"
                      onClick={handleOpenIFrame}
                    />
                  </div>

                  {/* <iframe src={bangDreamMember.introductionMovie}></iframe> */}
                </figure>
              </div>
            </div>
            <div className="my-4 grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-2">
              <BangDreamMemberProfile title="一人称" description="私" />
              <BangDreamMemberProfile
                title="学校"
                description={bangDreamMember.school}
              />
              <BangDreamMemberProfile
                title="身長"
                description={bangDreamMember.height + "cm"}
              />
              <BangDreamMemberProfile
                title="生月日"
                description={bangDreamMember.birthday}
              />
              <BangDreamMemberProfile
                title="学年"
                description={bangDreamMember.schoolYear}
              />
              <BangDreamMemberProfile
                title="星座"
                description={bangDreamMember.sign}
              />
              <BangDreamMemberProfile
                title="好きな食べ物"
                description={arrayToStringWithCommas(
                  bangDreamMember.favoriteFood,
                )}
              />
              <BangDreamMemberProfile
                title="嫌いな食べ物"
                description={arrayToStringWithCommas(bangDreamMember.hatedFood)}
              />
              <BangDreamMemberProfile
                title="趣味"
                description={arrayToStringWithCommas(bangDreamMember.hobby)}
              />
            </div>
            <div className="bg-white px-4 py-2 text-xs">
              {bangDreamMember.description}
            </div>
            <div className="my-8 flex flex-row justify-end gap-4">
              {/* <div className="flex items-center  gap-4">
                <div className="row-bullet-text text-[14px]">SHARE</div>
                {socialMedias.map((socialMedia) => {
                  return (
                    <div>
                      <Link href={socialMedia.redirectUrl}>
                        <CldImage
                          width={1200}
                          height={1000}
                          className="w-[20px]"
                          src={socialMedia.image}
                          alt={socialMedia.sns}
                        ></CldImage>
                      </Link>
                    </div>
                  );
                })}
              </div> */}
              <SwShare socialMedias={socialMedias} />
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="chara-list-container mx-auto my-[5rem] mt-[8rem] w-[1500px] max-w-full">
        <div className="flex items-center justify-around ">
          <div className="char-list_prev flex items-center gap-4">
            <div className="chara-list-dot_left"></div>
            <div className="text-[#b92b5d]">
              <a href={`/character${previousBandName?.url}`}>
                {previousBandName?.bandName}
              </a>
            </div>
          </div>
          <div>
            <div className="chara-list flex items-center justify-center gap-2">
              {bangDreamBand.map((band, index) => {
                return (
                  <Link
                    href={`/character/${addHyphen(
                      band.bandMembers.band,
                    )}/${addHyphen(band.bandMembers.name)}`}
                    key={index}
                    className={`chara-list_detail h-[140px] w-[140px] overflow-hidden ${
                      band.bandMembers.name === removeHyphens(characterName)
                        ? "active"
                        : ""
                    }`}
                  >
                    <div className="w-[300px]">
                      <CldImage
                        width="1100"
                        className="chara-list_image w-full"
                        height="1400"
                        src={band.bandMembers.image[0].outfitSeasonThree[0]}
                        sizes="100%"
                        alt="Description of my image"
                      />
                      <div className="chara-list_band">
                        {convertToUppercase(band.bandMembers.band)}
                      </div>
                    </div>
                  </Link>
                );
              })}
              <div></div>
            </div>
          </div>
          <div className="char-list_prev flex items-center gap-4">
            <div className="text-[#b92b5d]">
              <Link href={`/character${nextBandName?.url}`}>
                {nextBandName?.bandName}
              </Link>
            </div>
            <div className="chara-list-dot_right"></div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/* <Link
            href="/character"
            className="flex items-center gap-3 index-wrapper mt-8"
          >
            <div className="bg-[#ffccde] p-3 rounded-full  ">
              <Image
                src={IndexImage}
                width={10}
                height={10}
                alt="IndexImage"
                className="index-image"
              />
            </div>
            <div className="text-[#b92b5d]">INDEX</div>
          </Link> */}
          <Index redirectUrl="/character" marginTop="mt-8" />
        </div>
      </div>
      <div>{getYoutubeVideoId(bangDreamMember.introductionMovie)}</div>
      <div
        // onClick={(e: any) => {
        //   if (e.target.classname === "iframe-wrapper") {
        //     setIsIFrameOpen(false);
        //   }
        // }}
        className="iframe-wrapper"
        // ref={iFrameWrapperRef}
      >
        <div
          className={`fixed bg-[rgba(0,0,0,0.3)] ${
            isIFrameOpen ? "flex" : "hidden"
          } i-frame inset-0 m-0 h-full items-center justify-center  `}
        >
          <div
            ref={iFrameWrapperRef}
            className="h-[75%] w-[75%] "
            onClick={(e) => e.stopPropagation()}
          >
            <div
              id={`youtube-${getYoutubeVideoId(
                bangDreamMember.introductionMovie,
              )}`}
            ></div>
          </div>

          {/* <iframe
            src={bangDreamMember.introductionMovie}
            className="w-[80%] h-[80%] "
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Character;
