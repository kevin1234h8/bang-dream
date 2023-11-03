import databaseConnect from "@/lib/database";
import SpecialSNS from "@/model/SpecialSNS";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await databaseConnect();
    const specialSNS = await SpecialSNS.aggregate([
      {
        $lookup: {
          from: "bangdreambandmembers",
          localField: "band",
          foreignField: "bandMembers.band",
          as: "memberDetails",
        },
      },
    ]);
    return NextResponse.json({ specialSNS }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "failed" }, { status: 200 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await databaseConnect();
    const body = await req.json();
    const newSpecialSNS = await SpecialSNS.create(body);
    await newSpecialSNS.save();
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "failed" }, { status: 200 });
  }
};
