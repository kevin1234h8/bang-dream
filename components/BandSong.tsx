import React from "react";
import {
  bangDreamAfterglowSubIcon,
  bangDreamHelloHappyWorldSubIcon,
  bangDreamMorfonicaSubIcon,
  bangDreamMyGoSubIcon,
  bangDreamPastelPalettesSubIcon,
  bangDreamPoppinPartySubIcon,
  bangDreamRaiseASuilenSubIcon,
  bangDreamRoseliaSubIcon,
  bangDreamStarOutlineIconSrc,
} from "@/assets/bangDreamStarOutlineIcon";
import { BangDreamSongs } from "@/type";
import Image from "next/image";
type BandSongProps = {
  bandSong: BangDreamSongs;
  songType: string;
};

const BandSong = ({ bandSong, songType }: BandSongProps) => {
  return (
    <div className="flex flex-col mb-4">
      <div className="grid grid-cols-2 gap-4 grid-flow-row">
        {bandSong.songs.map((song, index) =>
          song.type === songType ? (
            <div
              key={index}
              className={`border ${
                song.singer.startsWith("Poppin'Party")
                  ? "bg-[#fff2f7]"
                  : song.singer.startsWith("Afterglow")
                  ? "bg-[#ffefef]"
                  : song.singer.startsWith("Pastel＊Palettes")
                  ? "bg-[#f0fffa]"
                  : song.singer.startsWith("Roselia")
                  ? "bg-[#eff1ff]"
                  : song.singer.startsWith("ハロー、ハッピーワールド！")
                  ? "bg-[#fffce9]"
                  : song.singer.startsWith("Morfonica")
                  ? "bg-[#eff9ff]"
                  : song.singer.startsWith("RAISE A SUILEN")
                  ? "bg-[#edffff]"
                  : song.singer.startsWith("MyGO!!!!!")
                  ? "bg-[#deebf3]"
                  : "bg-[#efefef]"
              }  rounded-xl`}
            >
              <div className="bg-white m-1 px-12 py-8 flex flex-col gap-2 rounded-xl">
                <div className="flex items-center gap-3">
                  <Image
                    width={20}
                    height={20}
                    src={
                      song.singer.startsWith("Poppin'Party")
                        ? bangDreamPoppinPartySubIcon
                        : song.singer.startsWith("Afterglow")
                        ? bangDreamAfterglowSubIcon
                        : song.singer.startsWith("Pastel＊Palettes")
                        ? bangDreamPastelPalettesSubIcon
                        : song.singer.startsWith("Roselia")
                        ? bangDreamRoseliaSubIcon
                        : song.singer.startsWith("ハロー、ハッピーワールド！")
                        ? bangDreamHelloHappyWorldSubIcon
                        : song.singer.startsWith("Morfonica")
                        ? bangDreamMorfonicaSubIcon
                        : song.singer.startsWith("RAISE A SUILEN")
                        ? bangDreamRaiseASuilenSubIcon
                        : song.singer.startsWith("MyGO!!!!!")
                        ? bangDreamMyGoSubIcon
                        : bangDreamStarOutlineIconSrc
                    }
                    className={`${
                      song.singer.startsWith("Afterglow")
                        ? "w-[10px] hidden"
                        : song.singer.startsWith("Poppin'Party")
                        ? ""
                        : song.singer.startsWith("Pastel＊Palettes")
                        ? ""
                        : song.singer.startsWith("Roselia")
                        ? ""
                        : song.singer.startsWith("ハロー、ハッピーワールド！")
                        ? ""
                        : song.singer.startsWith("Morfonica")
                        ? ""
                        : song.singer.startsWith("RAISE A SUILEN")
                        ? ""
                        : song.singer.startsWith("MyGO!!!!!")
                        ? ""
                        : "hidden"
                    }`}
                    alt="bangDreamStarOutlineIconSrc"
                  />
                  <div className="yakuhanjp">{song.singer}</div>
                </div>
                <div className="yakuhanjp text-xl font-semibold">
                  {song.title}
                </div>
                <div className="flex items-center gap-4 yakuhanjp text-black/50 text-sm">
                  <div className="yakuhanjp">作詞</div>
                  <div className="yakuhanjp">{song.lyric}</div>
                </div>
                <div className="flex items-center gap-4 yakuhanjp text-black/50 text-sm">
                  <div className="yakuhanjp">作曲</div>
                  <div className="yakuhanjp">{song.composition}</div>
                </div>
                <div className="flex items-center gap-3 yakuhanjp text-black/50 text-sm">
                  <div className="yakuhanjp">編曲</div>
                  <div className="yakuhanjp">{song.arrangement}</div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default BandSong;
