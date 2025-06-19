import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { NavLink, useLocation } from "react-router-dom";
import { BsFillCartDashFill, BsFillExclamationCircleFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { BiSolidWallet } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { MdInsertChart } from "react-icons/md";
import { IpoContext } from "../context/IpoContext";

const RegisterIPO = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { setIpoData } = useContext(IpoContext);

    const [imageUrl, setImageUrl] = useState(""); // Store ImageKit URL

    const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // Generate URL for preview
      setImageUrl(imageURL); // Set URL to input field
    }
    };
    

    const [formData, setFormData] = useState({
      companyName: "",
      priceBand: "",
      openDate: "",
      closeDate: "",
      issueSize: "",
      issueType: "",
      listingDate: "",
      status: "",
    });

    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = () => {
      const processedData = {
        ...formData,
        openDate: formData.openDate === "" ? "Not Issued" : formData.openDate,
        closeDate: formData.closeDate === "" ? "Not Issued" : formData.closeDate,
        listingDate: formData.listingDate === "" ? "Not Issued" : formData.listingDate,
      };

      setIpoData((prev) => {
        const updatedData = [...prev, processedData];
        localStorage.setItem("ipoData", JSON.stringify(updatedData)); // Store in localStorage
        return updatedData;
      });
      setFormData({ // Reset form after submission
        companyName: "",
        priceBand: "",
        openDate: "",
        closeDate: "",
        issueSize: "",
        issueType: "",
        listingDate: "",
        status: "",
      });

      navigate("/admin/manage-ipo"); // Redirect to Manage IPO after submitting
    };

    

  return (
    <div>
      <AdminNavbar />
      {/* Sidebar - Sticky Left Menu */}
      <div className="fixed left-0 top-[10vh] h-full w-1/5 bg-gray-100 p-4 shadow-lg">
        <p className="text-lg font-bold mb-4">Menu</p>
        <div className="space-y-4">
            {/* Dashboard */}
            <NavLink to="/admin/dashboard" className={({ isActive }) => `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`}>
                <MdInsertChart className="text-xl" />
                <p>Dashboard</p>
            </NavLink>

            {/* Manage IPO */}
            <NavLink to="/admin/manage-ipo"className={`flex items-center gap-2 p-2 rounded-md ${location.pathname.includes("/admin/manage-ipo") || location.pathname.includes("/admin/register-ipo") ? "bg-blue-200": "hover:bg-gray-200"}`}>
                <BsFillCartDashFill className="text-xl" /> {/* Added the missing icon here */}
                <p>Manage IPO</p>
            </NavLink>

            {/* IPO Subscription */}
            <NavLink to="/admin/ipo-subscription" className={({ isActive }) => `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`}>
                <img src="https://cdn-icons-png.freepik.com/512/12381/12381280.png"alt="IPO Subscription"className="w-6 h-6"/>
                <p>IPO Subscription</p>
            </NavLink>

            {/* IPO Allotment */}
            <NavLink to="/admin/ipo-allotment" className={({ isActive }) => `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`}>
                <AiFillMessage className="text-xl"/>
                <p>IPO Allotment</p>
            </NavLink>

            <p className="text-lg font-bold mt-4">OTHERS</p>

            {/* Settings */}
            <NavLink to="/admin/settings" className={({ isActive }) => `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`}>
                <IoMdSettings className="text-xl"/>
                <p>Settings</p>
            </NavLink>

            {/* API Manager */}
            <NavLink to="/admin/api-manager" className={({ isActive }) => `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`}>
                <BiSolidWallet className="text-xl"/>
                <p>API Manager</p>
            </NavLink>

            {/* Accounts */}
            <NavLink to="/admin/accounts" className={({ isActive }) => `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`}>
                <RxAvatar className="text-xl"/>
                <p>Accounts</p>
            </NavLink>

            {/* Help */}
            <NavLink to="/admin/help" className={({ isActive }) => `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`}>
                <BsFillExclamationCircleFill className="text-xl"/>
                <p>Help</p>
            </NavLink>
        </div>
      </div>

      {/* Registration Form */}
      <div className="ml-[20%] mt-[13vh] p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Upcoming IPO Information</h1>
            <p className="text-gray-600">Manage your IPO Details</p>
          </div>
          <div className="flex gap-4 mr-5">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
            >
              Register
            </button>
            <NavLink to="/admin/manage-ipo">
              <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 cursor-pointer">
                Cancel
              </button>
            </NavLink>
          </div>
        </div>

        {/* IPO Info Section */}
        <div className="mt-5 w-[50%]">
          <h1 className="text-xl font-bold text-gray-800">IPO Information</h1>
          <p className="text-gray-600 mb-4">Enter IPO Details</p>

          {/* Company Logo Upload */}
          <div className="p-4 rounded-md flex items-center gap-6 mb-10">
            <div className="flex items-center justify-center bg-white rounded-md">
              <img
                src={imageUrl || "https://assets.entrepreneur.com/content/3x2/2000/1677226786-Untitleddesign-2023-02-24T134902626.jpg"}
                alt="Company Logo"
                className="h-15 object-cover"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-sm font-semibold text-gray-800">NSE India</h1>
              <p className="text-gray-600 text-sm">Tech Lead</p>
              <p className="text-gray-600 text-sm">Pune</p>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Paste Logo URL here..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="border rounded-lg h-12 w-1/2"
              />
              <button
                onClick={() => setImageUrl("")}
                className="px-2 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete Logo
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-semibold">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Vodafone Idea"
                className="border-2 border-gray-400 p-2 rounded-md w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-semibold">Price Band</label>
              <input
                type="text"
                name="priceBand"
                value={formData.priceBand}
                onChange={handleChange}
                placeholder="100 - 150"
                className="border-2 border-gray-400 p-2 rounded-md w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-semibold">Open Date</label>
              <input
                type="date"
                name="openDate"
                value={formData.openDate}
                onChange={handleChange}
                className="border-2 border-gray-400 p-2 rounded-md w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-semibold">Close Date</label>
              <input
                type="date"
                name="closeDate"
                value={formData.closeDate}
                onChange={handleChange}
                className="border-2 border-gray-400 p-2 rounded-md w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-semibold">Issue Size (₹ Cr)</label>
              <input
                type="text"
                name="issueSize"
                value={formData.issueSize}
                onChange={handleChange}
                placeholder="2300"
                className="border-2 border-gray-400 p-2 rounded-md w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-semibold">Issue Type</label>
              <select
                name="issueType"
                value={formData.issueType}
                onChange={handleChange}
                className="border-2 border-gray-400 p-2 rounded-md w-full"
              >
                <option value=""></option>
                <option value="Book Built">Book Built</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-semibold">Listing Date</label>
              <input
                type="date"
                name="listingDate"
                value={formData.listingDate}
                onChange={handleChange}
                className="border-2 border-gray-400 p-2 rounded-md w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-semibold">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border-2 border-gray-400 p-2 rounded-md w-full"
              >
                <option value=""></option>
                <option value="Ongoing">Ongoing</option>
                <option value="UpComing">UpComing</option>
                <option value="New Listed">New Listed</option>
              </select>
            </div>
          </div>
        </div>
      </div>


      </div>
  );
};

export default RegisterIPO;
