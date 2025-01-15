import express from "express";
import {
  getUser,
  userLogin,
  authenticateJWT,
  logout
} from "../Controllers/usersController.js";

const router = express.Router();

router.post("/login", userLogin);
router.get("/getUser", authenticateJWT, getUser);
router.get('/logout', logout);


export default router;
