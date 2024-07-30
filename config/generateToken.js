import jwt from "jsonwebtoken";
import config from "./config.js";

const generateToken = ({ id, type }) => {
  return jwt.sign({ id, type }, config.jwtSecret, { expiresIn: "9999d" });
};

export default generateToken;
