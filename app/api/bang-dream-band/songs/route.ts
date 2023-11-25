import BandSong from "@/model/BandMusic";
import { NextRequest, NextResponse } from "next/server";
import databaseConnect from "@/lib/database";
import { request } from "http";
import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import {
  generatePostErrorMessage,
  generatePostSuccessMessage,
  generateSuccessGetMessage,
} from "@/utils/messageUtils";
import { logger } from "@/logger";

export async function GET() {
  // try {

  await databaseConnect();
  const bangDreamSongs = await BandSong.find();
  const message = JSON.parse(generateSuccessGetMessage(bangDreamSongs));
  logger.info(message);
  return NextResponse.json({ result: message }, { status: 200 });
  // }catch(err) {
  //     const message = JSON.parse(genereate());
  //     logger.info(message);
  //     return NextResponse.json({ result: message }, { status: 200 });
  // }
}

export async function POST(request: NextRequest) {
  try {
    await databaseConnect();
    const body = await request.json();
    const newBandSong = await BandSong.create(body);
    await (await newBandSong).save();
    const message = JSON.parse(
      generatePostSuccessMessage(
        "Successfully created a new entry for Bang Dream Song."
      )
    );
    logger.info(message);
    return NextResponse.json(
      {
        result: message,
      },
      { status: 200 }
    );
  } catch (error) {
    const message = JSON.parse(
      generatePostErrorMessage(
        "Failed to create a new entry for Bang Dream Song"
      )
    );
    logger.warn(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
