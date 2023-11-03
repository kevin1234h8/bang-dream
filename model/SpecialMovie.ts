import mongoose from "mongoose";

const SpecialMovieSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
    },
    youtubeVideoUrl: {
      type: String,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

const SpecialMovie =
  mongoose.models.SpecialMovie ||
  mongoose.model("SpecialMovie", SpecialMovieSchema);
export default SpecialMovie;
