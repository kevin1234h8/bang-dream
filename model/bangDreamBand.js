import { timeStamp } from "console";
import mongoose from "mongoose";

const BangDreamBandSchema = new mongoose.Schema(
  {
    bangDream: [
      {
        bandName: String,
        bandMembers: [
          {
            name: String,
            japaneseName: String,
            birthday: Date,
            images: Array,
            band: String,
            cv: String,
            instrument: String,
            instrumentImage: String,
            description: String,
            introductionMovie: String,
          },
        ],
        song: Array,
      },
    ],
  },
  { timestamps: true }
);

const BangDreamBand =
  mongoose.models.BangDreamBand ||
  mongoose.model("BangDreamBand", BangDreamBandSchema);

export default BangDreamBand;
