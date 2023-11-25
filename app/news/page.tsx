import NewsPage from "@/components/NewsPage";
import React from "react";

const page = () => {
  const news = [
    {
      page: 1,
      contents: [
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2023/10/11180139/%E7%AC%AC5%E5%9B%9E%E3%82%AB%E3%82%99%E3%83%AB%E3%83%8F%E3%82%9A%E6%9D%AF-400x210.jpeg",
          description: "「第5回ガルパ杯」の新情報について",
          date: "2023.10.12",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2023/09/12181924/MyGO%E7%99%BB%E5%A0%B4-400x212.png",
          description: "新バンド「MyGO!!!!!」登場！",
          date: "2023.09.16",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2023/09/08101947/65-400x225.jpg",
          description:
            "9月8日(金)より6.5周年を記念し「ドリームフェスティバルガチャ」や「6.5周年記念楽曲追加キャンペーン」などを開催！",
          date: "2023.09.08",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/thumb.jpg",
          description: "Pastel＊Palettes 丸山彩役のキャストについて",
          date: "2023.09.01",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2023/06/27170913/4-400x225.png",
          description:
            "6月30日（金）よりTVアニメ「チェンソーマン」コラボ開催！",
          date: "2023.06.27",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2023/03/18123913/Twitter_230301_producer_letter_vol4-400x226.png",
          description: "プロデューサーレター vol.4",
          date: "2023.03.18",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/04/11181711/2022_Twitter_%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88-400x226.jpg",
          description: "v7.0.0アップデート情報！",
          date: "2023.03.09",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2023/03/01112618/Twitter_producer_letter_03-400x226.png",
          description: "プロデューサーレター vol.3 後編",
          date: "2023.03.02",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2023/03/01112618/Twitter_producer_letter_03-400x226.png",
          description: "プロデューサーレター vol.3 前編",
          date: "2023.03.01",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/thumb.jpg",
          description:
            "配信＆動画投稿サポートプログラム第1弾！ガルパ配信用素材配布！",
          date: "2023.02.28",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2023/01/27133713/Twitter_producer_letter_02-400x226.png",
          description: "プロデューサーレター vol.2",
          date: "2023.01.28",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2023/01/13182237/%E3%83%95%E3%82%9A%E3%83%AC%E3%82%B9%E7%94%A8_%E5%8F%97%E9%A8%93%E7%94%9F%E5%BF%9C%E6%8F%B4BGM%E5%91%8A%E7%9F%A5-1-400x209.png",
          description: "「夢を撃ち抜け！受験生応援キャンペーン！2023」開催！",
          date: "2023.01.14",
        },
      ],
    },
    {
      page: 2,
      contents: [
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2023/01/11125009/Twitter_producer_letter_01-400x226.png",
          description: "プロデューサーレター vol.1",
          date: "2023.01.13",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/04/14094251/banner_banner-400x133.jpg",
          description: "「ガルパステーション #15」放送決定！",
          date: "2022.12.15",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/thumb.jpg",
          description: "Pastel＊Palettes 丸山彩役の前島亜美さんについて",
          date: "2022.11.30",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/04/11181711/2022_Twitter_%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88-400x226.jpg",
          description: "v6.5.0アップデート情報！",
          date: "2022.11.14",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/thumb.jpg",
          description:
            "【重要】「ユーザーデータ削除」機能利用時の引き継ぎ設定に関する仕様の変更について",
          date: "2022.11.14",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/04/14094251/banner_banner-400x133.jpg",
          description: "「ガルパステーション #14」放送決定！",
          date: "2022.10.21",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/04/11181711/2022_Twitter_%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88-400x226.jpg",
          description: "v6.4.0アップデート情報！",
          date: "2022.10.13",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/thumb.jpg",
          description:
            "【重要】「App Store」のAppとApp内課金の価格変更に伴う、スターショップ内の価格、数量、一部商品の販売期間の変更に関する詳細、及び一部商品の注意事項について",
          date: "2022.10.03",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/04/11181711/2022_Twitter_%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88-400x226.jpg",
          description: "v6.3.0アップデート情報！",
          date: "2022.09.13",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/04/14094251/banner_banner-400x133.jpg",
          description:
            "「ガルパステーション 5.5周年直前スペシャル！」放送決定！",
          date: "2022.08.27",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/04/14094251/banner_banner-400x133.jpg",
          description: "「ガルパステーション #12」放送決定！",
          date: "2022.07.22",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/04/11181711/2022_Twitter_%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88-400x226.jpg",
          description: "v6.2.0アップデート情報！",
          date: "2022.06.03",
        },
      ],
    },
    {
      page: 3,
      contents: [
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/04/14103056/banner_garupastation-400x133.png",
          description: "「ガルパステーション #11」放送決定！",
          date: "2022.05.07",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/04/14103056/banner_garupastation-400x133.png",
          description: "「ガルパステーション #10」放送決定！",
          date: "2022.04.20",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/04/11181711/2022_Twitter_%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88-400x226.jpg",
          description: "v6.1.0アップデート情報！",
          date: "2022.04.12",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/thumb.jpg",
          description:
            "【重要】プライバシーポリシー及び利用規約の一部改訂のお知らせ",
          date: "2022.03.31",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/thumb.jpg",
          description:
            "【重要】4月中に予定しているv6.1.0へのアップデートに伴う対応端末の変更、及び注意事項について",
          date: "2022.03.31",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/04/11181711/2022_Twitter_%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88-400x226.jpg",
          description: "v6.0.0アップデート情報！",
          date: "2022.03.07",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2021/05/19111439/Twitter_%E3%82%A2%E3%83%83%E3%83%95%E3%82%9A%E3%83%86%E3%82%99%E3%83%BC%E3%83%88_2021-400x226.jpg",
          description: "「ガルパステーション 5周年直前スペシャル！」放送決定！",
          date: "2022.02.26",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/01/27125156/%E3%82%B5%E3%83%A0%E3%83%8D-400x226.png",
          description: "ガルパ5周年記念アニメ放送決定！",
          date: "2022.01.28",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/01/27125156/%E3%82%B5%E3%83%A0%E3%83%8D-400x226.png",
          description: "v5.10.0アップデート情報！",
          date: "2022.01.24",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2021/05/28190020/banner_210605_%E6%96%B0%E7%95%AA%E7%B5%84%E3%83%9B%E3%83%BC%E3%83%A0%E3%83%90%E3%83%8A%E3%83%BC-400x133.png",
          description: "「ガルパステーション #8」放送決定！",
          date: "2022.01.21",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/uploads/2022/01/06131211/Twitter_220107_%E5%8F%97%E9%A8%93%E7%94%9F%E5%BF%9C%E6%8F%B4%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%B0%E6%8A%95%E7%A8%BF%E3%82%AB%E3%83%B3%E3%83%90%E3%82%BB%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AB%E3%82%AB%E3%83%BC%E3%83%89--400x209.jpg",
          description: "「夢を撃ち抜け！受験生応援キャンペーン！2022」開催！",
          date: "2022.01.07",
        },
        {
          image:
            "https://bang-dream.bushimo.jp/wordpress/wp-content/themes/bang-dream_gbp_v2/assets/images/common/thumb.jpg",
          description: "アプリ内のお知らせが更新できない現象について",
          date: "2021.12.17",
        },
      ],
    },
  ];

  return <NewsPage news={news} />;
};

export default page;
