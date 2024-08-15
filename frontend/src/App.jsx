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

// App
const App = () => {
  // Login User
  const loginUser = async ({ email, password }) => {
    const response = await fetch('http://localhost:3001/api/v1/users/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    if (response.ok) {
      localStorage.setItem('token', data.token);
      return data;
    }
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
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
