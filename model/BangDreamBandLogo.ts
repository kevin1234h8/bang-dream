import mongoose from "mongoose";

const BangDreamBandLogoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    redirect: {
      type: String,
    },
    video: {
      type: String,
    },
  },
  { timestamps: true }
);

const BangDreamBandLogo =
  mongoose.models.BangDreamBandLogo ||
  mongoose.model("BangDreamBandLogo", BangDreamBandLogoSchema);

export default BangDreamBandLogo;
