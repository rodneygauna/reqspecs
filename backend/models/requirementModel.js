import mongoose from "mongoose";

import {
  requiredString,
  optionalString,
} from "../utils/validation/validationConstants.js";

const requirementSchema = new mongoose.Schema(
  {
    // Requirement Descriptions
    short_description: requiredString("Short description"),
    detailed_description: requiredString(),
    // Story Link
    story_link: optionalString(),
    // Requirement Status
    is_active: {
      type: Boolean,
      default: true,
    },
    // Requirement Category
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    // Requirement Project
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
    // Creating User
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // Updated Users - array of user_ids and updated_at
    updated_by: [
      {
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        updated_at: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Requirement", requirementSchema);
