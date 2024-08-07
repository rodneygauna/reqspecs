import express from "express";

import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
} from "../controllers/projectControllers.js";

const router = express.Router();

router.route("/").post(createProject).get(getProjects);
router.route("/:id").get(getProjectById).put(updateProject);

export default router;
