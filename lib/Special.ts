import { BASE_URL } from "@/config";
import { SpecialComic, SpecialMovie, SpecialSNS } from "@/type";
import axios from "axios";

export const getSpecialSNS = async (): Promise<SpecialSNS[]> => {
  try {
    const res = await axios.get(`${BASE_URL}api/special/sns`);
    return res.data.specialSNS;
  } catch (err) {
    throw new Error("Failed to fetch special sns data");
  }
};

export const getSpecialPVMovies = async (): Promise<SpecialMovie[]> => {
  try {
    const res = await axios.get(`${BASE_URL}api/special/movie/pv`);
    return res.data.specialMovies;
  } catch (err) {
    throw new Error("Failed to fetch special sns data");
  }
};

export const getSpecialMVMovies = async (): Promise<SpecialMovie[]> => {
  try {
    const res = await axios.get(`${BASE_URL}api/special/movie/mv`);
    return res.data.specialMovies;
  } catch (err) {
    throw new Error("Failed to fetch special sns data");
  }
};

export const getSpecialPastelLifeMovies = async (): Promise<SpecialMovie[]> => {
  try {
    const res = await axios.get(`${BASE_URL}api/special/movie/pastel-life`);
    return res.data.specialMovies;
  } catch (err) {
    throw new Error("Failed to fetch special sns data");
  }
};

export const getSpecialComics = async (): Promise<SpecialComic[]> => {
  try {
    const res = await axios.get(`${BASE_URL}api/special/comic`);
    return res.data.bandComics;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const getSpecialComic = async (
  bandName: string
): Promise<SpecialComic> => {
  try {
    const res = await axios.get(`${BASE_URL}api/special/comic/${bandName}`);
    return res.data.bandComic;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
