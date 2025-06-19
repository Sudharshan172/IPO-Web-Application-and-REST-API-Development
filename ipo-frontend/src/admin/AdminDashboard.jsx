import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { BsFillCartDashFill, BsFillExclamationCircleFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { BiSolidWallet } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";
import { MdInsertChart } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role !== "admin") {
            navigate("/home");  // Redirect unauthorized users
        }
    }, []);

    return (
        <div>
            {/* Navbar */}
            <AdminNavbar />

            {/* Sidebar - Sticky Left Menu */}
            <div className="fixed left-0 top-[10vh] h-full w-1/5 bg-gray-100 p-4 shadow-lg">
                <p className="text-lg font-bold mb-4">Menu</p>
                
                <div className="space-y-4">
                    {/* Dashboard */}
                    <NavLink 
                        to="/admin/dashboard" 
                        className={({ isActive }) => 
                            `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`
                        }
                    >
                        <MdInsertChart className="text-xl" />
                        <p>Dashboard</p>
                    </NavLink>

                    {/* Manage IPO */}
                    <NavLink 
                        to="/admin/manage-ipo" 
                        className={({ isActive }) => 
                            `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`
                        }
                    >
                        <BsFillCartDashFill className="text-xl"/>
                        <p>Manage IPO</p>
                    </NavLink>

                    {/* IPO Subscription */}
                    <NavLink 
                        to="/admin/ipo-subscription" 
                        className={({ isActive }) => 
                            `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`
                        }
                    >
                        <img 
                            src="https://cdn-icons-png.freepik.com/512/12381/12381280.png"
                            alt="IPO Subscription"
                            className="w-6 h-6"
                        />
                        <p>IPO Subscription</p>
                    </NavLink>

                    {/* IPO Allotment */}
                    <NavLink 
                        to="/admin/ipo-allotment" 
                        className={({ isActive }) => 
                            `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`
                        }
                    >
                        <AiFillMessage className="text-xl"/>
                        <p>IPO Allotment</p>
                    </NavLink>

                    <p className="text-lg font-bold mt-4">OTHERS</p>

                    {/* Settings */}
                    <NavLink 
                        to="/admin/settings" 
                        className={({ isActive }) => 
                            `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`
                        }
                    >
                        <IoMdSettings className="text-xl"/>
                        <p>Settings</p>
                    </NavLink>

                    {/* API Manager */}
                    <NavLink 
                        to="/admin/api-manager" 
                        className={({ isActive }) => 
                            `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`
                        }
                    >
                        <BiSolidWallet className="text-xl"/>
                        <p>API Manager</p>
                    </NavLink>

                    {/* Accounts */}
                    <NavLink 
                        to="/admin/accounts" 
                        className={({ isActive }) => 
                            `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`
                        }
                    >
                        <RxAvatar className="text-xl"/>
                        <p>Accounts</p>
                    </NavLink>

                    {/* Help */}
                    <NavLink 
                        to="/admin/help" 
                        className={({ isActive }) => 
                            `flex items-center gap-2 cursor-pointer p-2 rounded-md ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`
                        }
                    >
                        <BsFillExclamationCircleFill className="text-xl"/>
                        <p>Help</p>
                    </NavLink>
                </div>
            </div>

            <div className="ml-[21%] p-10 relative mt-[72px] w-[79%]">
                <h2 className="text-xl font-bold mb-10">Dashboard</h2>

                {/* Dashboard Content */}
                <div className="flex justify-between gap-6">
                    {/* Image Section */}
                    <div>
                        <img 
                            src="https://bing.com/th/id/BCO.7a12a2a8-afbc-47e5-8515-5626a7286615.png" 
                            className="h-80"
                        />
                    </div>

                    {/* Quick Links Section */}
                    <div className="">
                        <p className="text-lg font-bold">Quick Links</p>
                        <p className="text-gray-600 mb-8">Adipiscing elit, sed do elusmod tempor</p>

                        <div className="space-y-8">
                            {/* NSE India */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <img 
                                        src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/92/9a/7a/929a7a27-6da1-afdf-8f72-05767d6baf11/AppIcon-0-0-1x_U007emarketing-0-11-0-0-85-220.png/1200x630wa.png" 
                                        className="h-10"
                                    />
                                    <p>NSE India</p>
                                </div>
                                <p className="text-blue-500 cursor-pointer">Visit Now</p>
                            </div>

                            {/* BSE India */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img 
                                        src="https://logos-world.net/wp-content/uploads/2023/07/BSE-Logo-before-2023.png" 
                                        className="h-9"
                                    />
                                    <p>BSE India</p>
                                </div>
                                <p className="text-blue-500 cursor-pointer hover:underline">Visit Now</p>
                            </div>

                            {/* SEBI*/}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img 
                                        src="https://www.nuqiwealth.com/tieups/sebi.png" 
                                        className="h-8"
                                    />
                                    <p>SEBI</p>
                                </div>
                                <p className="text-blue-500 cursor-pointer hover:underline">Visit Now</p>
                            </div>

                            {/* Money control */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-5">
                                    <img 
                                        src="https://cdn.freelogovectors.net/wp-content/uploads/2022/01/moneycontrol-logo-freelogovectors.net_-400x87.png" 
                                        className="h-3"
                                    />
                                    <p>Money Control</p>
                                </div>
                                <p className="text-blue-500 cursor-pointer hover:underline">Visit Now</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-md">
                        {/* Header Section */}
                        <div className="flex justify-between items-center pb-3 mb-4">
                            <div>
                                <p className="text-lg font-bold">Main Board IPO</p>
                                <p className="text-gray-500">From 01 Jan 2024</p>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                View Report
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="flex justify-center">
                            <img
                                src="https://bing.com/th/id/BCO.73e58ec2-6766-412f-b084-464147978b46.png"
                                alt="IPO Report"
                                className="h-50"
                            />
                        </div>

                        {/* Stats Section (Upcoming, Listed, Ongoing) */}
                        <div className="flex justify-between gap-5 items-center text-center">
                            <p className="flex flex-col items-center">
                                <span className="flex items-center">
                                    <GoDotFill className="text-blue-600 text-lg" />
                                    <span>Upcoming</span>
                                </span>
                                <span>15</span>
                            </p>
                            <p className="flex flex-col items-center">
                                <span className="flex items-center">
                                    <GoDotFill className="text-blue-400 text-lg" />
                                    <span>New Listed</span>
                                </span>
                                <span>25</span>
                            </p>
                            <p className="flex flex-col items-center">
                                <span className="flex items-center">
                                    <GoDotFill className="text-blue-200 text-lg" />
                                    <span>Ongoing</span>
                                </span>
                                <span>2</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
