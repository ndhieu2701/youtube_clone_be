import mongoose from "mongoose";
const schema = mongoose.Schema;

const UserSchema = new schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    profile: {
      name: String,
      bio: String,
      avatarUrl: {
        type: String,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
    },
    subscribedChannels: [{ type: schema.Types.ObjectId, ref: "Channel" }],
    likedVideos: [{ type: schema.Types.ObjectId, ref: "Video" }],
    history: [
      {
        videoId: { type: schema.Types.ObjectId, ref: "Video" },
        watchedAt: { type: Date, default: Date.now },
      },
    ],
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
