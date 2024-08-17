import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

import RequirementListing from "./RequirementListing";

const RequirementListings = ({ project_id }) => {
  const [requirements, setRequirements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequirementsByProject = async () => {
      try {
        const response = await fetch(`/api/requirements/project/${project_id}`);
        const data = await response.json();
        if (response.ok) {
          setRequirements(data);
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

    fetchRequirementsByProject();
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            requirements.map((requirement) => (
              <RequirementListing
                key={requirement._id}
                requirement={requirement}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default RequirementListings;
