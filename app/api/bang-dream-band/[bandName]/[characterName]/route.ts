import databaseConnect from "@/lib/database";
import BangDreamBand from "@/model/BangDreamBandMember";
import { sanitizeString } from "@/utils/stringUtils";
import { HttpStatusCode } from "axios";
// import { useRouter } from "next/router";
import { NextResponse } from "next/server";

type GetRequestParams = {
  params: {
    bandName: string;
    characterName: string;
  };
};

export async function GET(req: Request, context: GetRequestParams) {
  const { characterName } = context.params;
  try {
    await databaseConnect();
    const bandMember = await BangDreamBand.findOne({
      "bandMembers.name": sanitizeString(characterName),
    });
    return NextResponse.json(
      {
        bandMember: bandMember,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Data not found" },
      { status: HttpStatusCode.NotFound }
    );
  }
}
