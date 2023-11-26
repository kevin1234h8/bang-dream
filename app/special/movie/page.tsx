import PageTitle from "@/components/PageTitle";
// import SpecialMoviePage from "@/components/page/SpecialMoviePage";
import { getSocialMedia } from "@/lib/SocialMediaApi";
import {
  getSpecialMVMovies,
  getSpecialPVMovies,
  getSpecialPastelLifeMovies,
} from "@/lib/Special";
import dynamic from "next/dynamic";
import React from "react";

const SpecialMoviePage = dynamic(
  () => import("@/components/page/SpecialMoviePage"),
  {
    ssr: false,
  },
);

const page = async () => {
  const specialPVMovieDatas = await getSpecialPVMovies();
  const specialMVMovieDatas = await getSpecialMVMovies();
  const specialPastelLifeMovieDatas = await getSpecialPastelLifeMovies();
  const socialMediaDatas = await getSocialMedia();
  const [
    specialPVMovies,
    specialMVMovies,
    specialPastelLifeMovies,
    socialMedias,
  ] = await Promise.all([
    specialPVMovieDatas,
    specialMVMovieDatas,
    specialPastelLifeMovieDatas,
    socialMediaDatas,
  ]);
  return (
    <SpecialMoviePage
      specialPVMovies={specialPVMovies}
      specialMVMovies={specialMVMovies}
      specialPastelLifeMovies={specialPastelLifeMovies}
      socialMedias={socialMedias}
    />
  );
};

export default page;
