import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(localStorage.getItem("role")); // Fetch user role from localStorage
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-600">The page you are looking for doesn't exist.</p>
      
      <button
        onClick={() => navigate(role === "admin" ? "/admin/dashboard" : "/")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
      >
        {role === "admin" ? "Go to Admin Dashboard" : "Go to Home"}
      </button>
    </div>
  );
};

export default NotFound;
