import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
// Pages - Login and Register
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// Pages - Company
import CompanyAddPage from "./pages/companyPages/CompanyAddPage";
import CompanyViewAllPage from "./pages/companyPages/CompanyViewAllPage";
import CompanyViewSinglePage from "./pages/companyPages/CompanyViewSinglePage";
import CompanyEditPage from "./pages/companyPages/CompanyEditPage";
// Pages - Department
import DepartmentAddPage from "./pages/departmentPages/DepartmentAddPage";
import DepartmentViewAllPage from "./pages/departmentPages/DepartmentViewAllPage";
import DepartmentViewSinglePage from "./pages/departmentPages/DepartmentViewSinglePage";
import DepartmentEditPage from "./pages/departmentPages/DepartmentEditPage";
// Pages - Project
import ProjectAddPage from "./pages/projectPages/ProjectAddPage";
import ProjectViewAllPage from "./pages/projectPages/ProjectViewAllPage";
import ProjectViewSinglePage from "./pages/projectPages/ProjectViewSinglePage";
import ProjectEditPage from "./pages/projectPages/ProjectEditPage";
// Pages - Category
import CategoryAddPage from "./pages/categoryPages/CategoryAddPage";
import CategoryViewAllPage from "./pages/categoryPages/CategoryViewAllPage";
import CategoryViewSinglePage from "./pages/categoryPages/CategoryViewSinglePage";
import CategoryEditPage from "./pages/categoryPages/CategoryEditPage";
// Pages - Requirement
import RequirementAddPage from "./pages/requirementPages/RequirementAddPage";
import RequirementViewByProject from "./pages/requirementPages/RequirementViewByProject";
import RequirementEditPage from "./pages/requirementPages/RequirementEditPage";

// Loaders
import {
  companyLoader,
  departmentLoader,
  projectLoader,
  categoryLoader,
  requirementLoader,
  requirementsByProjectLoader,
} from "./loaders/Loaders";

