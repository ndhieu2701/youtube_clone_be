import mongoose from "mongoose";
const schema = mongoose.Schema;

const VideoSchema = new schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    url: { type: String, required: true },
    thumbnailUrl: { type: String },
    uploadedBy: {
      type: schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    tags: [{ type: String }],
    comments: [{ type: schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", VideoSchema);
export default Video;
