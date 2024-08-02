import asyncHandler from "express-async-handler";

import Company from "../models/companyModel.js";

// @desc    Create a new company
// @route   POST /api/v1/companies
// @access  Public
export const createCompany = asyncHandler(async (req, res) => {
  const { ...companyDataa } = req.body;

  // Check if company already exists
  const companyExists = await Company.findOne({
    company_name: companyDataa.company_name,
  });

  if (companyExists) {
    res.status(400);
    throw new Error("Company already exists");
  }

  // Create new company
  const company = await Company.create(companyDataa);

  if (company) {
    res.status(201).json(company);
  } else {
    res.status(400);
    throw new Error("Invalid company data");
  }
});

// @desc    Get all companies
// @route   GET /api/v1/companies
// @access  Public
export const getCompanies = asyncHandler(async (req, res) => {
  const companies = await Company.find({});

  if (companies) {
    res.status(201).json(companies);
  } else {
    res.status(404);
    throw new Error("Companies not found");
  }
});

// @desc    Get company by ID
// @route   GET /api/v1/companies/:id
// @access  Public
export const getCompanyById = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id);

  if (company) {
    res.status(201).json(company);
  } else {
    res.status(404);
    throw new Error("Company not found");
  }
});

// @desc    Update company by ID
// @route   PUT /api/v1/companies/:id
// @access  Public
export const updateCompany = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id);

  if (company) {
    const { ...companyData } = req.body;
    const updatedCompany = await Company.findByIdAndUpdate(
      company._id,
      { ...companyData },
      {
        new: true,
      }
    );
    res.status(201).json(updatedCompany);
  } else {
    res.status(404);
    throw new Error("Company not found");
  }
});
