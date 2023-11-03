import databaseConnect from "@/lib/database";
import BangDreamMemberMainImage from "@/model/BangDreamMemberMainImage";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await databaseConnect();
    const body = await req.json();
    const newBangDreamMemberMainImage = await BangDreamMemberMainImage.create(
      body
    );
    const bangDreamMemberMainImage = await newBangDreamMemberMainImage.save();
    return NextResponse.json({ bangDreamMemberMainImage }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await databaseConnect();
    const bangDreamMemberMainImage = await BangDreamMemberMainImage.find();
    return NextResponse.json({ bangDreamMemberMainImage }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
