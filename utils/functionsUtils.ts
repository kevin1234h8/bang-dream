import { BandList } from "@/type";

export const sanitizeString = (string: string) => {
  return string.split("-").join(" ").trimEnd();
};

export const removeHyphens = (string: string) => {
  if (string.includes("-")) {
    return string.replace(/-/g, " ");
  } else {
    return string;
  }
};

export const addHyphen = (string: string) => {
  return string.replace(/\s+/g, "-");
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const capitalizeFirstLetterOfEachWord = (string: string) => {
  let words = string.split(" ");
  let capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
};

export const convertToUppercase = (string: string) => {
  return string.toUpperCase();
};

export const arrayToStringWithCommas = (array: string[]) => {
  if (!Array.isArray(array)) {
    return "";
  }
  return array.join("、");
};

export const getYoutubeVideoId = (embedUrl: string) => {
  return embedUrl.split("/").pop();
};

export const getYoutubeVideoIdLong = (embedUrl: string) => {
  const url = new URL(embedUrl);
  return url.searchParams.get("v");
};
