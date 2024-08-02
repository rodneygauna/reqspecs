import mongoose from "mongoose";

import { requiredStringMaxLength } from "../utils/validation/validationConstants.js";

const companySchema = new mongoose.Schema(
  {
    // Company Name
    company_name: requiredStringMaxLength("Company name", 50),
    // Company Status
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Company", companySchema);
