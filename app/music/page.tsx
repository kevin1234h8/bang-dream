import BandSongPage from "@/components/page/BandSongPage";
import {
  getBangDreamBandLogo,
  getBangDreamSongs,
} from "@/lib/BangDreamApiHandler";
import React from "react";
export const revalidate = 10;
const page = async () => {
  const bandSongDatas = await getBangDreamSongs("", "");
  const bangDreamBandLogoDatas = await getBangDreamBandLogo();
  const [bandSongs, bangDreamBandLogos] = await Promise.all([
    bandSongDatas,
    bangDreamBandLogoDatas,
  ]);

  return (
    <BandSongPage
      bandSongs={bandSongs}
      bangDreamBandLogos={bangDreamBandLogos}
    />
  );
};

export default page;
