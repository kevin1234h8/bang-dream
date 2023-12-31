import React from "react";

const page = () => {
  const faqDataContent = {
    header: "データ引き継ぎに関する注意事項",
    description:
      "現在、データ引き継ぎに関するお問い合わせを多数頂戴しております。 下記によくあるお問い合わせをご案内いたしますので、不測の事態に備え、ご確認いただけますと幸いです。",
    contents: [
      {
        title:
          "「引き継ぎ設定が見つかりません。正しい引き継ぎID・パスワードを入力してください。」 と表示される",
        subcontent: [
          {
            title: "引き継ぎIDまたはパスワードが間違っている",
            description: [
              "大変お手数ではございますが、下記内容をご参照いただき、ご入力内容に誤りがないか、再度お試しいただけますと幸いです。 【誤りの多い文字】 I(大文字のi)とl(小文字のL)と1(数字) O(英語)と0(数字)",
            ],
          },
          {
            title: "すでにデータ引き継ぎで1度使用したパスワードを入力している",
            description: [
              "データ引き継ぎをおこなうと、パスワードがリセットされてしまいます。 再度利用することができませんので、データ引き継ぎをおこなった際は、すぐに引き継ぎ設定をおこない、新たにパスワードを設定していただくようお願いいたします。",
            ],
          },
        ],
      },
      {
        title:
          "「すでに他の端末にデータが引き継いでいるか、プレイデータが破損しています。最初からゲームをはじめますか?」と表示される",
        subcontent: [
          {
            title: "他の端末にデータ引き継ぎを行われている場合",
            description: [
              "別の端末に引き継ぎを行われた後には、元の端末ではご利用できなくなります。",
            ],
          },
          {
            title: "データ引き継ぎを行われたことが無い場合",
            description: [
              "通信エラー等で正常にログインができなかった際、まれにこのようなエラーが表示される場合がございます。 誠に恐れ入りますが、「キャンセル」を選択後に一度アプリを終了していただき、通信環境の良い場所でアプリを起動しなおしてくださいますようお願いいたします。 再起動後も同じ表示になる場合には、「キャンセル」を選択後に、タイトル画面右下の「メニュー」から「キャッシュクリア」を行っていただき、再度ログインをお試しくださいますようお願いいたします。",
              "※繰り返し表示されてしまう場合は、「OK」は選択せずに、サポートよりお問い合わせをお願いいたします。",
            ],
          },
        ],
      },
    ],
  };
  return <div>page</div>;
};

export default page;
