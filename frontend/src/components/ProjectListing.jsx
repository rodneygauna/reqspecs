import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProjectListing = ({ project }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let problem_description = project.problem_description;
  let epic_link = project.epic_link;

  if (!showFullDescription && problem_description.length > 100) {
    problem_description = problem_description.substring(0, 100) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-xl font-bold">{project.project_name}</h3>
        </div>
        <div className="mb-5">{problem_description}</div>
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDescription ? "Less" : "More"}
        </button>
        <div className="mb-5">
          <a
            href={epic_link}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-500 hover:text-indigo-600"
          >
            {epic_link}
          </a>
        </div>
        <div className="mb-5">
          <Link
            to={`/project/${project._id}`}
            className="w-full text-white bg-indigo-700 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View project
          </Link>
        </div>
      </div>
    </div>
  );
};

ProjectListing.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectListing;
