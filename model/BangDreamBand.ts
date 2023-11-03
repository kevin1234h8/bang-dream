import mongoose from "mongoose";

const BandMemberSchema = new mongoose.Schema({
  bandMembers: {
    name: String,
    japaneseName: String,
    japaneseNameHiragana: String,
    birthday: String,
    description: String,
    image: [
      {
        outfitSeasonOne: [String],
        outfitSeasonTwo: [String],
        outfitSeasonThree: [String],
      },
    ],
    school: String,
    schoolYear: String,
    class: String,
    sign: String,
    favoriteFood: [String],
    hatedFood: [String],
    band: String,
    cv: String,
    role: String,
    card: String,
    introductionMovie: String,
    height: Number,
    hobby: [String],
    thumbnail: String,
  },
});

// const BangDreamBandSchema = new mongoose.Schema({
//   bandMembers: BandMemberSchema,
// });

const BangDreamBand =
  mongoose.models.BangDreamBandMember ||
  mongoose.model("BangDreamBandMember", BandMemberSchema);

export default BangDreamBand;
