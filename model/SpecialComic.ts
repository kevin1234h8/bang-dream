import mongoose from "mongoose";

const SpecialComicSchema = new mongoose.Schema(
  {
    band: {
      type: String,
    },
    cover: {
      type: String,
    },
    summary: {
      type: String,
    },
    content: [String],
  },
  { timestamps: true }
);

const SpecialComic =
  mongoose.models.SpecialComic ||
  mongoose.model("SpecialComic", SpecialComicSchema);
export default SpecialComic;
