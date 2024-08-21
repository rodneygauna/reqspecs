import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

import DepartmentListing from "./DepartmentListing";

const DepartmentListings = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      const apiUrl = "/api/v1/departments";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.ok) {
          const sortedData = data.sort((a, b) =>
            a.department_name.localeCompare(b.department_name)
          );
          setDepartments(sortedData);
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

    fetchDepartments();
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            departments.map((department) => (
              <DepartmentListing key={department._id} department={department} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default DepartmentListings;
