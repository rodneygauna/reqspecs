import asyncHandler from "express-async-handler";

import Department from "../models/departmentModel.js";

// @desc    Create a new department
// @route   POST /api/v1/departments
// @access  Private
export const createDepartment = asyncHandler(async (req, res) => {
  const { ...departmentData } = req.body;

  // Check if department already exists
  const departmentExists = await Department.findOne({
    department_name: departmentData.department_name,
  });

  if (departmentExists) {
    res.status(400);
    throw new Error("Department already exists");
  }

  // Create new department
  const department = await Department.create(departmentData);

  if (department) {
    res.status(201).json(department);
  } else {
    res.status(400);
    throw new Error("Invalid department data");
  }
});

// @desc    Get all departments
// @route   GET /api/v1/departments
// @access  Private
export const getDepartments = asyncHandler(async (req, res) => {
  const departments = await Department.find({});

  if (departments) {
    res.status(201).json(departments);
  } else {
    res.status(404);
    throw new Error("Departments not found");
  }
});

// @desc    Get department by ID
// @route   GET /api/v1/departments/:id
// @access  Private
export const getDepartmentById = asyncHandler(async (req, res) => {
  const department = await Department.findById(req.params.id);

  if (department) {
    res.status(201).json(department);
  } else {
    res.status(404);
    throw new Error("Department not found");
  }
});

// @desc    Update department by ID
// @route   PUT /api/v1/departments/:id
// @access  Private
export const updateDepartment = asyncHandler(async (req, res) => {
  const department = await Department.findById(req.params.id);

  if (department) {
    const { ...departmentData } = req.body;
    const updatedDepartment = await Department.findByIdAndUpdate(
      department._id,
      { ...departmentData },
      {
        new: true,
      }
    );
    res.status(201).json(updatedDepartment);
  } else {
    res.status(404);
    throw new Error("Department not found");
  }
});
