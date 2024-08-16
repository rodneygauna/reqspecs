import { useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectViewSinglePage = () => {
  const project = useLoaderData();

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

      {/* Project Details */}
      <section className="bg-indigo-50">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900 mt-3 mb-3">
            {project.project_name}
          </h1>
          <div className="bg-white rounded-xl shadow-md relative p-6">
            <div className="mb-5">
              <Link
                to={`/project/edit/${project._id}`}
                className="w-full text-white bg-indigo-700 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Edit project
              </Link>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold">Project Details</h3>
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Project Name:
              </span>
              <br />
              {project.project_name}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Problem Description:
              </span>
              <br />
              {project.problem_description}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Market Segment:
              </span>
              <br />
              {project.market_segment_description}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Solutions Today:
              </span>
              <br />
              {project.solutions_today_description}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">Goals:</span>
              <br />
              {project.goals_description}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Initatives:
              </span>
              <br />
              {project.initatives_description}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">Obstacles:</span>
              <br />
              {project.obstacles_description}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">Features:</span>
              <br />
              {project.features_description}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Measures of Success:
              </span>
              <br />
              {project.measures_description}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Investment:
              </span>
              <br />
              {project.investment_description}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Returns on Investment:
              </span>
              <br />
              {project.returns_description}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">Epic Link:</span>
              <br />
              <a
                href={project.epic_link}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-500 hover:text-indigo-600"
              >
                {project.epic_link}
              </a>
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">Status:</span>
              <br />
              {project.is_active ? "Active" : "Inactive"}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Created At:
              </span>
              <br />
              {new Date(project.createdAt).toLocaleDateString()}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Updated At:
              </span>
              <br />
              {new Date(project.updatedAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectViewSinglePage;
