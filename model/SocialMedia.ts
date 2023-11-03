import { timeStamp } from "console";
import mongoose from "mongoose";

const SocialMediaSchema = new mongoose.Schema(
  {
    sns: {
      type: String,
    },
    image: {
      type: String,
    },
    redirectUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const SocialMedia =
  mongoose.models.SocialMedia ||
  mongoose.model("SocialMedia", SocialMediaSchema);
export default SocialMedia;
