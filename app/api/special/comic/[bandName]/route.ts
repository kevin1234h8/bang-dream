import databaseConnect from "@/lib/database";
import SpecialComic from "@/model/SpecialComic";
import { NextRequest, NextResponse } from "next/server";

type GetRequestParams = {
  params: {
    bandName: string;
  };
};

export const GET = async (req: NextRequest, context: GetRequestParams) => {
  try {
    const { bandName } = context.params;
    await databaseConnect();
    const bandComic = await SpecialComic.findOne({ band: bandName });
    return NextResponse.json({ bandComic }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 200 });
  }
};
