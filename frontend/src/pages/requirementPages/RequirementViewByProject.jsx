import { Link } from "react-router-dom";

import RequirementListings from "../../components/RequirementListings";

const RequirementViewByProject = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mt-3 mb-3">
          Requirements
        </h1>
        <Link
          to="/requirement/add"
          className="w-full text-white bg-indigo-700 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-5 text-center"
        >
          Add Requirement
        </Link>
        <hr className="my-5" />
        <RequirementListings />
      </div>
    </section>
  );
};

export default RequirementViewByProject;
