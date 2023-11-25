import databaseConnect from "@/lib/database";
import BangDreamBandLogo from "@/model/BangDreamBandLogo";
import { sanitizeString } from "@/utils/stringUtils";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";

type GetRequestParams = {
  params: {
    bandName: string;
  };
};

export async function GET(req: Request, context: GetRequestParams) {
  try {
    const { bandName } = context.params;
    await databaseConnect();
    const bangDreamBandLogo = await BangDreamBandLogo.findOne({
      name: bandName,
    });
    return NextResponse.json({ bangDreamBandLogo }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Data not found" }, { status: 404 });
  }
}
