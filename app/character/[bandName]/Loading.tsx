import { addHyphen } from "@/utils/stringUtils";
import React from "react";
type LoadingParams = {
  params: {
    bandName: string;
  };
};

import data from "@/data/band";
import Link from "next/link";

const Loading = () => {
  return (
    <div className="max-w-5xl mx-auto w-auto flex flex-col mb-24">
      <div className=" flex items-center justify-around">
        {data.bandList.map((band, index) => {
          return (
            <Link
              key={index}
              className={`band-navigate-btn_name text-[10px]`}
              href={addHyphen(band.code)}
            >
              {band.bandName}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center max-w-2xl w-52 mx-auto  justify-center h-32 rounded-lg my-12 bg-gray-300 ">
        <svg
          className="w-10 h-10 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div></div>
      <div className={`flex gap-4`}>
        {Array(5)
          .fill(0)
          .map((index) => {
            return (
              <div
                key={index}
                className="h-[400px] relative w-[200px] bg-gray-300 animate-pulse rounded-[20px]"
              >
                <div></div>
                <div className={``}></div>
                <div className=" absolute bottom-8 mx-[10px] rounded-r-[70px] rounded-t-[14px] rounded-l-[14px]  bg-gray-400 h-16 w-[90%] z-[20]">
                  <div className={`absolute top-0 font-bold bg-gray-500`}></div>
                  <div className="text-[12px] font-semibold"></div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="bg-gray-300 relative animate-pulse h-96 my-16">
        <div className="inset-0 absolute flex items-center justify-center ">
          <div className="w-20 h-20 bg-gray-400 animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
