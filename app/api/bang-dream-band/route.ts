import BangDreamBand from "@/model/BangDreamBand";
import { NextRequest, NextResponse } from "next/server";
import databaseConnect from "@/lib/database";
import { request } from "http";
import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  await databaseConnect();
  const bangDreamBand = await BangDreamBand.find({});
  return NextResponse.json({ bangDreamBand }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    await databaseConnect();
    const formData = await request.json();
    const newBangDreamBandData = await BangDreamBand.create(formData);
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
