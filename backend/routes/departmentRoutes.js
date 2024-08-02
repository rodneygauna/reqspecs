import express from "express";

import {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
} from "../controllers/departmentControllers.js";

const router = express.Router();

router.route("/").post(createDepartment).get(getDepartments);
router.route("/:id").get(getDepartmentById).put(updateDepartment);

export default router;
