import express from "express";

import {
  registerUser,
  authUser,
  userProfile,
  updateUser,
} from "../controllers/userControllers.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/register", registerUser);
router
  .get("/profile", protect, userProfile)
  .put("/profile", protect, updateUser);

export default router;
