import { BangDreamSongs } from "@/type";
import React from "react";

type BandSongsProps = {
  selectedBangDreamSongBandName: string;
  selectedBangDreamSongType: string;
  songs: BangDreamSongs[];
};

const BandSongs = ({
  selectedBangDreamSongBandName,
  selectedBangDreamSongType,
  songs,
}: BandSongsProps) => {
  return (
    <div>
      {songs.length > 0 ? (
        <div>
          {" "}
          {songs.map((bandSong) => {
            return (
              <div>
                <div>
                  {bandSong.songs.map((song) => {
                    return <div>{song.singer}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>該当の楽曲は見つかりませんでした</div>
      )}
    </div>
  );
};

export default BandSongs;
