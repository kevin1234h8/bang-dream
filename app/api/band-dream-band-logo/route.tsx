import BangDreamBandLogo from "@/model/BangDreamBandLogo";
import { NextRequest, NextResponse } from "next/server";
import databaseConnect from "@/lib/database";

export async function GET() {
  await databaseConnect();
  const bangDreamBandLogos = await BangDreamBandLogo.find();
  return NextResponse.json({ bangDreamBandLogos }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    await databaseConnect();
    const formData = await request.json();
    const newBangDreamBandData = await BangDreamBandLogo.create(formData);
    await (await newBangDreamBandData).save();
    return NextResponse.json(
      {
        result: newBangDreamBandData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred " }, { status: 500 });
  }
}
