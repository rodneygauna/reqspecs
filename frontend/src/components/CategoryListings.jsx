import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

import CategoryListing from "./CategoryListing";

const CategoryListings = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const apiUrl = "http://localhost:3001/api/v1/categories";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.ok) {
          setCategories(data);
          setLoading(false);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            categories.map((category) => (
              <CategoryListing key={category._id} category={category} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryListings;
