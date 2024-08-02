import mongoose from "mongoose";

import {
  requiredStringMaxLength,
  optionalStringMaxLength,
} from "../utils/validation/validationConstants.js";

const userSchema = new mongoose.Schema(
  {
    // User Name
    first_name: requiredStringMaxLength("First name", 50),
    last_name: requiredStringMaxLength("Last name", 100),
    // User Title
    title: optionalStringMaxLength(100),
    // User Department
    departmentID: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    // User Email and Password Hash
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password_hash: {
      type: String,
      required: [true, "Password is required"],
    },
    // User Status
    is_active: {
      type: Boolean,
      default: true,
    },
    // User Role
    user_role: {
      type: String,
      enum: {
        values: ["user", "super user", "admin"],
        message:
          "{VALUE} is not supported; only user, super user, or admin are allowed.",
      },
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
