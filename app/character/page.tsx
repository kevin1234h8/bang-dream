import { Swiper, SwiperSlide } from "swiper/react";
import { Howl, Howler } from "howler";
// import "swiper/css";
import Image from "next/image";
import BangDreamAppIcon from "@/assets/bang-dream-app-icon.jpg";
import { useEffect, useRef, useState } from "react";
import PoppinPartyMember from "@/assets/poppin-party/poppin-party-all-member.jpg";
import PoppinPartyLogo from "@/assets/poppin-party/poppin-party-logo.png";
import YoutubeIcon from "@/assets/youtube.svg";
import mp3File from "@/assets/Returns.mp3";
import ArrowDown from "@/assets/arrow-down.svg";
import data from "@/data/band";
import CharacterBackground from "@/assets/character-background.png";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import CharacterPage from "@/components/page/CharacterPage";

export default function Home() {
  // const [isPoppinPartyIFrameOpen, setIsPoppinPartyIFrameOpen] =
  //   useState<boolean>(false);
  // const handlePoppinPartyIFrame = () => {
  //   setIsPoppinPartyIFrameOpen(!isPoppinPartyIFrameOpen);
  // };

  // var sound = new Howl({
  //   src: [
  //     "https://res.cloudinary.com/deszjgxlm/video/upload/v1695409060/y2mate.com_-_Returns_hse3fc.mp3",
  //   ],
  // });
  // const play = () => {
  //   sound.play();
  // };
  // const pause = () => {
  //   sound.pause();
  // };

  // const bandDreamMembers = await getBandDreamMember();
  // console.log(bandDreamMembers);
  return <CharacterPage />;
}
