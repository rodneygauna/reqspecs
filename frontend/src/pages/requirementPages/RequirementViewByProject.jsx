import { useLoaderData } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowCircleDown,
  FaArrowCircleUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import RequirementListing from "../../components/RequirementListing";

const RequirementViewByProject = () => {
  const project = useLoaderData();
  const [categories, setCategories] = useState({});
  const [groupedRequirements, setGroupedRequirements] = useState({});
  const [collapsedCategories, setCollapsedCategories] = useState({});
  const [allCollapsed, setAllCollapsed] = useState(false); // State for global collapse/expand

  useEffect(() => {
    // Fetch categories from the API
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/v1/categories/");
        const data = await response.json();
        const categoryMap = data.reduce((acc, category) => {
          acc[category._id] = category.category_name;
          return acc;
        }, {});
        setCategories(categoryMap);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    // Group requirements by category name
    const groupRequirements = () => {
      const grouped = project.reduce((acc, requirement) => {
        const categoryName =
          categories[requirement.category] || "Uncategorized";
        if (!acc[categoryName]) {
          acc[categoryName] = [];
        }
        acc[categoryName].push(requirement);
        return acc;
      }, {});
      setGroupedRequirements(grouped);
    };

    if (Object.keys(categories).length > 0) {
      groupRequirements();
    }
  }, [categories, project]);

  const toggleCategoryCollapse = (categoryName) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const toggleAllCategories = () => {
    const newCollapsedState = !allCollapsed;
    setAllCollapsed(newCollapsedState);
    const updatedCollapsedCategories = Object.keys(groupedRequirements).reduce(
      (acc, categoryName) => {
        acc[categoryName] = newCollapsedState;
        return acc;
      },
      {}
    );
    setCollapsedCategories(updatedCollapsedCategories);
  };

  return (
    <>
      {/* Breadcrumb */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/projects"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to projects
          </Link>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-gray-50">
        <div className="container mx-auto">
          {/* Add requirement button */}
          <div className="mb-6 flex justify-between items-center">
            <Link
              to={"/requirement/add/"}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
            >
              Add Requirement
            </Link>
            <button
              onClick={toggleAllCategories}
              className="text-indigo-500 hover:text-indigo-600 flex items-center"
            >
              {allCollapsed ? (
                <>
                  <FaArrowCircleDown className="mr-1" /> <span>Expand All</span>
                </>
              ) : (
                <>
                  <FaArrowCircleUp className="mr-1" /> <span>Collapse All</span>
                </>
              )}
            </button>
          </div>
          {/* List of requirements */}
          <div className="grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-cols-1">
            {Object.keys(groupedRequirements).map((categoryName) => (
              <div key={categoryName}>
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold mt-2 mb-1">
                    {categoryName}
                  </h2>
                  <button
                    className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    onClick={() => toggleCategoryCollapse(categoryName)}
                  >
                    {collapsedCategories[categoryName] ? (
                      <>
                        <FaArrowCircleDown className="mr-1" />{" "}
                        <span>Expand Category</span>
                      </>
                    ) : (
                      <>
                        <FaArrowCircleUp className="mr-1" />{" "}
                        <span>Collapse Category</span>
                      </>
                    )}
                  </button>
                </div>
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    collapsedCategories[categoryName]
                      ? "max-h-0"
                      : "max-h-screen"
                  }`}
                >
                  {groupedRequirements[categoryName].map((requirement) => (
                    <RequirementListing
                      key={requirement._id}
                      requirement={requirement}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RequirementViewByProject;
