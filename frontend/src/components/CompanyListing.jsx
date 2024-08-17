import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CompanyListing = ({ company }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-xl font-bold">
            {company.company_name}
            {company.is_active ? (
              <span className="text-green-500 text-sm ml-2">Active</span>
            ) : (
              <span className="text-red-500 text-sm ml-2">Inactive</span>
            )}
          </h3>
        </div>
        <div className="mb-5">
          <Link
            to={`/company/${company._id}`}
            className="w-full text-white bg-indigo-700 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View company
          </Link>
        </div>
      </div>
    </div>
  );
};

CompanyListing.propTypes = {
  company: PropTypes.object.isRequired,
};

export default CompanyListing;
