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
// Pages - Project
import ProjectAddPage from "./pages/projectPages/ProjectAddPage";
import ProjectViewAllPage from "./pages/projectPages/ProjectViewAllPage";
// Pages - Category
import CategoryAddPage from "./pages/categoryPages/CategoryAddPage";
// Pages - Requirement
import RequirementAddPage from "./pages/requirementPages/RequirementAddPage";

// App
const App = () => {
  // Login User
  const loginUser = async ({ email, password }) => {
    // Fetch request to the backend
    const response = await fetch("http://localhost:3001/api/v1/users/auth", {
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
    // If the response is ok, store the token in local storage
    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("current_user_id", data._id);
      return data;
    }
  };

  // Register User
  const registerUser = async (userData) => {
    // Fetch request to the backend
    const response = await fetch(
      "http://localhost:3001/api/v1/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
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

  // Add Company
  const addCompany = async ({ company_name, is_active }) => {
    // Fetch request to the backend
    const response = await fetch("http://localhost:3001/api/v1/companies", {
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

  // Add Project
  const addProject = async (projectData) => {
    // Fetch request to the backend
    const response = await fetch("http://localhost:3001/api/v1/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  // Add Category
  const addCategory = async (
    category_name,
    category_description,
    is_active
  ) => {
    // Fetch request to the backend
    const response = await fetch("http://localhost:3001/api/v1/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  // Add Requirement
  const addRequirement = async (requirementData) => {
    // Fetch request to the backend
    const response = await fetch("http://localhost:3001/api/v1/requirements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        <Route
          path="/company/add"
          element={<CompanyAddPage companyAddSubmit={addCompany} />}
        />
        <Route
          path="/project/add"
          element={<ProjectAddPage projectAddSubmit={addProject} />}
        />
        <Route path="/projects" element={<ProjectViewAllPage />} />
        <Route
          path="/category/add"
          element={<CategoryAddPage categoryAddSubmit={addCategory} />}
        />
        <Route
          path="/requirement/add"
          element={<RequirementAddPage requirementAddSubmit={addRequirement} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
