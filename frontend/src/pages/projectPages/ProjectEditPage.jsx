import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const ProjectEditPage = ({ projectUpdateSubmit }) => {
  // Loader data
  const project = useLoaderData();

  // Form state
  const [project_name, setProjectName] = useState(project.project_name);
  const [problem_description, setProblemDescription] = useState(
    project.problem_description
  );
  const [market_segment_description, setMarketSegmentDescription] = useState(
    project.market_segment_description
  );
  const [solutions_today_description, setSolutionsTodayDescription] = useState(
    project.solutions_today_description
  );
  const [goals_description, setGoalsDescription] = useState(
    project.goals_description
  );
  const [initatives_description, setInitativesDescription] = useState(
    project.initatives_description
  );
  const [obstacles_description, setObstaclesDescription] = useState(
    project.obstacles_description
  );
  const [features_description, setFeaturesDescription] = useState(
    project.features_description
  );
  const [measures_description, setMeasuresDescription] = useState(
    project.measures_description
  );
  const [investment_description, setInvestmentDescription] = useState(
    project.investment_description
  );
  const [returns_description, setReturnsDescription] = useState(
    project.returns_description
  );
  const [epic_link, setEpicLink] = useState(project.epic_link);
  const [is_active, setIsActive] = useState(project.is_active);

  // Navigation
  const navigate = useNavigate();

  // Submit form logic
  const submitForm = (e) => {
    e.preventDefault();

    const projectData = {
      _id: project._id,
      project_name,
      problem_description,
      market_segment_description,
      solutions_today_description,
      goals_description,
      initatives_description,
      obstacles_description,
      features_description,
      measures_description,
      investment_description,
      returns_description,
      epic_link,
      is_active,
      users: sessionStorage.getItem("current_user_id"),
    };

    projectUpdateSubmit(projectData)
      .then(() => {
        navigate(`/project/${project._id}`);
        toast.success("Project updated successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // HTML structure for the form
  return (
    <section className="bg-gray-50">
      <div className="">
        <div className="w-full xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Update {project.project_name}
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitForm}>
              <div>
                <label
                  htmlFor="project_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  name="project_name"
                  id="project_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Cool Project Name"
                  required=""
                  value={project_name}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="problem_description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Problem Description
                </label>
                <textarea
                  name="problem_description"
                  id="problem_description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Describe the problem"
                  required=""
                  value={problem_description}
                  onChange={(e) => setProblemDescription(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="market_segment_description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Market Segment Description
                </label>
                <textarea
                  name="market_segment_description"
                  id="market_segment_description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Describe the market segment"
                  required=""
                  value={market_segment_description}
                  onChange={(e) => setMarketSegmentDescription(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="solutions_today_description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Solutions Today Description
                </label>
                <textarea
                  name="solutions_today_description"
                  id="solutions_today_description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Describe the solutions today"
                  required=""
                  value={solutions_today_description}
                  onChange={(e) => setSolutionsTodayDescription(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="goals_description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Goals Description
                </label>
                <textarea
                  name="goals_description"
                  id="goals_description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Describe the goals"
                  required=""
                  value={goals_description}
                  onChange={(e) => setGoalsDescription(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="initatives_description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Initatives Description
                </label>
                <textarea
                  name="initatives_description"
                  id="initatives_description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Describe the initatives"
                  required=""
                  value={initatives_description}
                  onChange={(e) => setInitativesDescription(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="obstacles_description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Obstacles Description
                </label>
                <textarea
                  name="obstacles_description"
                  id="obstacles_description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Describe the obstacles"
                  required=""
                  value={obstacles_description}
                  onChange={(e) => setObstaclesDescription(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="features_description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Features Description
                </label>
                <textarea
                  name="features_description"
                  id="features_description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Describe the features"
                  required=""
                  value={features_description}
                  onChange={(e) => setFeaturesDescription(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="measurements_description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Measures of Success Description
                </label>
                <textarea
                  name="measurements_description"
                  id="measurements_description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Describe the measurements"
                  required=""
                  value={measures_description}
                  onChange={(e) => setMeasuresDescription(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="investment_description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Investment Description
                </label>
                <textarea
                  name="investment_description"
                  id="investment_description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Describe the investment"
                  required=""
                  value={investment_description}
                  onChange={(e) => setInvestmentDescription(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="returns_description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Returns Description
                </label>
                <textarea
                  name="returns_description"
                  id="returns_description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Describe the returns"
                  required=""
                  value={returns_description}
                  onChange={(e) => setReturnsDescription(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="epic_link"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Epic Link
                </label>
                <input
                  type="text"
                  name="epic_link"
                  id="epic_link"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://www.epiclink.com"
                  required=""
                  value={epic_link}
                  onChange={(e) => setEpicLink(e.target.value)}
                />
              </div>
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

ProjectEditPage.propTypes = {
  projectUpdateSubmit: PropTypes.func.isRequired,
};

export default ProjectEditPage;
