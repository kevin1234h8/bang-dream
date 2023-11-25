import databaseConnect from "@/lib/database";
import { logger } from "@/logger";
import FrequentlyAskQuestion from "@/model/FrequentlyAskQuestion";
import {
  generatePostErrorMessage,
  generatePostSuccessMessage,
  generateSuccessGetMessage,
} from "@/utils/messageUtils";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await databaseConnect();
    const frequentlyAskQuestions = await FrequentlyAskQuestion.find();

    logger.debug(JSON.parse(generateSuccessGetMessage(frequentlyAskQuestions)));
    return NextResponse.json(
      {
        result: JSON.parse(generateSuccessGetMessage(frequentlyAskQuestions)),
      },
      { status: 200 },
    );
  } catch (err: any) {
    logger.warn(err.message);
  }
}

export async function POST(request: NextRequest) {
  try {
    await databaseConnect();
    const body = await request.json();
    const newFrequentlyAskQuestion = await FrequentlyAskQuestion.create(body);
    await (await newFrequentlyAskQuestion).save();
    const message = generatePostSuccessMessage(
      "Successfully created a new entry for Bang Dream Band.",
    );
    logger.info(message);
    return NextResponse.json(
      {
        result: newFrequentlyAskQuestion,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    const message = generatePostErrorMessage(
      "Failed to create a new entry for Bang Dream Band",
    );
    logger.warn(message);
    return NextResponse.json(generatePostErrorMessage(message), {
      status: 500,
    });
  }
}
