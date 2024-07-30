import mongoose from "mongoose";
import config from "./config.js";
const connectDB = async () => {
  const connect = await mongoose.connect(config.mongoUri, {
    ssl: true,
    tlsAllowInvalidCertificates: true,
  });
  console.log("MongoDB connected: ", connect.connection.host);
};

export default connectDB;
