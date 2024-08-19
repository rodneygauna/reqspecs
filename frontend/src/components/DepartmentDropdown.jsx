import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const DepartmentDropdown = ({ departmentID, setDepartmentID }) => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch("/api/v1/departments")
      .then((response) => response.json())
      .then((data) => setDepartments(data));
  }, []);

  return (
    <div>
      <label
        htmlFor="department"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Department
      </label>
      <select
        name="department"
        id="department"
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required=""
        value={departmentID}
        onChange={(e) => setDepartmentID(e.target.value)}
      >
        <option value="">Select a department</option>
        {departments.map((department) => (
          <option key={department._id} value={department._id}>
            {department.department_name}
          </option>
        ))}
      </select>
    </div>
  );
};

DepartmentDropdown.propTypes = {
  departmentID: PropTypes.string.isRequired,
  setDepartmentID: PropTypes.func.isRequired,
};

export default DepartmentDropdown;
