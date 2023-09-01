import { BandoriMembers } from "@/type";
import axios from "axios";

export const getBandDreamMember = async (): Promise<BandoriMembers[]> => {
  const res = await axios.get("https://bandori.party/api/members/");
  return res.data.results;
};
