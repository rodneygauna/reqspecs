import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RequirementListing = ({ requirement }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-xl font-bold">{requirement.short_description}</h3>
        </div>
        <div className="mb-5">
          <p>{requirement.category.category_name}</p>
        </div>
        <div className="mb-5">
          <p>{requirement.detailed_description}</p>
        </div>
        <div className="mb-5">
          <a
            href={requirement.story_link}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-700 hover:text-indigo-900"
          >
            {requirement.story_link}
          </a>
        </div>
        <div className="mb-5">
          {requirement.is_active ? (
            <span className="text-green-500 text-sm ml-2">Active</span>
          ) : (
            <span className="text-red-500 text-sm ml-2">Inactive</span>
          )}
        </div>
        <div className="mb-5">
          <Link
            to={`/requirement/edit/${requirement._id}`}
            className="w-full text-white bg-indigo-700 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Edit requirement
          </Link>
        </div>
      </div>
    </div>
  );
};

RequirementListing.propTypes = {
  requirement: PropTypes.object.isRequired,
};

export default RequirementListing;
