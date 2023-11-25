import { BandList, SpecialSNSMember, SpecialSNSMemberDetails } from "@/type";
import { capitalizeFirstLetter, convertToUppercase } from "./stringUtils";

export const changePoppinPartyBandName = (bandName: string) => {
  return bandName.replace(bandName, "Poppin'Party");
};

export const addJapaneseNameToMembers = (
  members: SpecialSNSMember[],
  memberDetails: SpecialSNSMemberDetails[]
) => {
  const nameToJapaneseNameMap = new Map();

  memberDetails.forEach((detail) => {
    nameToJapaneseNameMap.set(
      detail.bandMembers.name,
      detail.bandMembers.japaneseName
    );
  });

  members.forEach((member) => {
    const japaneseName = nameToJapaneseNameMap.get(member.name);
    if (japaneseName) {
      member.japaneseName = japaneseName;
    }
  });

  return members;
};

export const editBandName = (bandName: string) => {
  switch (bandName) {
    case "hello happy world":
      return "ハロー、ハッピーワールド";
    case "raise a suilen":
      return convertToUppercase(bandName);
    case "mygo":
      return "MyGO!!!!!";
    case "poppin party":
      return changePoppinPartyBandName(bandName);
    default:
      return capitalizeFirstLetter(bandName);
  }
};

export const getPreviousAndNextBandName = (
  currentBandName: string,
  bandList: BandList[]
) => {
  const currentBandIndex = bandList.findIndex(
    (band) => band.code === currentBandName
  );

  if (currentBandIndex === -1) {
    return {
      previousBandName: null,
      nextBandName: null,
    };
  }

  const previousBandIndex =
    (currentBandIndex - 1 + bandList.length) % bandList.length;
  const nextBandIndex = (currentBandIndex + 1) % bandList.length;
  return {
    previousBandName: bandList[previousBandIndex],
    nextBandName: bandList[nextBandIndex],
  };
};

export const formatBandName = (bandName: string) => {
  switch (bandName) {
    case "poppin-party":
      return (bandName = "Poppin'Party");
    case "afterglow":
      return (bandName = "Afterglow");
    case "pastel-palettes":
    case "Pastel*Palettes":
    case "Pastel%20Palettes":
      return (bandName = "Pastel Palettes");
    case "roselia":
      return (bandName = "Roselia");
    case "hello-happy-world":
      return (bandName = "Hello Happy World");
    case "morfonica":
      return (bandName = "Morfonica");
    case "raise-a-suilen":
      return (bandName = "Raise A Suilen");
    case "mygo":
      return (bandName = "MyGo");
    default:
      console.log(bandName);
      return bandName;
  }
};
