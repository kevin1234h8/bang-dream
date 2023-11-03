"use client";

import React, { useEffect, useState } from "react";
import PageTitle from "../PageTitle";
import {
  addHyphen,
  capitalizeFirstLetter,
  convertToUppercase,
} from "@/utils/functionsUtils";
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
  const specialSNSIndex: number[] = [0, 1, 2, 6, 7, 3, 4, 5];
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
      <div className="max-w-4xl mx-auto w-full">
        <SubTitle title={"Twitterアイコン"} />
        <div className="flex items-center justify-center gap-4 mb-[40px]">
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
              sns.memberDetails
            );

            return (
              <div key={index} className="special-sns-band-container">
                <div
                  id={`band-${addHyphen(sns.band)}`}
                  className="special-sns-band-name mt-[30px] mb-[40px] py-2"
                >
                  {editBandName(sns.band)}
                </div>
                <div className="flex items-center justify-center gap-[40px]">
                  {specialSNSMembers.map((member, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center special-sns-band-member justify-center"
                      >
                        <Link href={member.image} download>
                          <Image
                            className="rounded-full special-sns-band-member-image"
                            alt={member.image}
                            src={member.image}
                            width={150}
                            height={150}
                          />
                        </Link>
                        <div className="mt-[11px]  special-sns-japanese-name">
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
          {specialSNSHeader.map((snsHeader) => {
            return (
              <div className="flex flex-col gap-8">
                <div className="special-sns-band-name  mt-[30px] mb-[40px] py-2">
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
