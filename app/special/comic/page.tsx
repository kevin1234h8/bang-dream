import SpecialSubTitle from "@/components/SpecialSubTitle";
import SubTitle from "@/components/SubTitle";
import { getSpecialComics } from "@/lib/Special";
import { editBandName } from "@/utils/bandNameUtils";
import { addHyphen } from "@/utils/functionsUtils";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const comicIndex = [4, 5, 6, 2, 3, 0, 1];
  const comicDatas = await getSpecialComics();
  const [comics] = await Promise.all([comicDatas]);

  return (
    <div>
      <div className="mb-24 max-w-4xl mx-auto w-auto ">
        <SubTitle title="コミック" />
        <div className="w-[45rem] mx-auto text-center text-sm flex items-center justify-center">
          「バンドリ！
          ガールズバンドパーティ！」は7つのガールズバンドの成長の物語！はじめよう、私たちのバンド活動(ライフ)！
          ※コミックの二次配布、加工を禁止いたします。
          ※コミックの素材を許可なく使用し、当アプリの印象を損なう活動を禁止いたします。
          ※予告なく配布終了となる場合がございます。
        </div>
        <SpecialSubTitle specialSubTitle="バンドリ! ガールズバンドパーティ! The first page" />
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
          {comicIndex.map((index) => {
            const comic = comics[index];
            return (
              <div className="flex md:flex-row flex-col sm:flex-col items-center gap-8">
                <div className="flex flex-col gap-4">
                  <div className="yakuhanjp">{editBandName(comic.band)}編</div>
                  <Image
                    src={comic.cover}
                    alt="cover"
                    width={1200}
                    height={1200}
                    className="sm:w-[300px] md:w-[1200px] w-[100px] "
                  />
                </div>
                <div className="flex flex-col gap-4 mt-10">
                  <div className="yakuhanjp text-[.75rem]">{comic.summary}</div>
                  <Link
                    href={`/special/comic/${addHyphen(comic.band)}`}
                    className="flex items-center justify-end  gap-3 group"
                  >
                    <div className="yakuhanjp text-[#b92b5d] text-[.75rem]">
                      このコミックを読む
                    </div>
                    <div className="w-[2rem] h-[2rem] border border-[#b92b5d] text-[#b92b5d] rounded-full flex items-center justify-center group-hover:bg-[#b92b5d] group-hover:text-white duration-[0.4s] hover:scale-[1.2] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 "
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
