import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const ProjectAddPage = ({ projectAddSubmit }) => {
  // Form state
  const [project_name, setProjectName] = useState("");
  const [problem_description, setProblemDescription] = useState("");
  const [market_segment_description, setMarketSegmentDescription] =
    useState("");
  const [solutions_today_description, setSolutionsTodayDescription] =
    useState("");
  const [goals_description, setGoalsDescription] = useState("");
  const [initatives_description, setInitativesDescription] = useState("");
  const [obstacles_description, setObstaclesDescription] = useState("");
  const [features_description, setFeaturesDescription] = useState("");
  const [measures_description, setMeasuresDescription] = useState("");
  const [investment_description, setInvestmentDescription] = useState("");
  const [returns_description, setReturnsDescription] = useState("");
  const [epic_link, setEpicLink] = useState("");

  // Navigation
  const navigate = useNavigate();

  // Submit form logic
  const submitForm = (e) => {
    e.preventDefault();

    const projectData = {
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
      is_active: true,
      users: localStorage.getItem("current_user_id"),
    };

    projectAddSubmit(projectData)
      .then(() => {
        navigate("/projects");
        toast.success("Company created successfully");
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
              Create a new project
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

ProjectAddPage.propTypes = {
  projectAddSubmit: PropTypes.func.isRequired,
};

export default ProjectAddPage;
