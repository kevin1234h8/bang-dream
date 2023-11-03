import databaseConnect from "@/lib/database";
import BandStory from "@/model/BandStory";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await databaseConnect();
    const body = await req.json();
    const newBandStory = await BandStory.create(body);
    await newBandStory.save();
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "failed" }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await databaseConnect();
    const bandStories = await BandStory.aggregate([
      {
        $lookup: {
          from: "bangdreambandlogos",
          localField: "url",
          foreignField: "redirect",
          as: "bandInfo",
        },
      },
      {
        $unwind: "$bandInfo",
      },
      {
        $project: {
          _id: 1,
          title: 1,
          description: 1,
          bandName: 1,
          src: 1,
          url: 1,
          image: "$bandInfo.image",
          bandIndex: "$index",
        },
      },
    ]);
    return NextResponse.json({ bandStories }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "failed" }, { status: 500 });
  }
};
