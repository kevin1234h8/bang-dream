import databaseConnect from "@/lib/database";
import { logger } from "@/logger";
import BangDreamSong from "@/model/BandMusic";
import {
  generateGetErrorMessage,
  generateSuccessGetMessage,
} from "@/utils/messageUtils";
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
    const bangDreamSongs = await BangDreamSong.aggregate([
      {
        $unwind: "$songs",
      },
      {
        $match: {
          band: bandName,
        },
      },
      {
        $group: {
          _id: "$_id",
          band: { $first: "$band" },
          songs: { $push: "$songs" },
        },
      },
    ]);
    const message = JSON.parse(generateSuccessGetMessage(bangDreamSongs));
    logger.info(message);
    return NextResponse.json({ result: message }, { status: 200 });
  } catch {
    const message = JSON.parse(generateGetErrorMessage("Resource not found"));
    logger.warn(message);
    return NextResponse.json({ message }, { status: 404 });
  }
}
