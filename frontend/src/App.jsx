import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// App
const App = () => {
  // Login User
  const loginUser = async ({ email, password }) => {
    // Fetch request to the backend
    const response = await fetch('http://localhost:3001/api/v1/users/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
      localStorage.setItem('token', data.token);
      return data;
    }
  };

  // Register User
  const registerUser = async (userData) => {
    // Fetch request to the backend
    const response = await fetch('http://localhost:3001/api/v1/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
