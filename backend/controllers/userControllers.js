import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

import User from "../models/userModel.js";
import Department from "../models/departmentModel.js";

import generateToken from "../utils/generateToken.js";

const SALT = await bcrypt.genSalt(10);

// @desc    Register a new user
// @route   POST /api/v1/users/register
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const {
    first_name,
    last_name,
    title,
    departmentID,
    email,
    password,
    is_active,
    user_role,
  } = req.body;

  // Check if password input is present
  if (!password) {
    res.status(400);
    throw new Error("Password is required");
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Check if department exists
  if (departmentID) {
    if (!mongoose.isValidObjectId(departmentID)) {
      res.status(400);
      throw new Error("Invalid department ID");
    }

    const departmentExists = await Department.findById(departmentID);
    if (!departmentExists) {
      res.status(400);
      throw new Error("Department not found");
    }
  }

  // Generate a salt and hash the password
  const hashedPassword = await bcrypt.hash(password, SALT);

  // Create new user
  const user = await User.create({
    first_name,
    last_name,
    title,
    departmentID,
    email,
    password_hash: hashedPassword,
    is_active: is_active || true,
    user_role: user_role || "user",
  });

  // Add user to department
  if (departmentID) {
    const department = await Department.findById(departmentID);
    department.users.push(user._id);
    await department.save();
  }

  // Generate token and send response
  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      title: user.title,
      departmentID: user.departmentID,
      email: user.email,
      is_active: user.is_active,
      user_role: user.user_role,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Auth user & get token
// @route   POST /api/v1/users/auth
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (
    user &&
    user.is_active == true &&
    (await bcrypt.compare(password, user.password_hash))
  ) {
    res.json({
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      title: user.title,
      departmentID: user.departmentID,
      email: user.email,
      is_active: user.is_active,
      user_role: user.user_role,
      token: generateToken(res, user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Get user profile
// @route   GET /api/v1/users/profile
// @access  Private
export const userProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password_hash");

  if (user) {
    res.status(201).json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/v1/users/profile
// @access  Private
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  // Check if department exists
  if (req.body.departmentID) {
    if (!mongoose.isValidObjectId(req.body.departmentID)) {
      res.status(400);
      throw new Error("Invalid department ID");
    }

    const departmentExists = await Department.findById(req.body.departmentID);
    if (!departmentExists) {
      res.status(400);
      throw new Error("Department not found");
    }
  }

  // Save updated user data
  if (user) {
    const { ...userData } = req.body;

    // Check if departmentID is different
    if (req.body.departmentID !== user.departmentID) {
      // Remove user from old department
      if (user.departmentID) {
        const oldDepartment = await Department.findById(user.departmentID);
        oldDepartment.users.pull(user._id);
        await oldDepartment.save();
      }

      // Add user to new department
      if (req.body.departmentID) {
        const newDepartment = await Department.findById(req.body.departmentID);
        newDepartment.users.push(user._id);
        await newDepartment.save();
      }
    }

    // Update user data and send response
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { ...userData },
      { new: true }
    );
    res.status(201).json(updatedUser);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
