import React from "react";

import {
  getBangDreamBand,
  getBangDreamMember,
} from "@/lib/BangDreamApiHandler";
import Character from "@/components/Character";
import { getSocialMedia } from "@/lib/SocialMediaApi";
import { removeHyphens } from "@/utils/stringUtils";
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
    characterName,
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
