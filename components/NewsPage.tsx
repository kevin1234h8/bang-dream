"use client";

import { NewsPage } from "@/type";
import React, { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import Image from "next/image";
import SwMoreButton from "./SwMoreButton";
import RoundNavigationButton from "./RoundNavigationButton";

type NewsPageProps = {
  news: NewsPage[];
};

const NewsPage = ({ news }: NewsPageProps) => {
  const [page, setPage] = useState<number>(0);

  const currentNews = news[page];
  const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] =
    useState<boolean>(false);
  const [isNextButtonDisabled, setNextIsButtonDisabled] =
    useState<boolean>(false);
  console.log(page === 0);
  useEffect(() => {
    if (page === 0) {
      setIsPreviousButtonDisabled(true);
    }
  }, [page]);
  const handlePreviousPage = () => {
    if (page === 0) {
      setIsPreviousButtonDisabled(true);
    } else {
      setIsPreviousButtonDisabled(false);
      setPage(page - 1);
    }
  };

  const handlePage = (index: number) => {
    setPage(index);
  };
  return (
    <div className="mx-auto w-auto max-w-7xl">
      <PageTitle japaneseTitle="ニュース" title="NEWS" />
      <div className="mx-auto mb-24 w-auto max-w-5xl">
        <div className="grid h-auto grid-cols-3 gap-8">
          {currentNews.contents.map((n) => {
            return (
              <div className="news-content group rounded-xl px-4  pb-8 pt-2">
                <div className="flex h-[200px] items-center justify-center overflow-hidden">
                  {/* <Image
                    src={
                      "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/thumb.jpg"
                    }
                    alt="default-news-image"
                    width={400}
                  height={400}
                    className="fixed"
                  /> */}
                  <Image
                    width={400}
                    height={400}
                    src={n.image}
                    alt="news-image"
                    className="z-10 transition duration-[0.4s] group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col  gap-2">
                  <div className="yakuhanjp text-base text-lightRed">
                    {n.date}
                  </div>
                  <div className="yakuhanjp  text-xs transition duration-[0.4] group-hover:text-lightRed">
                    {n.description}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="mx-auto w-[1000px] ">
            <div className="flex items-center justify-center gap-8">
              <div onClick={() => handlePreviousPage()}>
                <RoundNavigationButton
                  isRotate={true}
                  isButtonDisabled={isPreviousButtonDisabled}
                />
              </div>
              <div className="flex items-center justify-center gap-6">
                {news.map((n, index: number) => {
                  return (
                    <div
                      className={`cursor-pointer text-lightRed ${
                        page === index ? "underline" : ""
                      }`}
                      onClick={() => handlePage(index)}
                    >
                      {index + 1}
                    </div>
                  );
                })}
              </div>
              <RoundNavigationButton
                isRotate={false}
                isButtonDisabled={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
