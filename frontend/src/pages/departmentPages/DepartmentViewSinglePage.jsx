import { useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const DepartmentViewSinglePage = () => {
  const department = useLoaderData();

  return (
    <>
      {/* Breadcrumb */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/departments"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to departments
          </Link>
        </div>
      </section>

      {/* Department Details */}
      <section className="bg-indigo-50">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900 mt-3 mb-3">
            {department.department_name}
          </h1>
          <div className="bg-white rounded-xl shadow-md relative p-6">
            <div className="mb-5">
              <Link
                to={`/department/edit/${department._id}`}
                className="w-full text-white bg-indigo-700 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Edit department
              </Link>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold">Department Details</h3>
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Department Name:
              </span>
              <br />
              {department.department_name}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">Status:</span>
              <br />
              {department.is_active ? "Active" : "Inactive"}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Created At:
              </span>
              <br />
              {new Date(department.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DepartmentViewSinglePage;
