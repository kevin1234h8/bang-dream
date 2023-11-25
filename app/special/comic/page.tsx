import SpecialSubTitle from "@/components/SpecialSubTitle";
import SubTitle from "@/components/SubTitle";
import { getSpecialComics } from "@/lib/Special";
import { editBandName } from "@/utils/bandNameUtils";
import { addHyphen } from "@/utils/stringUtils";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const comicIndex = [4, 5, 6, 2, 3, 0, 1];
  const comicDatas = await getSpecialComics();
  const [comics] = await Promise.all([comicDatas]);

  return (
    <div>
      <div className="mx-auto mb-24 w-auto max-w-4xl ">
        <SubTitle title="コミック" />
        <div className="mx-auto flex w-[45rem] items-center justify-center text-center text-sm">
          「バンドリ！
          ガールズバンドパーティ！」は7つのガールズバンドの成長の物語！はじめよう、私たちのバンド活動(ライフ)！
          ※コミックの二次配布、加工を禁止いたします。
          ※コミックの素材を許可なく使用し、当アプリの印象を損なう活動を禁止いたします。
          ※予告なく配布終了となる場合がございます。
        </div>
        <SpecialSubTitle specialSubTitle="バンドリ! ガールズバンドパーティ! The first page" />
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {comicIndex.map((index) => {
            const comic = comics[index];
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-8 sm:flex-col md:flex-row"
              >
                <div className="flex flex-col gap-4">
                  <div className="yakuhanjp">{editBandName(comic.band)}編</div>
                  <Image
                    src={comic.cover}
                    alt="cover"
                    width={1200}
                    height={1200}
                    className="w-[100px] sm:w-[300px] md:w-[1200px] "
                  />
                </div>
                <div className="mt-10 flex flex-col gap-4">
                  <div className="yakuhanjp text-[.75rem]">{comic.summary}</div>
                  <Link
                    href={`/special/comic/${addHyphen(comic.band)}`}
                    className="group flex items-center  justify-end gap-3"
                  >
                    <div className="yakuhanjp text-[.75rem] text-[#b92b5d]">
                      このコミックを読む
                    </div>
                    <div className="flex h-[2rem] w-[2rem] items-center justify-center rounded-full border border-[#b92b5d] text-[#b92b5d] duration-[0.4s] group-hover:bg-[#b92b5d] group-hover:text-white hover:scale-[1.2] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </Link>
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
