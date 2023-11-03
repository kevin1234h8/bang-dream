import databaseConnect from "@/lib/database";
import SpecialMovie from "@/model/SpecialMovie";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await databaseConnect();
    const specialMovies = await SpecialMovie.find({ type: "pv" });
    return NextResponse.json({ specialMovies }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "failed" }, { status: 200 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await databaseConnect();
    const body = await req.json();
    const newSpecialMovie = await SpecialMovie.create(body);
    await newSpecialMovie.save();
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "failed" }, { status: 200 });
  }
};
