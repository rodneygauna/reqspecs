import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import logo from "/logo-423x528.png";

const Navbar = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // On page load, check if user is authenticated
  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  // Logout logic
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("current_user_id");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    checkAuth();

    // Listen for storage events
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };
    window.addEventListener("storage", handleStorageChange);
    // Cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-indigo-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="ReqSpecs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                ReqSpecs
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                {isAuthenticated && (
                  <>
                    <NavLink to="/companies" className={linkClass}>
                      Companies
                    </NavLink>
                    <NavLink to="/departments" className={linkClass}>
                      Departments
                    </NavLink>
                    <NavLink to="/categories" className={linkClass}>
                      Categories
                    </NavLink>
                    <NavLink to="/projects" className={linkClass}>
                      Projects
                    </NavLink>
                    <a
                      href="/"
                      className="text-white hover:bg-indigo-900 hover:text-white rounded-md px-3 py-2"
                      onClick={logout}
                    >
                      Logout
                    </a>
                  </>
                )}
                {!isAuthenticated && (
                  <>
                    <NavLink to="/login" className={linkClass}>
                      Login
                    </NavLink>
                    <NavLink to="/register" className={linkClass}>
                      Register
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
