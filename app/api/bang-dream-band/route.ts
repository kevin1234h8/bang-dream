import BangDreamBand from "@/model/bangDreamBand";
import { NextRequest, NextResponse } from "next/server";
import databaseConnect from "@/lib/database";
import { request } from "http";

export async function GET() {
  await databaseConnect();
  const bangDreamBand = await BangDreamBand.find();
  return NextResponse.json({ bangDreamBand }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const datas = await request.json();
  await databaseConnect();
  const result = await BangDreamBand.create(datas);
  return NextResponse.json({ result }, { status: 200 });
}
