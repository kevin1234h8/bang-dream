import React from "react";
import TouyamaKasumiSeason1Costume1 from "@/assets/poppin-party/touyama-kasumi/season1/img_toyama-kasumi_2.webp";
import Image from "next/image";
type Params = {
  params: {
    characterName: string;
  };
};

const page = ({ params: { characterName } }: Params) => {
  console.log("characterName:", characterName);
  return (
    <div>
      <div className="flex items-center justify-center character-background my-20 relative">
        <div className="character-background-deco"></div>
        <div className="character-background-text">CHARACTER</div>
        <div className="character-background-text_japan">キャラクター</div>
      </div>
      <div className="flex items-start">
        <Image
          src={TouyamaKasumiSeason1Costume1}
          alt="TouyamaKasumiSeason1Costume1"
          className="relative w-[60%] top-[-120px]"
        />
        <div className="flex flex-col">
          <div className="flex">
            <div>Poppin Party</div>
            <div>ボーカル/ギター</div>
            <div>
              <div>CV</div>
              <div>愛美</div>
            </div>
          </div>
          <div>
            <div>戸山 香澄</div>
            <div>とやま かすみ</div>
          </div>
          <div>セラフィムコード</div>
        </div>
      </div>
    </div>
  );
};

export default page;
