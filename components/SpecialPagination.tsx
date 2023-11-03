"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import SwShare from "./SwShare";
import Index from "./Index";
import { SocialMedia } from "@/type";

type SpecialPaginationProps = {
  // isPreviousSpecialRedirectUrl: boolean;
  // previousSpecialRedirectUrl: string;
  // isNextSpecialRedirectUrlExists: boolean;
  // nextSpecialRedirectUrl: string;
  socialMedias: SocialMedia[];
  pathname: string;
};

const SpecialPagination = ({
  socialMedias,
  pathname,
}: // isPreviousSpecialRedirectUrl,
// previousSpecialRedirectUrl,
// isNextSpecialRedirectUrlExists,
// nextSpecialRedirectUrl,
SpecialPaginationProps) => {
  const [nextSpecialRedirectUrl, setNextSpecialRedirectUrl] =
    useState<string>("");
  const [previousSpecialRedirectUrl, setPreviousSpecialRedirectUrl] =
    useState<string>("");
  const [isNextSpecialRedirectUrlExists, setIsNextSpecialRedirectUrlExists] =
    useState<boolean>(true);
  const [isPreviousSpecialRedirectUrl, setIsPreviousSpecialRedirectUrl] =
    useState<boolean>(true);

  const specialRedirectUrl = [
    "/special/sns",
    "/special/movie",
    "/special/manga",
    "/special/comic",
    "/special/streamer",
  ];

  useEffect(() => {
    const currentSpecialRedirectUrlIndex = specialRedirectUrl.findIndex(
      (x) => x === pathname
    );
    const previousSpecialRedirectUrlIndex = currentSpecialRedirectUrlIndex - 1;
    const nextSpecialRedirectUrlIndex = currentSpecialRedirectUrlIndex + 1;

    if (
      previousSpecialRedirectUrlIndex < 0 ||
      previousSpecialRedirectUrlIndex > specialRedirectUrl.length
    ) {
      setIsPreviousSpecialRedirectUrl(false);
      setPreviousSpecialRedirectUrl("");
    } else {
      const previousSpecialRedirectUrl =
        specialRedirectUrl[previousSpecialRedirectUrlIndex];
      setIsPreviousSpecialRedirectUrl(true);
      setPreviousSpecialRedirectUrl(previousSpecialRedirectUrl);
    }

    if (
      nextSpecialRedirectUrlIndex < 0 ||
      nextSpecialRedirectUrlIndex > specialRedirectUrl.length
    ) {
      setIsNextSpecialRedirectUrlExists(false);
      setNextSpecialRedirectUrl("");
    } else {
      const nextSpecialRedirectUrl =
        specialRedirectUrl[nextSpecialRedirectUrlIndex];
      setIsNextSpecialRedirectUrlExists(true);
      setNextSpecialRedirectUrl(nextSpecialRedirectUrl);
    }
  }, [pathname]);

  return (
    <div className={`mb-24 ${pathname === "/special" ? "hidden" : ""}`}>
      <div className="mb-12 flex items-center justify-end">
        <SwShare socialMedias={socialMedias} />
      </div>
      <div className="flex items-center special-sns-index-container justify-center gap-16">
        {isPreviousSpecialRedirectUrl ? (
          <Link
            href={previousSpecialRedirectUrl}
            className="special-sns-index-previous flex items-center gap-4 flex-row-reverse"
          >
            <div>PREVIOUS</div>
            <div className="chara-list-dot_left"></div>
          </Link>
        ) : (
          <div className="special-sns-index-previous disabled flex items-center gap-4 flex-row-reverse">
            <span className="">PREVIOUS</span>
            <div className="chara-list-dot_left"></div>
          </div>
        )}
        <Index redirectUrl="/special" marginTop="mt-0" />
        <div className="special-sns-index-next flex items-center gap-4">
          {isNextSpecialRedirectUrlExists ? (
            <Link href={nextSpecialRedirectUrl}>NEXT</Link>
          ) : (
            <span className="">NEXT</span>
          )}
          <div className="chara-list-dot_right"></div>
        </div>
      </div>
    </div>
  );
};

export default SpecialPagination;
