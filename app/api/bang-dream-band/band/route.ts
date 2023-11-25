import databaseConnect from "@/lib/database";
import { logger } from "@/logger";
import BangDreamBand from "@/model/BangDreamBand";
import {
  generatePostErrorMessage,
  generatePostSuccessMessage,
  generateSuccessGetMessage,
} from "@/utils/messageUtils";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await databaseConnect();
  const bangDreamBands = await BangDreamBand.aggregate([
    {
      $lookup: {
        from: "bangdreambandlogos",
        localField: "band",
        foreignField: "name",
        as: "result",
      },
    },

    {
      $unwind: "$result",
    },
    {
      $project: {
        _id: 1,
        band: 1,
        bandJapaneseName: 1,
        bandAllMemberImage: 1,
        movieUrl: 1,
        image: "$result.image",
      },
    },
  ]);

  logger.debug(JSON.parse(generateSuccessGetMessage(bangDreamBands)));
  return NextResponse.json(
    {
      result: JSON.parse(generateSuccessGetMessage(bangDreamBands)),
    },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  try {
    await databaseConnect();
    const body = await request.json();
    const newBangDreamBandData = await BangDreamBand.create(body);
    await (await newBangDreamBandData).save();
    const message = generatePostSuccessMessage(
      "Successfully created a new entry for Bang Dream Band."
    );
    logger.info(message);
    return NextResponse.json(
      {
        result: newBangDreamBandData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    const message = generatePostErrorMessage(
      "Failed to create a new entry for Bang Dream Band"
    );
    logger.warn(message);
    return NextResponse.json(generatePostErrorMessage(message), {
      status: 500,
    });
  }
}
