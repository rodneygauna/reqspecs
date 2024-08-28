import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import ProjectDropdown from "../../components/ProjectDropdown";
import CategoryDropdown from "../../components/CategoryDropdown";

const RequirementEditPage = ({ requirementEditSubmit }) => {
  // Loader data
  const requirement = useLoaderData();

  // Form state
  const [short_description, setShortDescription] = useState(
    requirement.short_description
  );
  const [rank, setRank] = useState(requirement.rank);
  const [detailed_description, setDetailedDescription] = useState(
    requirement.detailed_description
  );
  const [story_link, setStoryLink] = useState(requirement.story_link);
  const [category, setCategoryID] = useState(requirement.category);
  const [project, setProjectID] = useState(requirement.project);
  const [is_active, setIsActive] = useState(requirement.is_active);

  // Navigation
  const navigate = useNavigate();

  // Submit form logic
  const submitForm = (e) => {
    e.preventDefault();

    const requirementData = {
      _id: requirement._id,
      short_description,
      rank,
      detailed_description,
      story_link,
      is_active,
      category,
      project,
      updated_by: [
        ...requirement.updated_by,
        {
          user_id: localStorage.getItem("current_user_id"),
          updated_at: new Date(),
        },
      ],
    };

    requirementEditSubmit(requirementData, requirement._id)
      .then(() => {
        navigate(`/requirements/project/${project}`);
        toast.success("Requirement updated successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // HTML structure for the form
  return (
    <section className="bg-gray-50">
      <div className="">
        <div className="">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Update Requirement
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
                  htmlFor="rank"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Rank
                </label>
                <input
                  type="number"
                  name="rank"
                  id="rank"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="detailed_description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Detailed Description &nbsp;
                  {
                    // Add a tooltip that explains that the user can copy the text from Quill editor and paste into Jira
                    <span className="text-xs text-gray-500">
                      (You can copy the text from here and paste into Jira)
                    </span>
                  }
                </label>
                <ReactQuill
                  theme="snow"
                  value={detailed_description}
                  onChange={setDetailedDescription}
                  modules={{
                    toolbar: [
                      [{ header: [1, 2, 3, 4, 5, 6, false] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["code-block"],
                      ["clean"],
                    ],
                  }}
                  formats={[
                    "header",
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "blockquote",
                    "list",
                    "bullet",
                    "indent",
                    "code-block",
                  ]}
                  placeholder="Detailed description..."
                  required=""
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
              <div>
                <label
                  htmlFor="is_active"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Active
                </label>
                <select
                  name="is_active"
                  id="is_active"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={is_active}
                  onChange={(e) => setIsActive(e.target.value)}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
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

RequirementEditPage.propTypes = {
  requirementEditSubmit: PropTypes.func.isRequired,
};

export default RequirementEditPage;
