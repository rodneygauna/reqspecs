import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProjectDropdown = ({ project, setProjectID }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://backend:3001/api/v1/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <label
        htmlFor="project"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Project
      </label>
      <select
        name="project"
        id="project"
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required=""
        value={project}
        onChange={(e) => setProjectID(e.target.value)}
      >
        <option value="">Select a project</option>
        {projects.map((project) => (
          <option key={project._id} value={project._id}>
            {project.project_name}
          </option>
        ))}
      </select>
    </div>
  );
};

ProjectDropdown.propTypes = {
  project: PropTypes.string.isRequired,
  setProjectID: PropTypes.func.isRequired,
};

export default ProjectDropdown;
