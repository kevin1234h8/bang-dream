import { BASE_URL } from "@/config";
import { SocialMedia } from "@/type";
import axios from "axios";

export const getSocialMedia = async (): Promise<SocialMedia[]> => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}api/social-media`);
    return res.data.socialMedia;
  } catch (err) {
    throw new Error("Failed to fetch social media data");
  }
};
