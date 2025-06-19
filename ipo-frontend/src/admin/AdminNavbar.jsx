import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const AdminNavbar = () => {
    const navigate = useNavigate();
    const userName = "Admin"; // Replace with dynamic user data

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");

        // ✅ Force authentication state update to reflect logout immediately
        window.dispatchEvent(new Event("storage"));

        // ✅ Redirect to home after logout
        navigate("/signin");
    };

    return (
        <div className="fixed top-0 w-full bg-white shadow-md">
            <div className="flex">
                {/* Branding Section */}
                <div className="bg-blue-100 w-[20%] flex items-center p-4 h-[10vh]">
                    <div className="rounded-full bg-blue-500 text-white w-10 h-10 flex justify-center items-center font-bold text-lg">
                        BF
                    </div>
                    <h1 className="ml-4 text-xl font-bold text-blue-600">Bluestock Fintech</h1>
                </div>

                {/* Search & User Section */}
                <div className=" w-[80%] flex justify-between items-center p-4 h-[10vh]">
                    {/* Search Bar */}
                    <div className="flex items-center rounded-md bg-gray-100 px-2 w-[40%]">
                        <input
                            type="text"
                            placeholder="Search"
                            className="p-1 w-full text-black bg-transparent outline-none"
                        />
                        <IoSearchOutline className="text-gray-500 text-xl" />
                    </div>

                    {/* User & Logout Dropdown */}
                    <div className="flex items-center gap-10 relative group mr-15">
                        <div className="flex justify-between items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white font-bold text-lg">
                            {userName.charAt(0)}
                            </div>
                            <p>Hi, {userName}</p>
                        </div>
                        <div className="relative cursor-pointer">
                            <RiArrowDropDownLine className="text-xl" />

                            {/* Dropdown appears on hover */}
                            <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-2 w-32 bg-white shadow-lg rounded-md hidden group-hover:block">
                                <button 
                                    onClick={handleLogout} 
                                    className="w-full px-4 py-2 text-center hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;
