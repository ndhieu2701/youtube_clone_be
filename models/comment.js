import mongoose from "mongoose";
const schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema(
  {
    userId: { type: schema.Types.ObjectId, ref: "User", required: true },
    videoId: {
      type: schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
    comment: { type: String, required: true },
    parentComment: { type: schema.Types.ObjectId, ref: "Comment" },
    likes: { type: Number, default: 0 },
    replies: [{ type: schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;
