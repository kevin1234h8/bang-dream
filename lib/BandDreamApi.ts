import { BASE_URL } from "@/config";
import {
  BandMember,
  BandoriMembers,
  BangDreamBand,
  BangDreamBandLogo,
  BangDreamBandLogoIcon,
  BangDreamBandLogos,
  BangDreamMemberMainImage,
  RandomBangDreamBandMember,
} from "@/type";
import axios from "axios";

export const getBangDreamBandDatas = async (): Promise<BandMember[]> => {
  const res = await axios.get("http://localhost:3000/api/bang-dream-band");
  return res.data.bangDreamBand;
};

export const getBangDreamBand = async (
  bandName: string
): Promise<BangDreamBand[]> => {
  const res = await axios.get(
    `http://localhost:3000/api/bang-dream-band/${bandName}`
  );
  return res.data.bangDreamBand;
};

export const getBangDreamMember = async (
  bandName: string,
  characterName: string
) => {
  const res = await axios.get(
    `http://localhost:3000/api/bang-dream-band/${bandName}/${characterName}`
  );
  return res.data.bandMember.bandMembers;
};

export const getBangDreamMemberMainImage = async (): Promise<
  BangDreamMemberMainImage[]
> => {
  try {
    const res = await axios.get(`${BASE_URL}api/bang-dream-member-main-image`);
    return res.data;
  } catch {
    throw new Error("Error");
  }
};

export const getBangDreamBandLogo = async (): Promise<BangDreamBandLogos> => {
  try {
    const res = await axios.get(`${BASE_URL}api/band-dream-band-logo`);
    return res.data;
  } catch {
    throw new Error("Error");
  }
};

export const getBangDreamBandLogoByBandName = async (
  bandName: string
): Promise<BangDreamBandLogoIcon> => {
  try {
    const res = await axios.get(
      `${BASE_URL}api/band-dream-band-logo/${bandName}`
    );
    return res.data;
  } catch {
    throw new Error("Error");
  }
};

export const getRandomBangDreamBandMember = async (): Promise<
  RandomBangDreamBandMember[]
> => {
  try {
    const res = await axios.get(`${BASE_URL}api/bang-dream-band/band`);
    return res.data.bangDreamBand;
  } catch {
    throw new Error("Error");
  }
};


