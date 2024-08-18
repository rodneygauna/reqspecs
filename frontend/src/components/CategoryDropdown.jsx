import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CategoryDropdown = ({ category, setCategoryID }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://backend:3001/api/v1/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <label
        htmlFor="category"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Category
      </label>
      <select
        name="category"
        id="category"
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required=""
        value={category}
        onChange={(e) => setCategoryID(e.target.value)}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.category_name}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryDropdown.propTypes = {
  category: PropTypes.string.isRequired,
  setCategoryID: PropTypes.func.isRequired,
};

export default CategoryDropdown;
