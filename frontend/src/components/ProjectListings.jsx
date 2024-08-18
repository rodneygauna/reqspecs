import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

import ProjectListing from "../components/ProjectListing";

const ProjectListings = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const apiUrl = "http://backend:3001/api/v1/projects";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.ok) {
          setProjects(data);
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

    fetchProjects();
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            projects.map((project) => (
              <ProjectListing key={project._id} project={project} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectListings;
