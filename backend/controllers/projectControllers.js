import asyncHandler from "express-async-handler";

import Project from "../models/projectModel.js";

// @desc    Create a new project
// @route   POST /api/v1/projects
// @access  Private
export const createProject = asyncHandler(async (req, res) => {
  const { ...projectData } = req.body;

  // Check if project already exists
  const projectExists = await Project.findOne({
    project_name: projectData.project_name,
  });

  if (projectExists) {
    res.status(400);
    throw new Error("Project already exists");
  }

  // Create new project
  const project = await Project.create(projectData);

  if (project) {
    res.status(201).json(project);
  } else {
    res.status(400);
    throw new Error("Invalid project data");
  }
});

// @desc    Get all projects
// @route   GET /api/v1/projects
// @access  Private
export const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({});

  if (projects) {
    res.status(201).json(projects);
  } else {
    res.status(404);
    throw new Error("Projects not found");
  }
});

// @desc    Get project by ID
// @route   GET /api/v1/projects/:id
// @access  Private
export const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    res.status(201).json(project);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
});

// @desc    Update project by ID
// @route   PUT /api/v1/projects/:id
// @access  Private
export const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    const { ...projectData } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      project._id,
      { ...projectData },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json(updatedProject);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
});
