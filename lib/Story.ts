import { BASE_URL } from "@/config";
import { BandStory } from "@/type";
import axios from "axios";

export const getBandStories = async (): Promise<BandStory[]> => {
  try {
    const res = await axios.get(`${BASE_URL}api/story`);
    return res.data.bandStories;
  } catch {
    throw new Error("Error");
  }
};
