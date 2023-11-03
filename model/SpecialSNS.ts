import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
});

const SpecialSNSSchema = new mongoose.Schema(
  {
    band: {
      type: String,
    },
    members: {
      type: [MemberSchema],
    },
  },
  { timestamps: true }
);

const SpecialSNS =
  mongoose.models.SpecialSNS || mongoose.model("SpecialSNS", SpecialSNSSchema);
export default SpecialSNS;
