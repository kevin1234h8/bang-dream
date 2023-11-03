import PageTitle from "@/components/PageTitle";
import { getSpecialSNS } from "@/lib/Special";
import SpecialSNS from "@/model/SpecialSNS";
import { addJapaneseNameToMembers } from "@/utils/bandNameUtils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "@/data/band";
import { addHyphen } from "@/utils/functionsUtils";
import SpecialSNSPage from "@/components/page/SpecialSNSPage";
import { getSocialMedia } from "@/lib/SocialMediaApi";
const page = async () => {
  const specialSNSDatas = await getSpecialSNS();
  const socialMediaDatas = await getSocialMedia();
  const [specialSNS, socialMedias] = await Promise.all([
    specialSNSDatas,
    socialMediaDatas,
  ]);

  return <SpecialSNSPage specialSNS={specialSNS} socialMedias={socialMedias} />;
};

export default page;
