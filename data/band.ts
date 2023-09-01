import PoppinPartyMembers from "@/assets/poppin-party/poppin-party-all-member.jpg";
import PoppinPartyLogo from "@/assets/poppin-party/poppin-party-logo.svg";
import AfterglowMembers from "@/assets/afterglow/afterglow.png";
import AfterglowLogo from "@/assets/afterglow/afterglow-logo.svg";
import PastelPalettesMembers from "@/assets/pastel-pallete/pastel-pallete-all-member.png";
import PastelPalettesLogo from "@/assets/pastel-pallete/pastel-palettes-logo.svg";
import RoseliaMembers from "@/assets/roselia/roselia-all-member.jpg";
import RoseliaLogo from "@/assets/roselia/roselia-logo.svg";
import HelloHappyWorldMembers from "@/assets/hello-happy-world/hello-happy-world-all-member.jpg";
import HelloHappyWorldLogo from "@/assets/hello-happy-world/hello-happy-world-logo.svg";
import MorfonicaMembers from "@/assets/morfonica/morfonica-all-member.jpg";
import MorfonicaLogo from "@/assets/morfonica/morfonica-logo.svg";
import RaiseASuilenMembers from "@/assets/raise-a-suilen/raise-a-suilen-all-member.png";
import RaiseASuilenLogo from "@/assets/raise-a-suilen/raise-a-suilen-logo.svg";
import { BandInfo } from "@/type";

const bands: BandInfo[] = [
  {
    band_name: "Poppin Party",
    band_japanese_name: "ポッピンパーティー",
    band_member_image: PoppinPartyMembers,
    band_logo: PoppinPartyLogo,
    movie_url: "https://www.youtube.com/embed/Zz3iJejwNuI",
    URL: "/character/poppin-party/toyama-kasumi",
  },
  {
    band_name: "Afterglow",
    band_japanese_name: "アフターグロウ",
    band_member_image: AfterglowMembers,
    band_logo: AfterglowLogo,
    movie_url: "https://www.youtube.com/embed/Y-FwCt8B8Dg",
    URL: "/character/poppin-party",
  },
  {
    band_name: "Pastel＊Palettes",
    band_japanese_name: "パステルパレット",
    band_member_image: PastelPalettesMembers,
    band_logo: PastelPalettesLogo,
    movie_url: "https://www.youtube.com/embed/gQY6596sZ5c",
    URL: "/character/poppin-party",
  },
  {
    band_name: "Roselia",
    band_japanese_name: "ろセリア",
    band_member_image: RoseliaMembers,
    band_logo: RoseliaLogo,
    movie_url: "https://www.youtube.com/embed/iYBt-rlYu1A",
    URL: "/character/poppin-party",
  },
  {
    band_name: "Hello Happy World",
    band_japanese_name: "ハロー、ハッピーワールド！",
    band_member_image: HelloHappyWorldMembers,
    band_logo: HelloHappyWorldLogo,
    movie_url: "https://www.youtube.com/embed/iYBt-rlYu1A",
    URL: "/character/poppin-party",
  },
  {
    band_name: "Morfonica",
    band_japanese_name: "モルフォニカ ",
    band_member_image: MorfonicaMembers,
    band_logo: MorfonicaLogo,
    movie_url: "https://www.youtube.com/embed/GEeC6ijp8wg",
    URL: "/character/poppin-party",
  },
  {
    band_name: "Raise A Suilen",
    band_japanese_name: "モルフォニカ ",
    band_member_image: RaiseASuilenMembers,
    band_logo: RaiseASuilenLogo,
    movie_url: "https://www.youtube.com/embed/aMWKW_UvK6M",
    URL: "/character/poppin-party",
  },
];

export default bands;