// App
const App = () => {
  // Login User
  const loginUser = async ({ email, password }) => {
    // Fetch request to the backend
    const response = await fetch("http://backend:3001/api/v1/users/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error(data.message);
    }
    // If the response is ok, store the token in session storage
    if (response.ok) {
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("current_user_id", data._id);
      return data;
    }
  };
  // Register User
  const registerUser = async (userData) => {
    // Fetch request to the backend
    const response = await fetch("http://backend:3001/api/v1/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error(data.message);
    }
    // If the response is ok, return the data
    return data;
  };
  // Logout User
  const logoutUser = () => {
    // Remove the token from session storage
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("current_user_id");
    window.dispatchEvent(new Event("storage"));
  };

  // Add Company
  const addCompany = async ({ company_name, is_active }) => {
    // Fetch request to the backend
    const response = await fetch("/api/v1/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ company_name, is_active }),
    });
    const data = await response.json();
    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error(data.message);
    }
    // If the response is ok, return the data
    return data;
  };
  // Edit Company
  const editCompany = async (companyData) => {
    // Fetch request to the backend
    const response = await fetch(
      `http://backend:3001/api/v1/companies/${companyData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyData),
      }
    );
    const data = await response.json();
    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error(data.message);
    }
    // If the response is ok, return the data
    return data;
  };

  // Add Department
  const addDepartment = async (departmentData) => {
    // Fetch request to the backend
    const response = await fetch("http://backend:3001/api/v1/departments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(departmentData),
    });
    const data = await response.json();
    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error(data.message);
    }
    // If the response is ok, return the data
    return data;
  };
  // Edit Department
  const editDepartment = async (departmentData) => {
    // Fetch request to the backend
    const response = await fetch(
      `http://backend:3001/api/v1/departments/${departmentData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(departmentData),
      }
    );
    const data = await response.json();
    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error(data.message);
    }
    // If the response is ok, return the data
    return data;
  };

  // Add Project
  const addProject = async (projectData) => {
    // Fetch request to the backend
    const response = await fetch("http://backend:3001/api/v1/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(projectData),
    });
    const data = await response.json();
    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error(data.message);
    }
    // If the response is ok, return the data
    return data;
  };
  // Edit Project
  const editProject = async (projectData) => {
    // Fetch request to the backend
    const response = await fetch(
      `http://backend:3001/api/v1/projects/${projectData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(projectData),
      }
    );
    const data = await response.json();
    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error(data.message);
    }
    // If the response is ok, return the data
    return data;
  };

  // Add Category
  const addCategory = async (
    category_name,
    category_description,
    is_active
  ) => {
    // Fetch request to the backend
    const response = await fetch("http://backend:3001/api/v1/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(category_name, category_description, is_active),
    });
    const data = await response.json();
    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error(data.message);
    }
    // If the response is ok, return the data
    return data;
  };
  // Edit Category
  const editCategory = async (categoryData) => {
    // Fetch request to the backend
    const response = await fetch(
      `http://backend:3001/api/v1/categories/${categoryData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(categoryData),
      }
    );
    const data = await response.json();
    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error(data.message);
    }
    // If the response is ok, return the data
    return data;
  };

  // Add Requirement
  const addRequirement = async (requirementData) => {
    // Fetch request to the backend
    const response = await fetch("http://backend:3001/api/v1/requirements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(requirementData),
    });
    const data = await response.json();
    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error(data.message);
    }
    // If the response is ok, return the data
    return data;
  };
  // Edit Requirement
  const editRequirement = async (requirementData) => {
    // Fetch request to the backend
    const response = await fetch(
      `http://backend:3001/api/v1/requirements/${requirementData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(requirementData),
      }
    );
    const data = await response.json();
    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error(data.message);
    }
    // If the response is ok, return the data
    return data;
  };

  // Routes for pages
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={<LoginPage userLoginSubmit={loginUser} />}
        />
        <Route
          path="/register"
          element={<RegisterPage userRegisterSubmit={registerUser} />}
        />
        <Route path="/logout" element={<HomePage logoutUser={logoutUser} />} />
        <Route
          path="/company/add"
          element={<CompanyAddPage companyAddSubmit={addCompany} />}
        />
        <Route path="/companies" element={<CompanyViewAllPage />} />
        <Route
          path="/company/:id"
          element={<CompanyViewSinglePage />}
          loader={companyLoader}
        />
        <Route
          path="/company/edit/:id"
          element={<CompanyEditPage companyEditSubmit={editCompany} />}
          loader={companyLoader}
        />
        <Route
          path="/department/add"
          element={<DepartmentAddPage departmentAddSubmit={addDepartment} />}
        />
        <Route path="/departments" element={<DepartmentViewAllPage />} />
        <Route
          path="/department/:id"
          element={<DepartmentViewSinglePage />}
          loader={departmentLoader}
        />
        <Route
          path="/department/edit/:id"
          element={<DepartmentEditPage departmentEditSubmit={editDepartment} />}
          loader={departmentLoader}
        />
        <Route
          path="/project/add"
          element={<ProjectAddPage projectAddSubmit={addProject} />}
        />
        <Route path="/projects" element={<ProjectViewAllPage />} />
        <Route
          path="/project/:id"
          element={<ProjectViewSinglePage />}
          loader={projectLoader}
        />
        <Route
          path="/project/edit/:id"
          element={<ProjectEditPage projectUpdateSubmit={editProject} />}
          loader={projectLoader}
        />
        <Route
          path="/category/add"
          element={<CategoryAddPage categoryAddSubmit={addCategory} />}
        />
        <Route path="/categories" element={<CategoryViewAllPage />} />
        <Route
          path="/category/:id"
          element={<CategoryViewSinglePage />}
          loader={categoryLoader}
        />
        <Route
          path="/category/edit/:id"
          element={<CategoryEditPage categoryEditSubmit={editCategory} />}
          loader={categoryLoader}
        />
        <Route
          path="/requirement/add"
          element={<RequirementAddPage requirementAddSubmit={addRequirement} />}
        />
        <Route
          path="/requirements/project/:id"
          element={<RequirementViewByProject />}
          loader={requirementsByProjectLoader}
        />
        <Route
          path="/requirement/edit/:id"
          element={
            <RequirementEditPage requirementEditSubmit={editRequirement} />
          }
          loader={requirementLoader}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
