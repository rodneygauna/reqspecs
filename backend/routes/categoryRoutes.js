import express from "express";

import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/categoryControllers.js";

const router = express.Router();

router.route("/").post(createCategory).get(getCategories);
router.route("/:id").get(getCategoryById).put(updateCategory);

export default router;
