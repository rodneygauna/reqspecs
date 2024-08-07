import express from "express";

import {
  createRequirement,
  getRequirements,
  getRequirementById,
  updateRequirement,
} from "../controllers/requirementControllers.js";

const router = express.Router();

router.route("/").post(createRequirement).get(getRequirements);
router.route("/:id").get(getRequirementById).put(updateRequirement);

export default router;
