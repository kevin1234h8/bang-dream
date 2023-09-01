import { StaticImageData } from "next/image";

type BandoriMembers = {
  id: number;
  name: string;
  japanese_name: string;
  image: string;
  square_image: string;
  i_band: string;
  school: string;
  i_school_year: string;
  romaji_CV: string;
  CV: string;
  birthday: string;
  food_like: string;
  food_dislike: string;
  i_astrological_sign: string;
  instrument: string;
  description: string;
};

type BandoriMembersApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: BandoriMember[];
};

type BandInfo = {
  band_name: string;
  band_japanese_name: string;
  band_member_image: StaticImageData;
  band_logo: StaticImageData;
  movie_url: string;
  URL: string
};
