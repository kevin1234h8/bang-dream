"use client";

import { BangDreamBandLogos, BangDreamSong, BangDreamSongs } from "@/type";
import React, { useEffect, useState } from "react";
import PageTitle from "../PageTitle";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import {
  getBangDreamSongBySongType,
  getBangDreamSongs,
} from "@/lib/BangDreamApiHandler";
import BandSongs from "../BandSongs";
import axios from "axios";
import { BASE_URL } from "@/config";
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
import SpecialSubTitle from "../SpecialSubTitle";
import BandSong from "../BandSong";
import Loading from "../../app/music/Loading";

type BandMusicPageProps = {
  bandSongs: BangDreamSongs[];
  bangDreamBandLogos: BangDreamBandLogos;

  // handleRadioBangDreamSongBandNameClick: any;
  // handleRadioBangDreamSongTypeClick: any;
};

const BandMusicPage = ({
  bandSongs,
  bangDreamBandLogos,
}: // songType,
// bandName,
// handleRadioBangDreamSongBandNameClick,
// handleRadioBangDreamSongTypeClick,
BandMusicPageProps) => {
  const [songs, setSongs] = useState<BangDreamSongs[]>(bandSongs);
  const bandLogoIndex = [5, 6, 1, 2, 4, 3, 0, 7];
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedBangDreamSongBandName, setSelectedBangDreamSongBandName] =
    useState<string>("");
  const [selectedBangDreamSongType, setSelectedBangDreamSongType] =
    useState<string>("");
  const handleRadioBangDreamSongBandNameClick = async (value: string) => {
    if (selectedBangDreamSongBandName !== value) {
      setSelectedBangDreamSongBandName(value);
    }
  };
  const handleRadioBangDreamSongTypeClick = async (value: string) => {
    if (selectedBangDreamSongType !== value) {
      setSelectedBangDreamSongType(value);
    }
  };
  useEffect(() => {
    if (selectedBangDreamSongBandName == undefined) {
      setSelectedBangDreamSongBandName("");
    }
    if (selectedBangDreamSongType == undefined) {
      setSelectedBangDreamSongType("");
    }
    setIsLoading(true);
    try {
      const getBangDreamSongs = async () => {
        if (
          selectedBangDreamSongBandName === "" &&
          selectedBangDreamSongType === ""
        ) {
          setSongs(bandSongs);
        } else if (
          selectedBangDreamSongBandName !== "" &&
          selectedBangDreamSongType !== ""
        ) {
          const filteredBands = bandSongs
            .filter(
              (bandSong) => bandSong.band === selectedBangDreamSongBandName,
            )
            .map((band) => {
              return {
                ...band,
                songs: band.songs.filter(
                  (song) => song.type === selectedBangDreamSongType,
                ),
              };
            })
            .filter((band) => band.songs.length > 0);
          setSongs(filteredBands);
        } else if (
          selectedBangDreamSongBandName !== "" &&
          selectedBangDreamSongType === ""
        ) {
          const filteredSongs = bandSongs.filter((bandSong) => {
            return bandSong.band === selectedBangDreamSongBandName;
          });
          setSongs(filteredSongs);
        } else if (
          selectedBangDreamSongType !== "" &&
          selectedBangDreamSongBandName === ""
        ) {
          const filteredSongs = bandSongs
            .map((band) => {
              return {
                ...band,
                songs: band.songs.filter(
                  (song) => song.type === selectedBangDreamSongType,
                ),
              };
            })
            .filter((band) => band.songs.length > 0);
          setSongs(filteredSongs);
        }
      };
      getBangDreamSongs();
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }, [selectedBangDreamSongBandName, selectedBangDreamSongType]);
  // useEffect(() => {
  //   console.log("selectedBangDreamSongBandName", selectedBangDreamSongBandName);
  //   console.log("selectedBangDreamSongType", selectedBangDreamSongType);
  //   const getDatas = async () => {
  //     if (
  //       selectedBangDreamSongBandName === "" &&
  //       selectedBangDreamSongBandName === ""
  //     ) {
  //       const res = await getBangDreamSongs();
  //       setSongs(res);
  //     } else if (
  //       selectedBangDreamSongType === "original" &&
  //       selectedBangDreamSongBandName === ""
  //     ) {
  //       const res = await getBangDreamSongBySongType("original");
  //       setSongs(res);
  //     } else if (
  //       selectedBangDreamSongType === "cover" &&
  //       selectedBangDreamSongBandName === ""
  //     ) {
  //       const res = await getBangDreamSongBySongType("cover");
  //       setSongs(res);
  //     } else if (
  //       selectedBangDreamSongType === "extra" &&
  //       selectedBangDreamSongBandName === ""
  //     ) {
  //       const res = await getBangDreamSongBySongType("extra");
  //       setSongs(res);
  //     }
  //     const res = await getBangDreamSongByBandName(
  //       selectedBangDreamSongBandName,
  //       selectedBangDreamSongType
  //     );
  //     setSongs(res);
  //     console.log(res);
  //   };
  //   getDatas();
  //   console.log("songs", songs);
  // }, [selectedBangDreamSongBandName, selectedBangDreamSongType, songs]);
  const bangDreamSongTypes = [
    {
      type: "すべて",
      value: "",
    },
    {
      type: "オリジナル楽曲",
      value: "original",
    },
    {
      type: "カバー楽曲",
      value: "cover",
    },
    {
      type: "エクストラ楽曲",
      value: "extra",
    },
  ];

  // if (isLoading) return <Loading />;
  return (
    <div>
      <div className="mx-auto w-auto max-w-7xl ">
        <PageTitle title="MUSIC" japaneseTitle="ミュージック" />
      </div>
      <div className="mx-auto mb-24 w-auto max-w-5xl">
        <div>
          <div className="flex items-center gap-8 px-4 py-2 ">
            <div className="select-title bg-[linear-gradient(105.01deg,rgba(255,19,19,.49) 0,rgba(255,69,114,.14) .01%,rgba(255,101,138,.035) 94.79%),#fff1f4] rounded-lg px-[2.7rem] py-[1.2rem] text-[#ff3b72]">
              楽曲
            </div>
            <div className="flex items-center justify-center gap-[4.3rem]">
              {bangDreamSongTypes.map((type, index) => {
                return (
                  <div key={index} className="flex items-center gap-4">
                    <input
                      type="radio"
                      checked={selectedBangDreamSongType === type.value}
                      onChange={() =>
                        handleRadioBangDreamSongTypeClick(type.value)
                      }
                    />
                    <div className="yakuhanjp">{type.type}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center   gap-8 px-4 py-2 ">
            <div className="select-title bg-[linear-gradient(105.01deg,rgba(255,19,19,.49) 0,rgba(255,69,114,.14) .01%,rgba(255,101,138,.035) 94.79%),#fff1f4] rounded-lg px-[2.2rem] py-[2.7rem] text-[#ff3b72]">
              <div>バンド</div>
            </div>
            <div className="flex items-center justify-center ">
              <div className="grid grid-cols-5 gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    checked={selectedBangDreamSongBandName === ""}
                    onChange={() => handleRadioBangDreamSongBandNameClick("")}
                  />
                  <div className="yakuhanjp">すべて</div>
                </div>
                {bangDreamBandLogos.bangDreamBandLogos.map(
                  (bangDreamBandLogo, index) => {
                    // const bangDreamBandLogo =
                    //   bangDreamBandLogos.bangDreamBandLogos[index];
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <input
                          type="radio"
                          checked={
                            selectedBangDreamSongBandName ===
                            bangDreamBandLogo.name
                          }
                          onChange={() =>
                            handleRadioBangDreamSongBandNameClick(
                              bangDreamBandLogo.name,
                            )
                          }
                        />
                        <CldImage
                          width={1100}
                          height={1100}
                          className="w-[100px] "
                          alt={bangDreamBandLogo.name}
                          src={bangDreamBandLogo.image}
                        />
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </div>
          <div>
            {selectedBangDreamSongType === "original" ? (
              <SpecialSubTitle specialSubTitle="オリジナル楽曲" />
            ) : null}
            {selectedBangDreamSongType === "" ? (
              <SpecialSubTitle specialSubTitle="オリジナル楽曲" />
            ) : null}
            {songs.map((bandSong) => {
              return <BandSong bandSong={bandSong} songType={"original"} />;
            })}
            {selectedBangDreamSongType === "cover" ? (
              <SpecialSubTitle specialSubTitle="カバー楽曲" />
            ) : null}
            {selectedBangDreamSongType === "" ? (
              <SpecialSubTitle specialSubTitle="カバー楽曲" />
            ) : null}
            {songs.map((bandSong) => {
              return <BandSong bandSong={bandSong} songType={"cover"} />;
            })}
            {selectedBangDreamSongType === "extra" ? (
              <SpecialSubTitle specialSubTitle="エクストラ楽曲" />
            ) : null}
            {selectedBangDreamSongType === "" ? (
              <SpecialSubTitle specialSubTitle="エクストラ楽曲" />
            ) : null}
            {songs.map((bandSong) => {
              return <BandSong bandSong={bandSong} songType={"extra"} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandMusicPage;
