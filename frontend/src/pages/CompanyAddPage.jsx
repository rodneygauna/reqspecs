import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const CompanyAddPage = ({ companyAddSubmit }) => {
  // Form state
  const [company_name, setCompanyName] = useState("");

  // Navigation
  const navigate = useNavigate();

  // Submit form logic
  const submitForm = (e) => {
    e.preventDefault();

    companyAddSubmit({ company_name, is_active: true })
      .then(() => {
        navigate("/");
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
        <div className="w-full md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create the company
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitForm}>
              <div>
                <label
                  htmlFor="company_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="company_name"
                  id="company_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Open Source Company, LLC"
                  required=""
                  value={company_name}
                  onChange={(e) => setCompanyName(e.target.value)}
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

CompanyAddPage.propTypes = {
  companyAddSubmit: PropTypes.func.isRequired,
};

export default CompanyAddPage;
