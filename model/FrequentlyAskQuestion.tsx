import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    question: {
      type: String,
    },
    answer: {
      type: [String],
    },
  },
  { timestamps: true },
);
const frequentlyAskQuestionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    datas: [dataSchema],
  },
  { timestamps: true },
);

const FrequentlyAskQuestion =
  mongoose.models.FrequentlyAskQuestion ||
  mongoose.model("FrequentlyAskQuestion", frequentlyAskQuestionSchema);
export default FrequentlyAskQuestion;
