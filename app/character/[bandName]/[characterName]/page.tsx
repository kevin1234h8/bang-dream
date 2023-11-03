import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getBangDreamBand, getBangDreamMember } from "@/lib/BandDreamApi";
import Character from "@/components/Character";
import { getSocialMedia } from "@/lib/SocialMediaApi";
import { formatBandName, removeHyphens } from "@/utils/functionsUtils";
type Params = {
  params: {
    bandName: string;
    characterName: string;
  };
};

const page = async ({ params: { bandName, characterName } }: Params) => {
  bandName = removeHyphens(bandName);
  const bangDreamMemberData = await getBangDreamMember(
    removeHyphens(bandName),
    characterName
  );
  const socialMediaData = await getSocialMedia();
  const bangDreamBandDatas = await getBangDreamBand(bandName);

  const [bangDreamMember, socialMedias, bangDreamBand] = await Promise.all([
    bangDreamMemberData,
    socialMediaData,
    bangDreamBandDatas,
  ]);
  return (
    <div className="character-main-container">
      <div className="flex items-center justify-center character-background my-20 relative">
        <div className="character-background-deco"></div>
        <div className="character-background-text">CHARACTER</div>
        <div className="character-background-text_japan">キャラクター</div>
      </div>
      <Character
        bandName={bandName}
        characterName={characterName}
        bangDreamMember={bangDreamMember}
        socialMedias={socialMedias}
        bangDreamBand={bangDreamBand}
      />
    </div>
  );
};

export default page;
