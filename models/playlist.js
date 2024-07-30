import mongoose from "mongoose";
const schema = mongoose.Schema;

const PlaylistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    createdBy: {
      type: schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    videos: [{ type: schema.Types.ObjectId, ref: "Video" }],
  },
  { timestamps: true }
);

const Playlist = mongoose.model("Playlist", PlaylistSchema);
export default Playlist;
