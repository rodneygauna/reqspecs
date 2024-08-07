import mongoose from "mongoose";

import {
  requiredStringMaxLength,
  optionalString,
} from "../utils/validation/validationConstants.js";

const categorySchema = new mongoose.Schema(
  {
    // Category Name
    category_name: requiredStringMaxLength("Category name", 150),
    // Category Description
    category_description: optionalString(),
    // Category Status
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Category", categorySchema);
