import mongoose from "mongoose";

import {
  requiredStringMaxLength,
  optionalString,
} from "../utils/validation/validationConstants.js";

const projectSchema = new mongoose.Schema(
  {
    // Project Name
    project_name: requiredStringMaxLength("Project name", 150),
    // Project Description
    problem_description: optionalString(),
    market_segment_description: optionalString(),
    solutions_today_description: optionalString(),
    goals_description: optionalString(),
    initatives_description: optionalString(),
    obstacles_description: optionalString(),
    features_description: optionalString(),
    measures_description: optionalString(),
    investment_description: optionalString(),
    returns_description: optionalString(),
    // Links
    epic_link: optionalString(),
    // Project Status
    is_active: {
      type: Boolean,
      default: true,
    },
    // Project Users
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Project", projectSchema);
