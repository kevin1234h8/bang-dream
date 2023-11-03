import databaseConnect from "@/lib/database";
import SpecialMovie from "@/model/SpecialMovie";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await databaseConnect();
    const specialMovies = await SpecialMovie.find({ type: "mv" });
    return NextResponse.json({ specialMovies }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "failed" }, { status: 200 });
  }
};
