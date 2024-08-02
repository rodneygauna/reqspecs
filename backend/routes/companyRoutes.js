import express from "express";

import {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
} from "../controllers/companyControllers.js";

const router = express.Router();

router.route("/").post(createCompany).get(getCompanies);
router.route("/:id").get(getCompanyById).put(updateCompany);

export default router;
