import express from "express";

import {
  createRequirement,
  getRequirements,
  getRequirementById,
  updateRequirement,
  getRequirementsByProjectId,
} from "../controllers/requirementControllers.js";

const router = express.Router();

router.route("/").post(createRequirement).get(getRequirements);
router.route("/:id").get(getRequirementById).put(updateRequirement);
router.route("/project/:project_id").get(getRequirementsByProjectId);

export default router;
