import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import ProjectDropdown from "../../components/ProjectDropdown";
import CategoryDropdown from "../../components/CategoryDropdown";

const RequirementAddPage = ({ requirementAddSubmit }) => {
  // Form state
  const [short_description, setShortDescription] = useState("");
  const [detailed_description, setDetailedDescription] = useState("");
  const [story_link, setStoryLink] = useState("");
  const [category, setCategoryID] = useState("");
  const [project, setProjectID] = useState("");

  // Navigation
  const navigate = useNavigate();

  // Submit form logic
  const submitForm = (e) => {
    e.preventDefault();

    const requirementData = {
      short_description,
      detailed_description,
      story_link,
      is_active: true,
      category,
      project,
      created_by: localStorage.getItem("current_user_id"),
    };

    requirementAddSubmit(requirementData)
      .then(() => {
        navigate("/");
        toast.success("Requirement created successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // HTML structure for the form
  return (
    <section className="bg-gray-50">
      <div className="">
        <div className="w-full md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create a requirement
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitForm}>
              <div>
                <label
                  htmlFor="short_description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Short Description
                </label>
                <input
                  type="text"
                  name="short_description"
                  id="short_description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="As a user, I want to..."
                  required=""
                  value={short_description}
                  onChange={(e) => setShortDescription(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="detailed_description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Detailed Description
                </label>
                <textarea
                  name="detailed_description"
                  id="detailed_description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Detailed description"
                  required=""
                  value={detailed_description}
                  onChange={(e) => setDetailedDescription(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="story_link"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Story Link
                </label>
                <input
                  type="text"
                  name="story_link"
                  id="story_link"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://..."
                  required=""
                  value={story_link}
                  onChange={(e) => setStoryLink(e.target.value)}
                />
              </div>
              <ProjectDropdown project={project} setProjectID={setProjectID} />
              <CategoryDropdown
                category={category}
                setCategoryID={setCategoryID}
              />
              <button
                type="submit"
                className="w-full text-white bg-indigo-700 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

RequirementAddPage.propTypes = {
  requirementAddSubmit: PropTypes.func.isRequired,
};

export default RequirementAddPage;
