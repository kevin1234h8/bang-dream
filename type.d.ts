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
  URL: string;
};

type BandMember = {
  name: string;
  japaneseName: string;
  japaneseNameHiragana: string;
  birthday: string;
  description: string;
  image: {
    outfitSeasonOne: string[];
    outfitSeasonTwo: string[];
    outfitSeasonThree: string[];
    _id: string;
  }[];
  school: string;
  schoolYear: string;
  class: string;
  sign: string;
  favoriteFood: string[];
  hatedFood: string[];
  band: string;
  cv: string;
  role: string;
  card: string;
  introductionMovie: string;
  height: number;
  hobby: string[];
  thumbnail: string;
  _id: string;
};

type BangDreamBand = {
  bandMembers: BandMember;
};

type RandomBangDreamBandMember = {
  _id: string;
  bandMembers: BandMember;
  logo: string;
};

type SpecialSNSMemberDetails = {
  _id: string;
  bandMembers: BandMember;
};

type SocialMedia = {
  _id: string;
  sns: string;
  image: string;
  redirectUrl: string;
};

type BangDreamMemberMainImage = {
  image: string;
};

type BandList = {
  bandName: string;
  code: string;
  url: string;
};

type BangDreamBandLogos = {
  bangDreamBandLogos: BangDreamBandLogo[];
};

type BangDreamBandLogoIcon = {
  bangDreamBandLogo: BangDreamBandLogo;
};

type BangDreamBandLogo = {
  _id: string;
  name: string;
  image: string;
  redirect: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  video: string;
  youtube: string;
};

type BandStory = {
  title: string;
  description: string[];
  bandName: string;
  src: string;
  url: string;
  image: string;
};

type MusicPlaying = {
  title: string;
  artist: string;
};

type SpecialSNSMember = {
  name: string;
  image: string;
  japaneseName: string;
};

type SpecialSNS = {
  _id: string;
  band: string;
  members: SpecialSNSMember[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  memberDetails: SpecialSNSMemberDetails[];
};

type SpecialMovie = {
  _id: string;
  thumbnail: string;
  youtubeVideoUrl: string;
  description: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type SpecialComic = {
  _id: string;
  band: string;
  cover: string;
  summary: string;
  content: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
