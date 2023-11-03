"use client";
import React from "react";

import PageTitle from "../PageTitle";
import SubTitle from "../SubTitle";
import { usePathname } from "next/navigation";
import SpecialPagination from "../SpecialPagination";
import { SocialMedia } from "@/type";

type SpecialLayoutPageProps = {
  children: React.ReactNode;
  socialMedias: SocialMedia[];
};

const SpecialLayoutPage = ({
  children,
  socialMedias,
}: SpecialLayoutPageProps) => {
  const pathname = usePathname();
  return (
    <div>
      <div className="max-w-7xl mx-auto w-auto">
        <PageTitle title="SPECIAL" japaneseTitle="スペシャル" />
      </div>
      <div className="max-w-4xl mx-auto w-full sm:px-14">
        <div>{children}</div>
        <SpecialPagination socialMedias={socialMedias} pathname={pathname} />
      </div>
    </div>
  );
};

export default SpecialLayoutPage;
