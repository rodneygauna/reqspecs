export const projectLoader = async ({ params }) => {
  const response = await fetch(
    `http://localhost:3001/api/v1/projects/${params.id}`
  );
  const data = await response.json();
  return data;
};
