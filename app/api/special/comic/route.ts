import databaseConnect from "@/lib/database";
import SpecialComic from "@/model/SpecialComic";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const projection = { content: 0 };
  try {
    await databaseConnect();
    const bandComics = await SpecialComic.find({}, projection);
    return NextResponse.json({ bandComics }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 200 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await databaseConnect();
    const body = await req.json();
    const newSpecialComic = await SpecialComic.create(body);
    await newSpecialComic.save();
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "failed" }, { status: 200 });
  }
};
