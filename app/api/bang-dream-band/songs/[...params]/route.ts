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
    params: [string, string];
  };
};

export async function GET(req: Request, context: GetRequestParams) {
  try {
    await databaseConnect();
    const [bandName, type] = context.params.params;
    console.log(bandName, type);
    let bangDreamSongs = await BangDreamSong.find();
    if (bandName || type)
      bangDreamSongs = await BangDreamSong.aggregate([
        {
          $unwind: "$songs", // Unwind the "songs" array
        },
        {
          $match: {
            band: bandName, // Match the "band"
            "songs.type": type, // Match the "type"
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
