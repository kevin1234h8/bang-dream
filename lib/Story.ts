import { BASE_URL } from "@/config";
import { BandStory } from "@/type";
import axios from "axios";

export const getBandStories = async (): Promise<BandStory[] | null> => {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}api/story`,
    );
    return res.data.bandStories;
  } catch {
    throw new Error("Error");
  }
};
