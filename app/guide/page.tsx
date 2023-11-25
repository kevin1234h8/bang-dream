import { bangDreamStarOutlineIconSrc } from "@/assets/bangDreamStarOutlineIcon";
import PageTitle from "@/components/PageTitle";
import SpecialDescription from "@/components/SpecialDescription";
import SpecialSubTitle from "@/components/SpecialSubTitle";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const guides = [
    {
      type: "リズムゲームを楽しみたい！",
      contents: [
        {
          title: "好きな楽曲を買おう！",
          details: [
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-1_1.jpg",
              description:
                "CiRCLEエリアの「楽曲ショップ」で好きな楽曲を購入しよう！",
            },
          ],
        },
        {
          title: "ライブをしよう！",
          details: [
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-1_2.jpg",
              description:
                "フリーライブでは、好きな楽曲を好きなだけプレイできます。",
            },
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-1_3.jpg",
              description:
                "協力ライブでは、他の人と一緒にプレイ！たくさんの報酬を獲得できます。",
            },
          ],
        },
      ],
    },
    {
      type: "キャラクターを知りたい！",
      contents: [
        {
          title: "バンドストーリーを読もう！",
          details: [
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-2_1.jpg",
              description:
                "まずは気になるバンドのバンドストーリーを読んでみよう！バンド結成のエピソードや、キャラクター同士の関係性について知ることができます。",
            },
          ],
        },
        {
          title: "メインストーリーを読もう！",
          details: [
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-2_2.jpg",
              description:
                "メインストーリーでは、バンドの垣根を超えた物語が楽しめます♪",
            },
          ],
        },
        {
          title: "エリア会話を見よう！",
          details: [
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-2_3.jpg",
              description:
                "エリアではキャラクターたちの日常を見ることができます。また、エリアアイテムを設置すると新たなエリア会話が発生します。",
            },
          ],
        },
      ],
    },
    {
      type: "もっとスコアを上げたい！",
      contents: [
        {
          title: "バンドストーリーを読もう！",
          details: [
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-3_1.jpg",
              description:
                "ライブで手に入れた練習チケットでレベルを上げることができます。",
            },
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-3_2.jpg",
              description:
                "★3以上のメンバーは、一定のレベルまで上げると「特訓」が可能になります。ステータスとレベル上限が上昇！さらに、新たなイラストが解放されます。",
            },
          ],
        },
        {
          title: "エリアアイテムを置こう！",
          details: [
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-3_3.jpg",
              description:
                "エリア「CiRCLE」「カフェテリア」「江戸川楽器店」「流星堂」でエリアアイテムを購入できます。設置することで、特定メンバーのステータスがUP！",
            },
          ],
        },
        {
          title: "ポテンシャル解放をしよう！",
          details: [
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-3_4.jpg",
              description:
                "「ポテンシャル解放」でキャラクターのステータスをさらにUP！「ポテンシャル解放」の上限レベルは、キャラランクに応じて上昇します。キャラランクは、そのキャラクターのメンバーを編成してライブをプレイすることなどで上げることができます。",
            },
          ],
        },
        {
          title: "スキル練習をしよう！",
          details: [
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-3_5.jpg",
              description:
                "スキルレベルを上げることで、スキルの効果が上昇します。",
            },
          ],
        },
        {
          title: "マスター練習をしよう！",
          details: [
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-3_6.jpg",
              description:
                "「マスターキューブ」「EXマスターキューブ」を使って、メンバーのマスター練習ができます。マスター練習をするとステータスがUPします。さらに、★5メンバーなら3D衣装のアナザーカラーも獲得！",
            },
          ],
        },
      ],
    },
    {
      type: "もっとキャラクターを知りたい！",
      contents: [
        {
          title: "イベントに参加しよう！",
          details: [
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-4_1.jpg",
              description:
                "開催中のイベントに参加してみよう！イベントPを集めると、最新のストーリーを読むことができます。さらに、報酬も獲得できます！",
            },
          ],
        },
        {
          title: "エピソード/メモリアルエピソードを読もう！",
          details: [
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-4_2.jpg",
              description:
                "メンバーごとのエピソードは、アイテムで解放することで読むことができます。「メモリアルエピソード」を読むためには、レベルを最大まで上げる必要があります。",
            },
          ],
        },
        {
          title: "キャラクターの衣装をカスタマイズ！",
          details: [
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-4_3.jpg",
              description:
                "3Dの衣装やヘア・アクセサリー、Live2Dの衣装を変更することができます。3Dの衣装は3Dライブ映像で、Live2Dの衣装はLive2Dカットインやライブ後会話で見ることができます",
            },
          ],
        },
      ],
    },
    {
      type: "迷ったときは？",
      contents: [
        {
          title: "ミッションを達成しよう！",
          details: [
            {
              image:
                "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/guide/img_guide-5_1.jpg",
              description:
                "ミッション画面には、様々なミッションが用意されています。達成することで、スターなどのアイテムが貰えます♪",
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="mx-auto w-auto max-w-7xl">
      <PageTitle title="GUIDE" japaneseTitle="攻略ガイド" />
      <div className="mx-auto mb-24 w-auto max-w-5xl">
        <div>
          {guides.map((guide, index) => {
            return (
              <div key={index} className="flex flex-col gap-4">
                <SpecialSubTitle specialSubTitle={guide.type} />
                <div className="flex flex-col gap-16">
                  {guide.contents.map((content, index) => {
                    return (
                      <div key={index} className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <Image
                            src={bangDreamStarOutlineIconSrc}
                            width={20}
                            height={20}
                            alt="bangDreamStarOulineIcon"
                          />
                          <div className="sw-special-archive-name yakuhanjp duration-400 text-xl font-medium text-lightRed transition-transform ease-in-out ">
                            {content.title}
                          </div>
                        </div>
                        <div className="flex  justify-center gap-4 ">
                          {content.details.map((detail, index) => {
                            return (
                              <div key={index} className="flex flex-col gap-4">
                                <Image
                                  width={2100}
                                  height={300}
                                  src={detail.image}
                                  alt={"guide-image"}
                                  className="rounded-3xl"
                                />
                                <div className="yakuhanjp text-sm font-medium">
                                  {detail.description}
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
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
