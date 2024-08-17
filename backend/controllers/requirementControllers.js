import asyncHandler from "express-async-handler";

import Requirement from "../models/requirementModel.js";

// @desc    Create a new requirement
// @route   POST /api/v1/requirements
// @access  Private
export const createRequirement = asyncHandler(async (req, res) => {
  const { ...requirementData } = req.body;

  // Create new requirement
  const requirement = await Requirement.create(requirementData);

  if (requirement) {
    res.status(201).json(requirement);
  } else {
    res.status(400);
    throw new Error("Invalid requirement data");
  }
});

// @desc    Get all requirements
// @route   GET /api/v1/requirements
// @access  Private
export const getRequirements = asyncHandler(async (req, res) => {
  const requirements = await Requirement.find({});

  if (requirements) {
    res.status(201).json(requirements);
  } else {
    res.status(404);
    throw new Error("Requirements not found");
  }
});

// @desc    Get requirement by ID
// @route   GET /api/v1/requirements/:id
// @access  Private
export const getRequirementById = asyncHandler(async (req, res) => {
  const requirement = await Requirement.findById(req.params.id);

  if (requirement) {
    res.status(201).json(requirement);
  } else {
    res.status(404);
    throw new Error("Requirement not found");
  }
});

// @desc    Update requirement by ID
// @route   PUT /api/v1/requirements/:id
// @access  Private
export const updateRequirement = asyncHandler(async (req, res) => {
  const requirement = await Requirement.findById(req.params.id);

  if (requirement) {
    const { ...requirementData } = req.body;

    const updatedRequirement = await Requirement.findByIdAndUpdate(
      requirement._id,
      { ...requirementData },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json(updatedRequirement);
  } else {
    res.status(404);
    throw new Error("Requirement not found");
  }
});

// @desc    Get requirements by project ID
// @route   GET /api/v1/requirements/project/:id
// @access  Private
export const getRequirementsByProjectId = asyncHandler(async (req, res) => {
  const requirements = await Requirement.find({
    project: req.params.project_id,
  });

  if (requirements) {
    res.status(201).json(requirements);
  } else {
    res.status(404);
    throw new Error("Requirements not found");
  }
});
