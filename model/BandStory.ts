import mongoose from "mongoose";

const BandStorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: [String],
    },
    bandName: {
      type: String,
    },
    src: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  { timestamps: true }
);

const BandStory =
  mongoose.models.BandStory || mongoose.model("BandStory", BandStorySchema);
export default BandStory;
