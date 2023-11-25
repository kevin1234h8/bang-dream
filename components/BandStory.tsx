"use client";

import { changePoppinPartyBandName } from "@/utils/bandNameUtils";
import {
  addHyphen,
  capitalizeFirstLetter,
  convertToUppercase,
} from "@/utils/stringUtils";
import { CldImage } from "next-cloudinary";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BandStoryProps = {
  src: string;
  display: string;
  title: string;
  descriptions: string[];
  bandName: string;
  url: string;
  image: string;
};

const BandStory = ({
  src,
  display,
  title,
  descriptions,
  bandName,
  url,
  image,
}: BandStoryProps) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[200px] ">
          <CldImage
            width="1100"
            height="1100"
            src={image}
            sizes="100%"
            alt={bandName}
          />
        </div>
      </div>
      <Link
        href={url}
        className={`flex relative ${display} items-center justify-between w-full gap-20 `}
      >
        <div>
          <Image
            src={src}
            alt="poppin-party"
            width={800}
            height={800}
            className="w-[800px]"
          />
        </div>
        <div className="w-full">
          <div
            className={`text-white words-item_title flex items-center justify-center text-2xl  ${
              // bandName === "RAISE A SUILEN"
              //   ? "Raise-a-suilen"
              //   : bandName === "MyGO!!!!!"
              //   ? "Mygo"
              //   : bandName
              addHyphen(bandName)
            }  text-2xl p-6   rounded-lg font-bold`}
          >
            {title}
          </div>
          <div
            className={`my-8 flex flex-col gap-4  band-story_description  ${
              // bandName === "RAISE A SUILEN"
              //   ? "Raise-a-suilen"
              //   : bandName === "MyGO!!!!!"
              //   ? "Mygo"
              //   : bandName
              addHyphen(bandName)
            }`}
          >
            {descriptions.map((description, index) => {
              return (
                <div key={index} className="flex items-center gap-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                      />
                    </svg>
                  </div>
                  <div>{description}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-[-40px] band-story_redirect  right-0 px-4 flex items-center  justify-center gap-4">
          <div
            className={`band-story_redirect_name ${
              // bandName === "RAISE A SUILEN"
              //   ? "Raise-a-suilen"
              //   : bandName === "MyGO!!!!!"
              //   ? "Mygo"
              //   : bandName
              addHyphen(bandName)
            }`}
          >
            {bandName === "hello happy world"
              ? "ハロー、ハッピーワールド"
              : bandName === "raise a suilen"
              ? convertToUppercase(bandName)
              : bandName === "mygo"
              ? "MyGO!!!!!"
              : bandName === "poppin party"
              ? changePoppinPartyBandName(bandName)
              : capitalizeFirstLetter(bandName)}
            について
          </div>
          <div
            className={`band-story_redirect_arrow-right ${
              // bandName === "RAISE A SUILEN"
              //   ? "Raise-a-suilen"
              //   : bandName === "MyGO!!!!!"
              //   ? "Mygo"
              //   : bandName
              addHyphen(bandName)
            } w-10 h-10 border rounded-full text-[#13c791] hover:text-white hover:bg-[#13c791] border-[#13c791] flex items-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BandStory;
