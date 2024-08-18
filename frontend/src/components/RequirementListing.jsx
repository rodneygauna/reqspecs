import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RequirementListing = ({ requirement }) => {
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/v1/categories/${requirement.category}`
        );
        const categoryData = await response.json();
        setCategory(categoryData);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [requirement.category]);

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-xl font-bold">{requirement.short_description}</h3>
        </div>
        <div className="mb-5">
          <span className="font-semibold">Category:</span>
          {category ? <p>{category.category_name}</p> : <p>Loading...</p>}
        </div>
        <div className="mb-5">
          <span className="font-semibold">Detailed Description:</span>
          <p>{requirement.detailed_description}</p>
        </div>
        <div className="mb-5">
          <span className="font-semibold">Story Link:</span>
          <br />
          {requirement.story_link ? (
            <a
              href={requirement.story_link}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-700 hover:text-indigo-900"
            >
              {requirement.story_link}
            </a>
          ) : (
            "No story link provided"
          )}
        </div>
        <div className="mb-5">
          {requirement.is_active ? (
            <span className="text-green-500 text-sm">Active</span>
          ) : (
            <span className="text-red-500 text-sm">Inactive</span>
          )}
        </div>
        <div className="mb-5">
          <Link
            to={`/requirement/edit/${requirement._id}`}
            className="w-full text-white bg-indigo-700 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Edit requirement
          </Link>
        </div>
      </div>
    </div>
  );
};

RequirementListing.propTypes = {
  requirement: PropTypes.object.isRequired,
};

export default RequirementListing;
