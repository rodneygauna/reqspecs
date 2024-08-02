import mongoose from "mongoose";

import { requiredStringMaxLength } from "../utils/validation/validationConstants.js";

const departmentSchema = new mongoose.Schema(
  {
    // Department Name
    department_name: requiredStringMaxLength("Department name", 150),
    // Department Status
    is_active: {
      type: Boolean,
      default: true,
    },
    // Department Users
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Department", departmentSchema);
