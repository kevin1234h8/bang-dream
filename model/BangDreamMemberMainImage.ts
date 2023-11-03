import mongoose from "mongoose";

const BangDreamMemberMainImageSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const BangDreamMemberMainImage =
  mongoose.models.BangDreamMemberMainImage ||
  mongoose.model("BangDreamMemberMainImage", BangDreamMemberMainImageSchema);

export default BangDreamMemberMainImage;
