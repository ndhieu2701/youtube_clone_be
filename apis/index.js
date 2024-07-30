import authRouter from "./auth.js";
const defaultRoutePath = "/api/v1";

const route = (app) => {
  app.user(`${defaultRoutePath}/auth`, authRouter);
};

export default route;
