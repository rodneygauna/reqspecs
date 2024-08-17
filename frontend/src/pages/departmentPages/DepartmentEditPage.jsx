import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const DepartmentEditPage = ({ departmentEditSubmit }) => {
  // Loader data
  const department = useLoaderData();

  // Form state
  const [department_name, setDepartmentName] = useState(
    department.department_name
  );
  const [is_active, setIsActive] = useState(department.is_active);

  // Navigation
  const navigate = useNavigate();

  // Submit form logic
  const submitForm = (e) => {
    e.preventDefault();

    const departmentData = {
      _id: department._id,
      department_name,
      is_active,
    };

    departmentEditSubmit(departmentData)
      .then(() => {
        navigate("/departments");
        toast.success("Department updated successfully");
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
              Edit {department.department_name}
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitForm}>
              <div>
                <label
                  htmlFor="department_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Department Name
                </label>
                <input
                  type="text"
                  name="department_name"
                  id="department_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Open Source department, LLC"
                  required=""
                  value={department_name}
                  onChange={(e) => setDepartmentName(e.target.value)}
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

DepartmentEditPage.propTypes = {
  departmentEditSubmit: PropTypes.func.isRequired,
};

export default DepartmentEditPage;
