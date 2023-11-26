// import { process.env.NEXT_PUBLIC_BASE_API_URL } from "@/config";
import {
  BandMember,
  BandoriMembers,
  BangDreamBand,
  BangDreamBandLogo,
  BangDreamBandLogoIcon,
  BangDreamBandLogos,
  BangDreamBands,
  BangDreamMemberMainImage,
  BangDreamSongs,
  RandomBangDreamBandMember,
} from "@/type";
import { getBaseApiUrl } from "@/utils/apiUtils";

import axios from "axios";

export const getBangDreamBandDatas = async (): Promise<BandMember[] | null> => {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}api/bang-dream-band`,
  );
  return res.data.bangDreamBand;
};

export const getBangDreamBand = async (
  bandName: string,
): Promise<BangDreamBand[] | null> => {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}api/bang-dream-band/${bandName}`,
  );
  return res.data.bangDreamBand;
};

export const getBangDreamMember = async (
  bandName: string,
  characterName: string,
) => {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}api/bang-dream-band/${bandName}/${characterName}`,
  );
  return res.data.bandMember.bandMembers;
};

export const getBangDreamMemberMainImage = async (): Promise<
  BangDreamMemberMainImage[] | null
> => {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}api/bang-dream-member-main-image`,
    );
    return res.data;
  } catch {
    throw new Error("Error");
  }
};

export const getBangDreamBandLogo =
  async (): Promise<BangDreamBandLogos | null> => {
    if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
      return null;
    }
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}api/band-dream-band-logo`,
      );
      return res.data;
    } catch {
      throw new Error("Error");
    }
  };

export const getBangDreamBandLogoByBandName = async (
  bandName: string,
): Promise<BangDreamBandLogoIcon | null> => {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}api/band-dream-band-logo/${bandName}`,
    );
    return res.data;
  } catch {
    throw new Error("Error");
  }
};

let cachedBandMembers: any = null;

export const getRandomBangDreamBandMember = async () => {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return [null];
  }
  if (cachedBandMembers) {
    return cachedBandMembers;
  }
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}api/bang-dream-band/band-member`,
    );
    cachedBandMembers = res.data.bangDreamBandMembers;
    return cachedBandMembers;
  } catch (error) {
    console.error("Error fetching bandMembers:", error);
    throw error;
  }
};

export const getBangDreamBands = async (): Promise<BangDreamBands[] | null> => {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}api/bang-dream-band/band`,
    );
    return res.data.result.data;
  } catch {
    throw new Error("Error");
  }
};

// export const getBangDreamSongs = async (): Promise<BangDreamSongs[]> => {
//   try {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}api/bang-dream-band/songs`);
//     return res.data.result.data;
//   } catch {
//     throw new Error("Error");
//   }
// };

export const getBangDreamSongs = async (
  bandName: string,
  type: string,
): Promise<BangDreamSongs[] | null> => {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  try {
    console.log(bandName);
    console.log(type);
    let res;
    if (bandName === "" && type === "") {
      res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}api/bang-dream-band/songs`,
      );
    } else if (bandName !== "" && type === "") {
      res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}api/bang-dream-band/songs/${bandName}/${type}`,
      );
    } else if (bandName !== "") {
      res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}api/bang-dream-band/songs/${bandName}/`,
      );
    } else if (type !== "") {
      res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}api/bang-dream-band/songs/${type}/`,
      );
    }
    return res?.data.result.data;
  } catch {
    throw new Error("Error");
  }
};

export const getBangDreamSongBySongType = async (
  type: string,
): Promise<BangDreamSongs[] | null> => {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}api/bang-dream-band/songs/type/${type}`,
    );
    return res.data.result.data;
  } catch {
    throw new Error("Error");
  }
};
