import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { user, role, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const handleItemClick = () => {
    setIsSidebarOpen(false);
  };

  // Function to check if a nav item is active
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Function to get nav link classes
  const getNavLinkClasses = (path) => {
    const baseClasses = "font-medium transition duration-300";
    if (isActive(path)) {
      return `${baseClasses} text-green-600`;
    }
    return `${baseClasses} text-black hover:text-green-600`;
  };

  return (
    <nav className="bg-white text-black sticky top-0 z-200 w-full rounded-bl-4xl rounded-br-4xl shadow-lg">
      <div className="w-full py-4 px-6 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-15  h-10 relative">
              {/* 3D Cube Icon - recreating the exact green cube from Figma */}
              <img className="h-12 w-full" src="/midLogo.png" alt="logo" />
            </div>
            <span className="text-[#09BE43] mt-1 font-bold text-2xl">
              Edumaniax
            </span>
          </Link>
        </div>

        {/* <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
          <Link to="/">
            <img
              src="/loginPageDesign/EduManiax_Logo.svg"
              alt="Edumaniax Logo"
              className="h-20 w-auto"
            />
          </Link>
          <h1 className="text-white text-2xl font-bold">Edumaniax</h1>
        </div> */}

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={getNavLinkClasses("/")}>
            Home
          </Link>
          <Link to="/about" className={getNavLinkClasses("/about")}>
            About Us
          </Link>
          <Link to="/courses" className={getNavLinkClasses("/courses")}>
            Courses
          </Link>
          <Link to="/pricing" className={getNavLinkClasses("/pricing")}>
            Pricing
          </Link>
          <Link to="/blogs" className={getNavLinkClasses("/blogs")}>
            Blogs
          </Link>
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user || role === "admin" ? (
            <>
              <Link
                to="/dashboard"
                className="bg-green-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="border border-green-600 text-green-600 font-medium px-6 py-2 rounded-lg hover:bg-green-50 transition duration-300"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-green-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Log In
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-black"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          ref={sidebarRef}
          className="md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col"
        >
          <div className="px-6 py-6 flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-black">Menu</h2>
              <button onClick={handleItemClick}>
                <X size={24} className="text-black" />
              </button>
            </div>

            <hr className="mb-6" />

            {/* Navigation Links */}
            <div className="space-y-4">
              <Link
                to="/"
                onClick={handleItemClick}
                className={`block text-lg font-medium transition duration-300 ${
                  isActive("/")
                    ? "text-green-600"
                    : "text-black hover:text-green-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={handleItemClick}
                className={`block text-lg font-medium transition duration-300 ${
                  isActive("/about")
                    ? "text-green-600"
                    : "text-black hover:text-green-600"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/courses"
                onClick={handleItemClick}
                className={`block text-lg font-medium transition duration-300 ${
                  isActive("/courses")
                    ? "text-green-600"
                    : "text-black hover:text-green-600"
                }`}
              >
                Courses
              </Link>
              <Link
                to="/pricing"
                onClick={handleItemClick}
                className={`block text-lg font-medium transition duration-300 ${
                  isActive("/pricing")
                    ? "text-green-600"
                    : "text-black hover:text-green-600"
                }`}
              >
                Pricing
              </Link>
              <Link
                to="/blogs"
                onClick={handleItemClick}
                className={`block text-lg font-medium transition duration-300 ${
                  isActive("/blogs")
                    ? "text-green-600"
                    : "text-black hover:text-green-600"
                }`}
              >
                Blogs
              </Link>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="px-6 py-6 border-t border-gray-200">
            {user || role === "admin" ? (
              <div className="space-y-3">
                <Link
                  to="/dashboard"
                  onClick={handleItemClick}
                  className="block bg-green-600 text-white text-center hover:bg-green-700 transition duration-300 px-4 py-3 rounded-lg font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout(navigate);
                    handleItemClick();
                  }}
                  className="w-full border border-green-600 text-green-600 hover:bg-green-50 transition duration-300 px-4 py-3 rounded-lg font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <Link
                  to="/register"
                  onClick={handleItemClick}
                  className="block border border-green-600 text-green-600 text-center hover:bg-green-50 transition duration-300 px-4 py-3 rounded-lg font-medium"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  onClick={handleItemClick}
                  className="block bg-green-600 text-white text-center hover:bg-green-700 transition duration-300 px-4 py-3 rounded-lg font-medium"
                >
                  Log In
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
