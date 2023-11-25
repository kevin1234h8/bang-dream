import mongoose from "mongoose";

const BangDreamBandSchema = new mongoose.Schema(
  {
    band: {
      type: String,
    },
    bandJapaneseName: {
      type: String,
    },
    bandAllMemberImage: {
      type: String,
    },
    movieUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const BangDreamBand =
  mongoose.models.BangDreamBand ||
  mongoose.model("BangDreamBand", BangDreamBandSchema);

export default BangDreamBand;
