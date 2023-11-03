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
    <div className="max-w-5xl mx-auto w-auto">
      <div className="grid grid-cols-2 grid-rows-2 gap-x-[50px] gap-y-[40px] mb-24">
        {specials.map((special) => {
          return (
            <Link
              href={`/special/${special.type}`}
              className=" flex flex-col gap-4 sw-special-archive-container"
            >
              <div className="p-4  gap-2 shadow-lg rounded-2xl ">
                <Image
                  alt=""
                  width={700}
                  height={700}
                  className="rounded-2xl sw-special-archive-image"
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
