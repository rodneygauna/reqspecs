import asynHandler from "express-async-handler";

import Category from "../models/categoryModel.js";

// @desc    Create a new category
// @route   POST /api/v1/categories
// @access  Private
export const createCategory = asynHandler(async (req, res) => {
  const { ...categoryData } = req.body;

  // Check if category already exists
  const categoryExists = await Category.findOne({
    category_name: categoryData.category_name,
  });

  if (categoryExists) {
    res.status(400);
    throw new Error("Category already exists");
  }

  // Create new category
  const category = await Category.create(categoryData);

  if (category) {
    res.status(201).json(category);
  } else {
    res.status(400);
    throw new Error("Invalid category data");
  }
});

// @desc    Get all categories
// @route   GET /api/v1/categories
// @access  Private
export const getCategories = asynHandler(async (req, res) => {
  const categories = await Category.find({});

  if (categories) {
    res.status(201).json(categories);
  } else {
    res.status(404);
    throw new Error("Categories not found");
  }
});

// @desc    Get category by ID
// @route   GET /api/v1/categories/:id
// @access  Private
export const getCategoryById = asynHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    res.status(201).json(category);
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

// @desc    Update category by ID
// @route   PUT /api/v1/categories/:id
// @access  Private
export const updateCategory = asynHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    const { ...categoryData } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      category._id,
      { ...categoryData },
      {
        new: true,
        runValidators: true,
      }
    );
    res.json(updatedCategory);
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});
