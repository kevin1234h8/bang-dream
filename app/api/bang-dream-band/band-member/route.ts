import databaseConnect from "@/lib/database";
import { logger } from "@/logger";
import BangDreamBandMember from "@/model/BangDreamBandMember";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await databaseConnect();
    const bangDreamBandMembers = await BangDreamBandMember.aggregate([
      {
        $lookup: {
          from: "bangdreambandlogos",
          localField: "bandMembers.band",
          foreignField: "name",
          as: "logo",
        },
      },
      {
        $unwind: "$logo",
      },
      {
        $project: {
          bandMembers: 1,
          logo: "$logo.image",
        },
      },
    ]);
    logger.info({ message: "Data retrieval was successful" });
    return NextResponse.json({ bangDreamBandMembers }, { status: 200 });
  } catch (err) {
    logger.error({ message: "Failed to retrieve data", error: err });
    return NextResponse.json(
      { message: "failed to retrive data" },
      { status: 200 }
    );
  }
};
