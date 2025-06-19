import AdminNavbar from "./AdminNavbar";
import { BsFillCartDashFill, BsFillExclamationCircleFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { BiSolidWallet } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { MdInsertChart } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { IpoContext } from "../context/IpoContext";
import { useContext, useEffect } from "react";

const ManageIPO = ()=>{
    const location = useLocation();
    const { ipoData, setIpoData } = useContext(IpoContext);
    useEffect(() => {
        const storedData = localStorage.getItem("ipoData");
        if (storedData) {
            setIpoData(JSON.parse(storedData)); // Restore IPO data from localStorage
        }
    }, []);
    const handleDelete = (index) => {
        const updatedData = ipoData.filter((_, i) => i !== index); // Remove the selected IPO
        setIpoData(updatedData);
        localStorage.setItem("ipoData", JSON.stringify(updatedData)); // Update localStorage
    };


    return(
        <div>
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
                    <NavLink to="/admin/manage-ipo"className={`flex items-center gap-2 p-2 rounded-md ${location.pathname.includes("/admin/manage-ipo") || location.pathname.includes("/admin/register-ipo") ? "bg-blue-200": "hover:bg-gray-200"}`}>
                        <BsFillCartDashFill className="text-xl" /> {/* Added the missing icon here */}
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

            <div className="flex justify-between items-center p-4 mt-[10vh] ml-[20%]">
                <p className="text-lg font-semibold text-gray-800">Upcoming IPO | Dashboard</p>
                <NavLink to="/admin/register-ipo">
                <button className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white cursor-pointer">
                    Register IPO
                </button>
                </NavLink>
            </div>

            <div>
                {/* Table Header */}
                <div className="grid grid-cols-10 items-center justify-between px-4 py-2 bg-gray-100 ml-[20%]">
                    <p className="text-sm font-medium text-center">Company</p>
                    <p className="text-sm font-medium text-center">Price Band</p>
                    <p className="text-sm font-medium text-center">Open</p>
                    <p className="text-sm font-medium text-center">Close</p>
                    <p className="text-sm font-medium text-center">Issue Size</p>
                    <p className="text-sm font-medium text-center">Issue Type</p>
                    <p className="text-sm font-medium text-center">Listing Date</p>
                    <p className="text-sm font-medium text-center">Status</p>
                    <p className="text-sm font-medium text-center">Action</p>
                    <p className="text-sm font-medium text-center">Delete/View</p>
                </div>

                {/* Dynamic IPO Data Rows */}
                {ipoData.map((ipo, index) => (
                <div key={index} className="grid grid-cols-10 items-center justify-between px-4 py-2 ml-[20%] border-b border-gray-300">
                    <p className="text-sm text-center">{ipo.companyName}</p>
                    <p className="text-sm text-center">{ipo.priceBand}</p>
                    <p className="text-sm text-center">{ipo.openDate}</p>
                    <p className="text-sm text-center">{ipo.closeDate}</p>
                    <p className="text-sm text-center">{ipo.issueSize}</p>
                    <p className="text-sm text-center">{ipo.issueType}</p>
                    <p className="text-sm text-center">{ipo.listingDate}</p>
                    <p className="text-sm text-center">{ipo.status}</p>
                    <button className="text-blue-600 cursor-pointer text-center">Update</button>
                    <div className="flex gap-2 text-center justify-center">
                        <button onClick={() => handleDelete(index)} className="text-red-600 cursor-pointer">
                            Delete
                        </button>
                        <button className="text-green-600 cursor-pointer">View</button>
                    </div>
                </div>
                ))}
            </div>

        </div>
    );
};
export default ManageIPO;