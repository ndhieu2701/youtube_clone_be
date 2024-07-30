import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt();
  const passwordHashed = await bcrypt.hash(password, salt);
  return passwordHashed;
};

export { hashPassword };
