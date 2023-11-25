import Navbar from "@/components/Navbar";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import SpecialDescription from "@/components/SpecialDescription";

const page = () => {
  const specials = [
    {
      type: "sns",
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/special/thumb_sns.jpg",
      name: "SNSアイコン&ヘッダー",
    },
    {
      type: "movie",
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/special/thumb_movie.jpg",
      name: "ムービー",
    },
    {
      type: "manga",
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/special/thumb_manga.jpg",
      name: "4コマ漫画",
    },
    {
      type: "comic",
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/special/thumb_comic.jpg",
      name: "コミック",
    },
    {
      type: "streamer",
      image:
        "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/special/thumb_streamer.jpg",
      name: "配信＆動画投稿サポートプログラム",
    },
  ];

  return (
    <div className="mx-auto w-auto max-w-5xl">
      <div className="mb-24 grid grid-cols-2 grid-rows-2 gap-x-[50px] gap-y-[40px]">
        {specials.map((special, index) => {
          return (
            <Link
              key={index}
              href={`/special/${special.type}`}
              className=" sw-special-archive-container flex flex-col gap-4"
            >
              <div className="gap-2  rounded-2xl p-4 shadow-lg ">
                <Image
                  alt=""
                  width={700}
                  height={700}
                  className="sw-special-archive-image rounded-2xl"
                  src={special.image}
                />
              </div>
              <SpecialDescription description={special.name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
