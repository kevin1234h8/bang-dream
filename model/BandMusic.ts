import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  singer: {
    type: String,
  },
  lyric: {
    type: String,
  },
composition: {
    type: String,
  },
  arrangement: {
    type: String,
  },
  type: {
    type: String,
  },
});

const BandSongSchema = new mongoose.Schema(
  {
    band: {
      type: String,
    },
    songs: {
      type: [SongSchema],
    },
  },
  { timestamps: true }
);

const BandSong =
  mongoose.models.BandSong || mongoose.model("BandSong", BandSongSchema);
export default BandSong;
