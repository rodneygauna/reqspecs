import { useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryViewSinglePage = () => {
  const category = useLoaderData();

  return (
    <>
      {/* Breadcrumb */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/categories"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to categories
          </Link>
        </div>
      </section>

      {/* Category Details */}
      <section className="bg-indigo-50">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900 mt-3 mb-3">
            {category.category_name}
          </h1>
          <div className="bg-white rounded-xl shadow-md relative p-6">
            <div className="mb-5">
              <Link
                to={`/category/edit/${category._id}`}
                className="w-full text-white bg-indigo-700 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Edit category
              </Link>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold">Category Details</h3>
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Category Name:
              </span>
              <br />
              {category.category_name}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Category Description:
              </span>
              <br />
              {category.category_description}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">Status:</span>
              <br />
              {category.is_active ? "Active" : "Inactive"}
            </div>
            <div className="mb-5">
              <span className="mb-2 font-medium text-gray-900">
                Created At:
              </span>
              <br />
              {new Date(category.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryViewSinglePage;
