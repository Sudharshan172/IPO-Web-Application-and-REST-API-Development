import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Navbar = ({ setIsAuthenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  // ✅ Listen for authentication changes dynamically
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // ✅ Logout function with state update
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // ✅ Force authentication update to reflect logout immediately
    window.dispatchEvent(new Event("storage"));

    window.location.href="/"; // Redirect to signin page
  };

  if (menuOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Bluestock Logo" className="h-7 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-1 justify-center">
          <ul className="flex space-x-6 items-center">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/ipo">IPO</Link></li>
            <li><Link to="/community">COMMUNITY</Link></li>
           <li className="relative group">
              <Link to="/products" className="cursor-pointer inline-flex items-center">
                PRODUCTS <FaAngleDown className="ml-1" />
              </Link>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-black rounded shadow-md z-50 w-40">
                <li><Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link></li>
                <li><Link to="/sector" className="block px-4 py-2 hover:bg-gray-100">Sector</Link></li>
                <li><Link to="/mutualfunds" className="block px-4 py-2 hover:bg-gray-100">Mutualfunds</Link></li>
                <li><Link to="/stockschool" className="block px-4 py-2 hover:bg-gray-100">Stock School</Link></li>
              </ul>
            </li>

            <li><Link to="/brokers" className="inline-flex items-center">BROKERS <MdArrowOutward className="ml-1" /></Link></li>
            <li className="relative group">
              <span className="cursor-pointer inline-flex items-center">ABOUT <FaAngleDown className="ml-1" /></span>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-black rounded shadow-md z-50 w-40">
                <li><Link to="/aboutus" className="block px-4 py-2 hover:bg-gray-100">About Us</Link></li>
                <li><Link to="/aboutus/careers" className="block px-4 py-2 hover:bg-gray-100">Careers</Link></li>
                <li><Link to="/aboutus/contactus" className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="hidden sm:flex space-x-4">
          {isAuthenticated ? (
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer">Logout</button>
          ) : (
            <>
              <Link to="/signin" className="bg-white text-blue-500 px-2 py-2 rounded hover:bg-gray-100 transition">Sign In</Link>
              <Link to="/signupnow" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition">Sign Up Now</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl cursor-pointer">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && <div className="fixed inset-0 bg-black/30 backdrop-blur-lg z-40"></div>}

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed top-[1%] left-[5%] w-[90%] h-7/8 bg-gray-100 text-black shadow-lg p-6 z-50 overflow-y-auto">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-2xl text-black">
            <FaTimes />
          </button>
          <ul className="space-y-6 font-medium mt-8">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
            <li><Link to="/community" onClick={() => setMenuOpen(false)}>COMMUNITY</Link></li>

            {/* IPO */}
            <li>
              <button onClick={() => setOpenDropdown(openDropdown === "ipo" ? null : "ipo")} className="flex items-center w-full">
                IPO <FaAngleDown className="ml-2" />
              </button>
              {openDropdown === "ipo" && (
                <ul className="mt-2 bg-gray-200 p-2 rounded">
                  <li><Link to="/ipo" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>IPO</Link></li>
                  <li><Link to="/ipo/upcoming" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>Upcoming IPO</Link></li>
                </ul>
              )}
            </li>

            {/* PRODUCTS */}
            <li>
              <button onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")} className="flex items-center w-full">
                PRODUCTS <FaAngleDown className="ml-2" />
              </button>
              {openDropdown === "products" && (
                <ul className="mt-2 bg-gray-200 p-2 rounded">
                  <li><Link to="/blog" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>Blog</Link></li>
                  <li><Link to="/sector" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>Sector</Link></li>
                  <li><Link to="/mutualfunds" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>Mutualfunds</Link></li>
                  <li><Link to="/stockschool" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>Stock School</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/brokers" onClick={() => setMenuOpen(false)}>BROKERS</Link></li>

            {/* ABOUT */}
            <li>
              <button onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")} className="flex items-center w-full">
                ABOUT <FaAngleDown className="ml-2" />
              </button>
              {openDropdown === "about" && (
                <ul className="mt-2 bg-gray-200 p-2 rounded">
                  <li><Link to="/aboutus" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>About Us</Link></li>
                  <li><Link to="/aboutus/careers" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>Careers</Link></li>
                  <li><Link to="/aboutus/contactus" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>Contact Us</Link></li>
                </ul>
              )}
            </li>

            {/* Mobile Auth Section */}
            {isAuthenticated ? (
              <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition w-full mt-4">Logout</button>
            ) : (
              <>
                <li><Link to="/signin" onClick={() => setMenuOpen(false)}>Sign In</Link></li>
                <li><Link to="/signupnow" onClick={() => setMenuOpen(false)} className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition inline-block">Sign Up Now</Link></li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
