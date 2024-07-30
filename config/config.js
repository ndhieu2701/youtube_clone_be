import dotenv from "dotenv";

dotenv.config();

const config = {
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  cloudName: process.env.CLOUD_NAME,
  cloudApiKey: process.env.CLOUD_API_KEY,
  cloudApiSecret: process.env.CLOUD_API_SECRET,
  mailHost: process.env.GMAIL_HOST,
  mailPort: process.env.GMAIL_PORT,
  mailAccount: process.env.GMAIL_ACCOUNT,
  mailPass: process.env.GMAIL_PASSWORD,
  clientDomain: process.env.CLIENT_DOMAIN
};

export default config;