import config from "../config/config.js";
import generateToken from "../config/generateToken.js";
import { hashPassword } from "../function/hashPassword.js";
import { readHTMLFile, replacePlaceholders } from "../function/useTemplate.js";
import User from "../models/user.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: config.host,
  port: config.mailPort,
  secure: false,
  auth: {
    user: config.mailAccount,
    pass: config.mailPass,
  },
});

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existUser = await User.findOne(username);
    if (existUser) return res.status(409).message("Username is exist!");

    const passwordHashed = await hashPassword(password);

    const newUser = await User.create({
      username,
      email,
      password: passwordHashed,
    });

    readHTMLFile(__dirname + "activeAccount.html", (error, html) => {
      if (err) {
        console.log("error reading file", err);
        return res.status(500).message("Something went wrong");
      }
      const token = generateToken({ id: newUser._id, type: "user" });

      const replacements = {
        link: `${config.clientDomain}/active?token=${token}`,
      };

      const htmlToSend = replacePlaceholders(html, replacements);

      const mailOptions = {
        from: config.mailAccount,
        to: email,
        subject: "Youtube clone active account",
        html: htmlToSend
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          return res.status(500).message("Email active send error!");
        }
        res.status(401).message("success");
      });
    });
  } catch (error) {
    res.status(500).message(error);
  }
};

export { signUp };
