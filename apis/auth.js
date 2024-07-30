import { signUp } from "../controllers/auth.js";
import { Router as router } from "express";

router.post('/signup', signUp)

export default router