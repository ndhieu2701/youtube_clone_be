import mongoose from "mongoose";
const schema = mongoose.Schema;

const ChannelSchema = new schema(
  {
    name: { type: String, required: true },
    description: String,
    createdBy: { type: schema.Types.ObjectId, ref: "User" },
    subscribers: [{ type: schema.Types.ObjectId, ref: "User" }],
    videos: [{ type: schema.Types.ObjectId, ref: "Video" }],
  },
  { timestamps: true }
);

const Channel = mongoose.model("Channel", ChannelSchema);
export default Channel;
