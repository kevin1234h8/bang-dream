import databaseConnect from "@/lib/database";
import BangDreamBand from "@/model/BangDreamBand";
import { sanitizeString } from "@/utils/functionsUtils";
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
    const bangDreamBand = await BangDreamBand.find({
      "bandMembers.band": bandName,
    });
    return NextResponse.json({ bangDreamBand }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Data not found" }, { status: 404 });
  }
}
