export const projectLoader = async ({ params }) => {
  const response = await fetch(
    `http://localhost:3001/api/v1/projects/${params.id}`
  );
  const data = await response.json();
  return data;
};

export const companyLoader = async ({ params }) => {
  const response = await fetch(
    `http://localhost:3001/api/v1/companies/${params.id}`
  );
  const data = await response.json();
  return data;
};

export const departmentLoader = async ({ params }) => {
  const response = await fetch(
    `http://localhost:3001/api/v1/departments/${params.id}`
  );
  const data = await response.json();
  return data;
};

export const categoryLoader = async ({ params }) => {
  const response = await fetch(
    `http://localhost:3001/api/v1/categories/${params.id}`
  );
  const data = await response.json();
  return data;
};
