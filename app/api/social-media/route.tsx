import databaseConnect from "@/lib/database";
import SocialMedia from "@/model/SocialMedia";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await databaseConnect();
    const socialMedia = await SocialMedia.find();
    return NextResponse.json({ socialMedia }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await databaseConnect();
    const body = await req.json();
    console.log("body", body);
    const newSocialMedia = await SocialMedia.create(body);
    const saveSocialMedia = await newSocialMedia.save();
    return NextResponse.json({ socialMedia: saveSocialMedia }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
