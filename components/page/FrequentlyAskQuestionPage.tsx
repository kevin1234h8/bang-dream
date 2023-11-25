"use client";

import { FAQSection } from "@/type";
import React, { useState } from "react";
import PageTitle from "../PageTitle";
import SpecialSubTitle from "../SpecialSubTitle";
import Link from "next/link";
import ReactScroll from "react-scroll";
type FrequentlyAskQuestionPageProps = {
  frequentlyAskQuestions: FAQSection[];
};
const FrequentlyAskQuestionPage = ({
  frequentlyAskQuestions,
}: FrequentlyAskQuestionPageProps) => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null,
  );

  const handleOpenAnswer = (index: number) => {
    setOpenQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mx-auto w-auto max-w-7xl">
      <PageTitle title="FAQ" japaneseTitle="よくあるご質問" />
      <div className="mx-auto mb-24 w-auto max-w-5xl">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center">
            <Link href={"/faq/data"}>
              <div className="yakuhanjp special-sns-band w-auto max-w-lg">
                データ引き継ぎに関する注意事項
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {frequentlyAskQuestions.map((frequentlyAskQuestion, index) => {
              return (
                <ReactScroll.Link
                  key={index}
                  to={frequentlyAskQuestion.type}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                >
                  <div className="yakuhanjp special-sns-band cursor-pointer">
                    {frequentlyAskQuestion.name}
                  </div>
                </ReactScroll.Link>
              );
            })}
          </div>
        </div>
        {frequentlyAskQuestions.map((frequentlyAskQuestion) => {
          return (
            <div className="flex flex-col gap-2 p-4 ">
              <SpecialSubTitle
                specialSubTitle={frequentlyAskQuestion.name}
                id={frequentlyAskQuestion.type}
              />
              <div className="flex flex-col gap-4 ">
                {frequentlyAskQuestion.datas.map((data, index) => {
                  return (
                    <div
                      onClick={() => handleOpenAnswer(index)}
                      className="flex cursor-pointer flex-col gap-3 rounded-xl border-2 border-red p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="yakuhanjp text-red">Q</div>
                          <div className="font-sans font-bold tracking-[2px]">
                            {data.question}
                          </div>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2.5"
                            stroke="currentColor"
                            className={`h-4 w-4 font-bold text-red ${
                              openQuestionIndex === index ? "rotate-180" : ""
                            } transition duration-[0.4s] `}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        className={` ${
                          openQuestionIndex === index ? "flex" : "hidden"
                        } items-start gap-4 transition duration-[0.4s]`}
                      >
                        <div className="yakuhanjp text-red">A</div>
                        <div className=" flex flex-col gap-2">
                          {data.answers.map((answer, index) => {
                            return (
                              <div key={index}>
                                <div className="font-sans tracking-[2px] text-[#282828]">
                                  {answer}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrequentlyAskQuestionPage;
