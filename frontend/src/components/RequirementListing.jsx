import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import UpdateLogModal from "./RequirementHistoryLog";

const RequirementListing = ({ requirement }) => {
  const description = requirement.detailed_description;

  const [category, setCategory] = useState("");
  const [createdUser, setCreatedUser] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [areDetailsOpen, setAreDetailsOpen] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          `/api/v1/categories/${requirement.category}`
        );
        const categoryData = await response.json();
        setCategory(categoryData);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
    const fetchUser = async () => {
      try {
        // Fetch the user who created the requirement at /api/v1/users/${requirement.created_by}
        // and the Bear token from localStorage
        const response = await fetch(
          `/api/v1/users/${requirement.created_by}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const userData = await response.json();
        setCreatedUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchCategory();
    fetchUser();
  }, [requirement.category, requirement.created_by]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              {requirement.short_description}
            </h2>
            <span className="text-sm text-gray-500">
              Rank: {requirement.rank}
            </span>
          </div>
        </div>
        <div className="mx-3">
          <div className="mb-3">
            <span className="font-semibold">Detailed Description:</span>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div>
            <button
              onClick={() =>
                areDetailsOpen
                  ? setAreDetailsOpen(false)
                  : setAreDetailsOpen(true)
              }
              className="text-indigo-500 mb-1 hover:text-indigo-600"
            >
              {" "}
              {areDetailsOpen ? "Hide" : "Show"} Details
            </button>
            {areDetailsOpen && (
              <div className="mb-5">
                {requirement.story_link ? (
                  <div className="mb-3">
                    <span className="font-semibold">Story Link:</span>
                    <br />
                    <a
                      href={requirement.story_link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-700 hover:text-indigo-900"
                    >
                      {requirement.story_link}
                    </a>
                  </div>
                ) : null}
                <p>
                  <span className="font-semibold">Category: </span>
                  {category ? category.category_name : "Loading..."}
                </p>
                <p>
                  <span className="font-semibold">Created by: </span>
                  {createdUser
                    ? createdUser.first_name + " " + createdUser.last_name
                    : "Loading..."}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Created at:</span>{" "}
                  {new Date(requirement.createdAt).toLocaleString()}
                </p>
                {(requirement.updated_by.length > 0 && (
                  <Link
                    to="#"
                    onClick={openModal}
                    className="text-indigo-500 hover:text-indigo-600"
                  >
                    View Update Log
                  </Link>
                )) || <p>No updates</p>}
                <p>
                  {requirement.is_active ? (
                    <span className="text-green-500 text-sm">Active</span>
                  ) : (
                    <span className="text-red-500 text-sm">Inactive</span>
                  )}
                </p>
                <br />
                <Link
                  to={`/requirement/edit/${requirement._id}`}
                  className="w-full text-white bg-indigo-700 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Edit requirement
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <UpdateLogModal
        isOpen={isModalOpen}
        onClose={closeModal}
        updates={requirement.updated_by}
      />
    </div>
  );
};

RequirementListing.propTypes = {
  requirement: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    detailed_description: PropTypes.string.isRequired,
    is_active: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
    created_by: PropTypes.string.isRequired,
    updated_by: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        user_id: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired,
      })
    ).isRequired,
    story_link: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
  }).isRequired,
};

export default RequirementListing;
