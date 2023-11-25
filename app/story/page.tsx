import PageTitle from "@/components/PageTitle";
import React from "react";
import BgDecoCatch from "@/assets/bg_deco_catch.png";
import Image from "next/image";
import BgDecoTitle from "@/assets/bg_deco_title.png";
import BgDecoTitleTriangle from "@/assets/bg_deco_title_triangle.png";
import BandStory from "@/components/BandStory";
import { getBandStories } from "@/lib/Story";
const page = async () => {
  const bandStoryDatas = await getBandStories();
  const [bandStories] = await Promise.all([bandStoryDatas]);
  return (
    <div className="m-auto w-auto max-w-7xl">
      <PageTitle title="STORY" japaneseTitle="ストーリー" />
      <div className="m-auto my-8 flex w-auto max-w-5xl flex-col items-center gap-8">
        <Image src={BgDecoCatch} alt="BgDecoCatch" />
        <div className="catch_inner page-title text-[48px] leading-relaxed">
          <div>
            <span className="main-catch_inner">香澄</span>たちが進む、
            <span className="main-catch_inner">3年目</span>の物語
          </div>
        </div>
        <Image className="rotate-180" src={BgDecoCatch} alt="BgDecoCatch" />
        <div className="w-[45rem]">
          幼い頃、星空を見上げた時に聴こえた「星の鼓動」のように、
          キラキラでドキドキなことをずっと探していた、香澄。
          高校に入学したばかりのある日、
          古びた質屋の蔵で出会った「星型のギター」に初めてのときめきを感じ、
          ずっと閉じ込めてきた気持ちが走りだす。
          同じように、輝ける場所を探していた4人の少女とともに。
          ひとりじゃ出せなかった音だって、5人ならきっと奏でられる。
        </div>
        <div className="relative mt-12">
          <Image
            src={
              "https://heaven-burns-red.com/assets/images/pc/common/bg_deco_title.png"
            }
            alt="BgDecoTitle"
            width={900}
            height={900}
            className=""
          />
          <div className="absolute left-[45%] top-0 flex  items-center justify-center bg-center text-xl font-medium  tracking-[0.5rem] ">
            用語集
          </div>

          <Image
            src={
              "https://heaven-burns-red.com/assets/images/pc/story/bg_title_words.png"
            }
            alt="WORDS"
            width={200}
            height={200}
            className="absolute left-[38%] top-0  bg-center"
          />
        </div>
        <div className="mb-12">
          <Image
            src={
              "https://heaven-burns-red.com/assets/images/common/bg_deco_title_triangle.png"
            }
            alt="bg_deco_title_triangle"
            width={20}
            height={100}
          />
        </div>
        <div className="mb-12 flex flex-col gap-20">
          {bandStories?.map((bandStory, index) => {
            return (
              <BandStory
                key={index}
                display={index % 2 !== 0 ? "flex-row-reverse" : ""}
                src={bandStory.src}
                title={bandStory.title}
                descriptions={bandStory.description}
                bandName={bandStory.bandName}
                url={bandStory.url}
                image={bandStory.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
