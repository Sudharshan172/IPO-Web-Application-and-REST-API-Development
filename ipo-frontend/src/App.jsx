import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import IPO from "./pages/IPO/IPO";
import Upcoming from "./pages/IPO/Upcoming";
import Community from "./pages/Community";
import Brokers from "./pages/Brokers";
import Signin from "./pages/Signin";
import SignUpNow from "./pages/SignUpNow";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./admin/AdminDashboard";
import ManageIPO from "./admin/ManageIPO";
import RegisterIPO from "./admin/RegisterIPO";

// Products Dropdown Pages
import Products from "./pages/Products/Products";
import Blog from "./pages/Products/Blog";
import Sector from "./pages/Products/Sector";
import Mutualfund from "./pages/Products/Mutualfund";
import Stockschool from "./pages/Products/Stockschool";

// About Dropdown Pages
import AboutUs from "./pages/About/AboutUs";
import Careers from "./pages/About/Careers";
import ContactUs from "./pages/About/ContactUs";

const LayoutWrapper = ({ children, setIsAuthenticated }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar setIsAuthenticated={setIsAuthenticated} />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role") || "user");

  const [ipoData, setIpoData] = useState([]);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
      setRole(localStorage.getItem("role") || "user");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Routes>
      {/* Public Routes with Full Layout */}
      <Route path="/" element={<LayoutWrapper setIsAuthenticated={setIsAuthenticated}><Home /></LayoutWrapper>} />

      {/* Excluded Navbar & Footer for Signin & Signup */}
      <Route path="/signin" element={<Signin />} />
      <Route path="/signupnow" element={<SignUpNow />} />

      {/* Protected Routes with Full Layout */}
      <Route path="/ipo" element={isAuthenticated ? <LayoutWrapper><IPO /></LayoutWrapper> : <Navigate replace to="/signin" />} />
      <Route path="/ipo/upcoming" element={isAuthenticated ? <LayoutWrapper><Upcoming /></LayoutWrapper> : <Navigate replace to="/signin" />} />
      <Route path="/community" element={isAuthenticated ? <LayoutWrapper><Community /></LayoutWrapper> : <Navigate replace to="/signin" />} />
      <Route path="/brokers" element={isAuthenticated ? <LayoutWrapper><Brokers /></LayoutWrapper> : <Navigate replace to="/signin" />} />

      {/* Products Pages */}
      <Route path="/products" element={isAuthenticated ? <LayoutWrapper><Products /></LayoutWrapper> : <Navigate replace to="/signin" />} />
      <Route path="/blog" element={isAuthenticated ? <LayoutWrapper><Blog /></LayoutWrapper> : <Navigate replace to="/signin" />} />
      <Route path="/sector" element={isAuthenticated ? <LayoutWrapper><Sector /></LayoutWrapper> : <Navigate replace to="/signin" />} />
      <Route path="/mutualfunds" element={isAuthenticated ? <LayoutWrapper><Mutualfund /></LayoutWrapper> : <Navigate replace to="/signin" />} />
      <Route path="/stockschool" element={isAuthenticated ? <LayoutWrapper><Stockschool /></LayoutWrapper> : <Navigate replace to="/signin" />} />

      {/* About Pages */}
      <Route path="/aboutus" element={isAuthenticated ? <LayoutWrapper><AboutUs /></LayoutWrapper> : <Navigate replace to="/signin" />} />
      <Route path="/aboutus/careers" element={isAuthenticated ? <LayoutWrapper><Careers /></LayoutWrapper> : <Navigate replace to="/signin" />} />
      <Route path="/aboutus/contactus" element={isAuthenticated ? <LayoutWrapper><ContactUs /></LayoutWrapper> : <Navigate replace to="/signin" />} />

      {/* Admin Dashboard - No Navbar & Footer */}
      <Route path="/admin/dashboard" element={isAuthenticated && role === "admin" ? <AdminDashboard /> : <Navigate replace to="/signin" />} />
      <Route path="/admin/manage-ipo" element={isAuthenticated && role === "admin" ? <ManageIPO ipoData={ipoData} /> : <Navigate replace to="/signin" />} />
      <Route path="/admin/register-ipo" element={isAuthenticated && role === "admin" ? <RegisterIPO setIpoData={setIpoData} /> : <Navigate replace to="/signin" />} />

      {/* 404 Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
