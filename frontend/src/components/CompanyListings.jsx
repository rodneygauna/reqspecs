import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

import CompanyListing from "./CompanyListing";

const CompanyListings = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      const apiUrl = "/api/v1/companies";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.ok) {
          setCompanies(data);
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

    fetchCompanies();
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            companies.map((company) => (
              <CompanyListing key={company._id} company={company} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CompanyListings;
