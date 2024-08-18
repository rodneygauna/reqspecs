import { useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import RequirementListing from "../../components/RequirementListing";

const RequirementViewByProject = () => {
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

      {/* List of requirements */}
      <section className="bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
            {project.map((requirement) => (
              <RequirementListing
                key={requirement._id}
                requirement={requirement}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RequirementViewByProject;
