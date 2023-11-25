"use client";

import React, { useEffect, useState } from "react";
import PageTitle from "../PageTitle";
import {
  addHyphen,
  capitalizeFirstLetter,
  convertToUppercase,
} from "@/utils/stringUtils";
import {
  addJapaneseNameToMembers,
  changePoppinPartyBandName,
  editBandName,
} from "@/utils/bandNameUtils";
import data from "@/data/band";
import Image from "next/image";
import { SocialMedia, SpecialSNS } from "@/type";
import ReactScroll from "react-scroll";
import Link from "next/link";
import Index from "../Index";
import SwShare from "../SwShare";
import { usePathname } from "next/navigation";
import SubTitle from "../SubTitle";
import SpecialSubTitle from "../SpecialSubTitle";
import SpecialPagination from "../SpecialPagination";

type SpecialSNSPage = {
  specialSNS: SpecialSNS[];
  socialMedias: SocialMedia[];
};

const SpecialSNSPage = ({ specialSNS }: SpecialSNSPage) => {
  const specialSNSIndex: number[] = [4, 1, 2, 3, 4, 5, 6, 7];
  const specialSNSHeader = [
    {
      band: "poppin party",
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/special/sns/snsHeader_1.jpg",
    },
    {
      band: "afterglow",
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/special/sns/snsHeader_2.jpg",
    },
    {
      band: "pastel palettes",
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/special/sns/snsHeader_3.jpg",
    },
    {
      band: "roselia",
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/special/sns/snsHeader_4.jpg",
    },
    {
      band: "hello happy world",
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/special/sns/snsHeader_5.jpg",
    },
    {
      band: "morfonica",
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/special/sns/snsHeader_6.jpg",
    },
    {
      band: "raise a suilen",
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/special/sns/snsHeader_7.jpg",
    },
    {
      band: "mygo",
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/special/sns/snsHeader_8.jpg",
    },
  ];

  return (
    <div className=" mb-24">
      <div className="mx-auto w-full max-w-4xl">
        <SubTitle title={"Twitterアイコン"} />
        <div className="mb-[40px] flex items-center justify-center gap-4">
          {data.subNavs.map((subNav, index: number) => {
            return (
              <ReactScroll.Link
                key={index}
                to={subNav.name}
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
              >
                <div className="yakuhanjp special-sns-band">{subNav.name}</div>
              </ReactScroll.Link>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-4">
          {data.bandList.map((band, index: number) => {
            return (
              <ReactScroll.Link
                key={index}
                to={`band-${addHyphen(band.code)}`}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
              >
                <div className="yakuhanjp special-sns-band">
                  {band.bandName}
                </div>
              </ReactScroll.Link>
            );
          })}
        </div>
        <blockquote className="">
          画像をタップ/クリックして、保存してご使用ください。
        </blockquote>
        <SpecialSubTitle specialSubTitle="SNSアイコン" id="SNSアイコン" />
        <div className="flex flex-col">
          {specialSNSIndex.map((index) => {
            const sns = specialSNS[index];
            const specialSNSMembers = addJapaneseNameToMembers(
              sns.members,
              sns.memberDetails,
            );

            return (
              <div key={index} className="special-sns-band-container">
                <div
                  id={`band-${addHyphen(sns.band)}`}
                  className="special-sns-band-name mb-[40px] mt-[30px] py-2"
                >
                  {editBandName(sns.band)}
                </div>
                <div className="flex items-center justify-center gap-[40px]">
                  {specialSNSMembers.map((member, index: number) => {
                    return (
                      <div
                        key={index}
                        className="special-sns-band-member flex flex-col items-center justify-center"
                      >
                        <Link href={member.image} download>
                          <Image
                            className="special-sns-band-member-image rounded-full"
                            alt={member.image}
                            src={member.image}
                            width={150}
                            height={150}
                          />
                        </Link>
                        <div className="special-sns-japanese-name  mt-[11px]">
                          {member.japaneseName}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <SpecialSubTitle specialSubTitle="SNSヘッダー" id="SNSヘッダー" />
        <div className="flex flex-col gap-8">
          {specialSNSHeader.map((snsHeader, index) => {
            return (
              <div key={index} className="flex flex-col gap-8">
                <div className="special-sns-band-name  mb-[40px] mt-[30px] py-2">
                  {editBandName(snsHeader.band)}
                </div>
                <Image
                  src={snsHeader.image}
                  alt={snsHeader.band}
                  width={1000}
                  height={1000}
                />
              </div>
            );
          })}
        </div>
        {/* <SpecialPagination socialMedias={socialMedias} pathname={pathname} /> */}
      </div>
    </div>
  );
};

export default SpecialSNSPage;
