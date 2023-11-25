"use client";

import React, { useEffect } from "react";
import PageTitle from "../PageTitle";
import SpecialSubTitle from "../SpecialSubTitle";
import Image from "next/image";
import YoutubeIframeLoader from "youtube-iframe";
import { getYoutubeVideoId } from "@/utils/youtubeUtils";
import Link from "next/link";
const SystemPage = () => {
  const systems = [
    {
      type: "リズムゲーム",
      typeName: "Rhythm Game",
      details: [
        {
          url: "https://www.youtube.com/embed/riVJ2iokj2k",
          urlDescriptions: [
            "人気楽曲で遊べるリズムゲーム!",
            "有名カバー楽曲や",
            "オリジナルソングが盛りだくさん!",
          ],
          type: "video",
          description: "",
        },
        {
          url: "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/pc/system/img_rhythm-game.png",
          urlDescriptions: [],
          type: "image",
          description:
            "収録楽曲は500曲以上！ゲームオリジナル楽曲に加え、有名カバー楽曲も多数収録！",
        },
      ],
    },
    {
      type: "ストーリー",
      typeName: "Story",
      details: [
        {
          url: "https://www.youtube.com/embed/ChJxn8b4P6E",
          urlDescriptions: [
            "全編フルボイスのストーリー!",
            "Live2Dの個性豊かなアニメーションも♪",
          ],
          type: "video",
          description: "",
        },
        {
          url: "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/system/img_story_1.jpg",
          urlDescriptions: [
            "シーズンごとに学年が上がり、",
            "キャラクターたちも次のステージへ!",
          ],
          type: "image",
          description:
            "シーズンが変わると、学年が一つ上がったり、大学に進学したり...成長していくキャラクターたちの物語を楽しめます！",
        },
        {
          url: "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/system/img_story_2.jpg",
          urlDescriptions: ["キャラクターたちの日常を楽しもう♪"],
          type: "image",
          description:
            "ゲーム内の様々なところで、キャラクターたちの日常を見ることができます！",
        },
      ],
    },
  ];

  useEffect(() => {
    systems.map((system) => {
      return system.details.map((detail) => {
        if (detail.type === "video") {
          YoutubeIframeLoader.load(function (YT) {
            new YT.Player(`youtube-${getYoutubeVideoId(detail.url)}`, {
              height: "100%",
              width: "100%",
              videoId: getYoutubeVideoId(detail.url),
              playerVars: {
                autoplay: 1,
                loop: 1,
                mute: 1,
                modestbranding: 1,
              },
            });
          });
        }
      });
    });
  }, [systems]);

  return (
    <div>
      <div className="max-w-7xl mx-auto w-auto">
        <PageTitle title="SYSTEM" japaneseTitle="システム" />
      </div>
      <div className="max-w-3xl mx-auto w-auto mb-24">
        <div className="flex flex-col gap-8">
          {systems.map((system) => {
            return (
              <div>
                <SpecialSubTitle specialSubTitle={system.type} />
                <div className="flex items-center justify-center flex-col gap-8">
                  {system.details.map((detail) => {
                    return (
                      <div className="relative flex flex-col gap-4 items-center">
                        <div>
                          {detail.type === "video" ? (
                            <div className="w-[750px] h-[400px] overflow-hidden">
                              <div
                                id={`youtube-${getYoutubeVideoId(detail.url)}`}
                                className="w-[700px] h-[400px] pointer-events-none scale-125 rounded-lg"
                              ></div>
                            </div>
                          ) : (
                            <Image
                              alt={detail.url}
                              src={detail.url}
                              width={1100}
                              height={1100}
                              className="w-full"
                            />
                          )}
                        </div>
                        <div className="flex items-center flex-col gap-2">
                          {detail.urlDescriptions.map((urlDescription) => {
                            return (
                              <div className="flex items-center justify-center flex-col gap-4 relative top-[-50px]">
                                <div>
                                  <div className={`small text-[2.2rem] w-auto`}>
                                    {urlDescription}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="text-center yakuhanjp text-sm">
                          {detail.description}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <Link href={"/guide"}>
            <Image
              width={1100}
              height={1100}
              src="https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/system/btn_guide.png"
              alt=""
              className="hover:scale-110 duration-[0.4s] ease-in-out my-4"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SystemPage;
