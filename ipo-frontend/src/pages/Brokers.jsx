import { IoCheckmarkSharp } from "react-icons/io5";
import { FaExclamationCircle } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { IoIosSend } from "react-icons/io";
const Brokers = () => {
  return (
    <div className="p-5">
      <div className="container mx-auto hidden md:hidden lg:block">
        <h1 className="text-3xl font-bold text-start mb-3">Made to Trade</h1>
        <div className="bg-blue-100 p-6 rounded-lg flex justify-between items-center w-[90%] mb-5">
          <div className="flex flex-row justify-between w-[70%]">
            {/* Left Section */}
            <div>
              <h1 className="text-2xl font-semibold">Upstock</h1>
              <img src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"/>

              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
                  <p className="text-sm">Reviews</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
                  <p className="text-sm">Accounts</p>
                </div>
              </div>

              <p className="mt-4 text-blue-600 font-medium mb-3">
                Open Demat A/C for FREE
              </p>

              <div className="flex gap-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2">Open A/C<IoIosSend className="text-lg" /></button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* Middle Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Equity Holdings</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Stock Market Updates</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Investment Strategies</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Trading Insights</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Financial Reports</span>
              </div>
            </div>
            {/* Right Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-5">
              <p className="text-gray-600 font-medium text-sm">A/C Opening Charge<br/> ₹0</p>
              <p className="text-gray-600 font-medium text-sm">Maintenance Charge<br/> ₹300</p>
              <p className="text-gray-600 font-medium text-sm">Delivery Brokerage<br/> <span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
              <p className="text-gray-600 font-medium text-sm">Intraday Brokerage<br/><span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-6">
            <img src="https://www.livelaw.in/h-upload/2024/12/28/578660-images.jpg" alt="Banner" className="w-40 h-40 rounded-md shadow-md" />
          </div>
        </div>

        <div className="bg-orange-100 p-6 rounded-lg flex justify-between items-center w-[90%] mb-5">
          <div className="flex flex-row justify-between w-[70%]">
            {/* Left Section */}
            <div>
              <h1 className="text-2xl font-semibold">AngleOne</h1>
              <img src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"/>

              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
                  <p className="text-sm">Reviews</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
                  <p className="text-sm">Accounts</p>
                </div>
              </div>

              <p className="mt-4 text-blue-600 font-medium mb-3">
                Open Demat A/C for FREE
              </p>

              <div className="flex gap-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2">Open A/C<IoIosSend className="text-lg" /></button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* Middle Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Equity Holdings</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Stock Market Updates</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Investment Strategies</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Trading Insights</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Financial Reports</span>
              </div>
            </div>
            {/* Right Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-5">
              <p className="text-gray-600 font-medium text-sm">A/C Opening Charge<br/> ₹0</p>
              <p className="text-gray-600 font-medium text-sm">Maintenance Charge<br/> ₹300</p>
              <p className="text-gray-600 font-medium text-sm">Delivery Brokerage<br/> <span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
              <p className="text-gray-600 font-medium text-sm">Intraday Brokerage<br/><span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-6">
            <img src="https://community.angelone.in/uploads/default/original/2X/d/d6fc9d50d67b5903af9082ba34e9a73626e3a6ce.png" alt="Banner" className="w-40 h-40 rounded-md" />
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg flex justify-between items-center w-[90%] mb-5">
          <div className="flex flex-row justify-between w-[70%]">
            {/* Left Section */}
            <div className="">
              <h1 className="text-2xl font-semibold">Groww</h1>
              <img src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"/>

              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
                  <p className="text-sm">Reviews</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
                  <p className="text-sm">Accounts</p>
                </div>
              </div>

              <p className="mt-4 text-blue-600 font-medium mb-3">
                Open Demat A/C for FREE
              </p>

              <div className="flex gap-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2">Open A/C<IoIosSend className="text-lg" /></button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* Middle Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Equity Holdings</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Stock Market Updates</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Investment Strategies</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Trading Insights</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Financial Reports</span>
              </div>
            </div>
            {/* Right Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-5">
              <p className="text-gray-600 font-medium text-sm">A/C Opening Charge<br/> ₹0</p>
              <p className="text-gray-600 font-medium text-sm">Maintenance Charge<br/> ₹300</p>
              <p className="text-gray-600 font-medium text-sm">Delivery Brokerage<br/> <span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
              <p className="text-gray-600 font-medium text-sm">Intraday Brokerage<br/><span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-6">
            <img src="https://images.sftcdn.net/images/t_app-icon-m/p/ebdb771b-7e6c-472b-bb17-205d32ad0f66/4029926395/groww-mutual-funds-app-logo" alt="Banner" className="w-40 h-40 rounded-md" />
          </div>
        </div>

        <div className="bg-orange-100 p-6 rounded-lg flex justify-between items-center w-[90%] mb-5">
          <div className="flex flex-row justify-between w-[70%]">
            {/* Left Section */}
            <div>
              <h1 className="text-2xl font-semibold">Dhan</h1>
              <img src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"/>

              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
                  <p className="text-sm">Reviews</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
                  <p className="text-sm">Accounts</p>
                </div>
              </div>

              <p className="mt-4 text-blue-600 font-medium mb-3">
                Open Demat A/C for FREE
              </p>

              <div className="flex gap-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2">Open A/C<IoIosSend className="text-lg" /></button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* Middle Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Equity Holdings</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Stock Market Updates</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Investment Strategies</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Trading Insights</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Financial Reports</span>
              </div>
            </div>
            {/* Right Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-5">
              <p className="text-gray-600 font-medium text-sm">A/C Opening Charge<br/> ₹0</p>
              <p className="text-gray-600 font-medium text-sm">Maintenance Charge<br/> ₹300</p>
              <p className="text-gray-600 font-medium text-sm">Delivery Brokerage<br/> <span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
              <p className="text-gray-600 font-medium text-sm">Intraday Brokerage<br/><span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-6">
            <img src="https://cdn-1.webcatalog.io/catalog/dhan/dhan-icon-filled-128.png?v=1732985175002" alt="Banner" className="w-40 h-40 rounded-md" />
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg flex justify-between items-center w-[90%] mb-5">
          <div className="flex flex-row justify-between w-[70%]">
            {/* Left Section */}
            <div>
              <h1 className="text-2xl font-semibold">Alice Blue</h1>
              <img src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"/>

              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
                  <p className="text-sm">Reviews</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
                  <p className="text-sm">Accounts</p>
                </div>
              </div>

              <p className="mt-4 text-blue-600 font-medium mb-3">
                Open Demat A/C for FREE
              </p>

              <div className="flex gap-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2">Open A/C<IoIosSend className="text-lg" /></button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* Middle Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Equity Holdings</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Stock Market Updates</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Investment Strategies</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Trading Insights</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Financial Reports</span>
              </div>
            </div>
            {/* Right Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-5">
              <p className="text-gray-600 font-medium text-sm">A/C Opening Charge<br/> ₹0</p>
              <p className="text-gray-600 font-medium text-sm">Maintenance Charge<br/> ₹300</p>
              <p className="text-gray-600 font-medium text-sm">Delivery Brokerage<br/> <span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
              <p className="text-gray-600 font-medium text-sm">Intraday Brokerage<br/><span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-6">
            <img src="https://th.bing.com/th/id/OIP.hv0nVgXTV8yNgktpo_ZuzwAAAA?rs=1&pid=ImgDetMain" alt="Banner" className="w-40 h-40 rounded-md" />
          </div>
        </div>

        <div className="bg-orange-100 p-6 rounded-lg flex justify-between items-center w-[90%] mb-5">
          <div className="flex flex-row justify-between w-[70%]">
            {/* Left Section */}
            <div>
              <h1 className="text-2xl font-semibold">Axis Direct</h1>
              <img src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"/>

              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
                  <p className="text-sm">Reviews</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
                  <p className="text-sm">Accounts</p>
                </div>
              </div>

              <p className="mt-4 text-blue-600 font-medium mb-3">
                Open Demat A/C for FREE
              </p>

              <div className="flex gap-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2">Open A/C<IoIosSend className="text-lg" /></button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* Middle Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Equity Holdings</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Stock Market Updates</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Investment Strategies</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Trading Insights</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Financial Reports</span>
              </div>
            </div>
            {/* Right Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-5">
              <p className="text-gray-600 font-medium text-sm">A/C Opening Charge<br/> ₹0</p>
              <p className="text-gray-600 font-medium text-sm">Maintenance Charge<br/> ₹300</p>
              <p className="text-gray-600 font-medium text-sm">Delivery Brokerage<br/> <span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
              <p className="text-gray-600 font-medium text-sm">Intraday Brokerage<br/><span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-6">
            <img src="https://assets.smallcase.com/images/publishers/axis/publisher-intro.png" alt="Banner" className="w-40 h-40 rounded-md shadow-md" />
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg flex justify-between items-center w-[90%] mb-5">
          <div className="flex flex-row justify-between w-[70%]">
            {/* Left Section */}
            <div className="">
              <h1 className="text-2xl font-semibold">Fyers</h1>
              <img src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"/>

              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
                  <p className="text-sm">Reviews</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
                  <p className="text-sm">Accounts</p>
                </div>
              </div>

              <p className="mt-4 text-blue-600 font-medium mb-3">
                Open Demat A/C for FREE
              </p>

              <div className="flex gap-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2">Open A/C<IoIosSend className="text-lg" /></button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* Middle Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Equity Holdings</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Stock Market Updates</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Investment Strategies</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Trading Insights</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Financial Reports</span>
              </div>
            </div>
            {/* Right Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-5">
              <p className="text-gray-600 font-medium text-sm">A/C Opening Charge<br/> ₹0</p>
              <p className="text-gray-600 font-medium text-sm">Maintenance Charge<br/> ₹300</p>
              <p className="text-gray-600 font-medium text-sm">Delivery Brokerage<br/> <span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
              <p className="text-gray-600 font-medium text-sm">Intraday Brokerage<br/><span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-6">
            <img src="https://framerusercontent.com/images/5lJEMCtEimQzIa2N4DGd8iDGFOo.png" alt="Banner" className="w-40 h-40 rounded-md" />
          </div>
        </div>

        <div className="bg-orange-100 p-6 rounded-lg flex justify-between items-center w-[90%] mb-5">
          <div className="flex flex-row justify-between w-[70%]">
            {/* Left Section */}
            <div className="">
              <h1 className="text-2xl font-semibold">Motilal Oswal</h1>
              <img src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"/>

              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
                  <p className="text-sm">Reviews</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
                  <p className="text-sm">Accounts</p>
                </div>
              </div>

              <p className="mt-4 text-blue-600 font-medium mb-3">
                Open Demat A/C for FREE
              </p>

              <div className="flex gap-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2">Open A/C<IoIosSend className="text-lg" /></button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* Middle Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Equity Holdings</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Stock Market Updates</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Investment Strategies</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Trading Insights</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Financial Reports</span>
              </div>
            </div>
            {/* Right Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-5">
              <p className="text-gray-600 font-medium text-sm">A/C Opening Charge<br/> ₹0</p>
              <p className="text-gray-600 font-medium text-sm">Maintenance Charge<br/> ₹300</p>
              <p className="text-gray-600 font-medium text-sm">Delivery Brokerage<br/> <span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
              <p className="text-gray-600 font-medium text-sm">Intraday Brokerage<br/><span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-6">
            <img src="https://invest.motilaloswal.com/images/motilal-logo.jpeg" alt="Banner" className="w-40 h-40 rounded-md" />
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg flex justify-between items-center w-[90%] mb-5">
          <div className="flex flex-row justify-between w-[70%]">
            {/* Left Section */}
            <div>
              <h1 className="text-2xl font-semibold">Kotak Securities</h1>
              <img src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"/>

              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
                  <p className="text-sm">Reviews</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
                  <p className="text-sm">Accounts</p>
                </div>
              </div>

              <p className="mt-4 text-blue-600 font-medium mb-3">
                Open Demat A/C for FREE
              </p>

              <div className="flex gap-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2">Open A/C<IoIosSend className="text-lg" /></button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* Middle Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Equity Holdings</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Stock Market Updates</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Investment Strategies</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Trading Insights</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Financial Reports</span>
              </div>
            </div>
            {/* Right Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-5">
              <p className="text-gray-600 font-medium text-sm">A/C Opening Charge<br/> ₹0</p>
              <p className="text-gray-600 font-medium text-sm">Maintenance Charge<br/> ₹300</p>
              <p className="text-gray-600 font-medium text-sm">Delivery Brokerage<br/> <span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
              <p className="text-gray-600 font-medium text-sm">Intraday Brokerage<br/><span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-6">
            <img src="https://www.smarther.co/wp-content/uploads/2023/11/Kotak-Securities-Trading-App.webp" alt="Banner" className="w-40 h-40 rounded-md" />
          </div>
        </div>

        <div className="bg-orange-100 p-6 rounded-lg flex justify-between items-center w-[90%] mb-5">
          <div className="flex flex-row justify-between w-[70%]">
            {/* Left Section */}
            <div>
              <h1 className="text-2xl font-semibold">Paytm Money</h1>
              <img src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"/>

              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
                  <p className="text-sm">Reviews</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
                  <p className="text-sm">Accounts</p>
                </div>
              </div>

              <p className="mt-4 text-blue-600 font-medium mb-3">
                Open Demat A/C for FREE
              </p>

              <div className="flex gap-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2">Open A/C<IoIosSend className="text-lg" /></button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* Middle Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Equity Holdings</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Stock Market Updates</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Investment Strategies</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Trading Insights</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-md flex items-center justify-center w-5 h-5">
                  <IoCheckmarkSharp className="text-white" />
                </div>
                <span className="text-gray-600 font-medium">Financial Reports</span>
              </div>
            </div>
            {/* Right Section - Different Values */}
            <div className="flex flex-col w-1/4 space-y-5">
              <p className="text-gray-600 font-medium text-sm">A/C Opening Charge<br/> ₹0</p>
              <p className="text-gray-600 font-medium text-sm">Maintenance Charge<br/> ₹300</p>
              <p className="text-gray-600 font-medium text-sm">Delivery Brokerage<br/> <span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
              <p className="text-gray-600 font-medium text-sm">Intraday Brokerage<br/><span className="flex items-center gap-5">₹20<FaExclamationCircle className="text-black text-lg" /></span></p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-6">
            <img src="https://th.bing.com/th/id/OIP.l1yKIUxl9S_Ej8wtkEWP5wAAAA?rs=1&pid=ImgDetMain" alt="Banner" className="w-40 h-40 rounded-md" />
          </div>
        </div>
        
      </div>

      <div>
        <div className="bg-blue-200 p-4 rounded-md mx-auto max-w-md md:block sm:block lg:hidden mb-4">
          {/* Logo Section */}
          <div className="flex items-center gap-5">
            <img src="https://www.livelaw.in/h-upload/2024/12/28/578660-images.jpg" alt="Company Logo" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Upstox</h1>
              <img
                src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"
                alt="Verified"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex justify-around mt-4 text-center">
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
              <p className="text-sm text-gray-600">Reviews</p>
            </div>
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
              <p className="text-sm text-gray-600">Accounts</p>
            </div>
          </div>

          {/* Services Offered */}
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Equity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Commodity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Currency</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Futures</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Options</span>
            </div>
          </div>

          {/* CTA Section */}
          <p className="text-center font-semibold text-green-700 mt-3">
            Open Demat A/c for FREE
          </p>
          <div className="flex flex-col gap-4 p-5">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md flex justify-center items-center gap-2">
              Open A/C <IoIosSend />
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Learn More
            </button>
          </div>

          {/* Charges Breakdown */}
          <div className="mt-4 grid grid-cols-2 gap-4 pt-5 text-sm">
            <p>A/C Opening Charge<br/>₹0</p>
            <p>Maintenance Charge<br/><span className="flex items-center gap-2">₹300<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Delivery Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Intraday Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
          </div>
        </div>

        <div className="bg-orange-200 p-4 rounded-md mx-auto max-w-md md:block sm:block lg:hidden mb-4">
          {/* Logo Section */}
          <div className="flex items-center gap-5">
            <img src="https://community.angelone.in/uploads/default/original/2X/d/d6fc9d50d67b5903af9082ba34e9a73626e3a6ce.png" alt="Company Logo" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">AngleOne</h1>
              <img
                src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"
                alt="Verified"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex justify-around mt-4 text-center">
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
              <p className="text-sm text-gray-600">Reviews</p>
            </div>
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
              <p className="text-sm text-gray-600">Accounts</p>
            </div>
          </div>

          {/* Services Offered */}
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Equity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Commodity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Currency</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Futures</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Options</span>
            </div>
          </div>

          {/* CTA Section */}
          <p className="text-center font-semibold text-green-700 mt-3">
            Open Demat A/c for FREE
          </p>
          <div className="flex flex-col gap-4 p-5">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md flex justify-center items-center gap-2">
              Open A/C <IoIosSend />
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Learn More
            </button>
          </div>

          {/* Charges Breakdown */}
          <div className="mt-4 grid grid-cols-2 gap-4 pt-5 text-sm">
            <p>A/C Opening Charge<br/>₹0</p>
            <p>Maintenance Charge<br/><span className="flex items-center gap-2">₹300<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Delivery Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Intraday Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
          </div>
        </div>

        <div className="bg-blue-200 p-4 rounded-md mx-auto max-w-md md:block sm:block lg:hidden mb-4">
          {/* Logo Section */}
          <div className="flex items-center gap-5">
            <img src="https://images.sftcdn.net/images/t_app-icon-m/p/ebdb771b-7e6c-472b-bb17-205d32ad0f66/4029926395/groww-mutual-funds-app-logo" alt="Company Logo" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Groww</h1>
              <img
                src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"
                alt="Verified"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex justify-around mt-4 text-center">
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
              <p className="text-sm text-gray-600">Reviews</p>
            </div>
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
              <p className="text-sm text-gray-600">Accounts</p>
            </div>
          </div>

          {/* Services Offered */}
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Equity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Commodity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Currency</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Futures</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Options</span>
            </div>
          </div>

          {/* CTA Section */}
          <p className="text-center font-semibold text-green-700 mt-3">
            Open Demat A/c for FREE
          </p>
          <div className="flex flex-col gap-4 p-5">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md flex justify-center items-center gap-2">
              Open A/C <IoIosSend />
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Learn More
            </button>
          </div>

          {/* Charges Breakdown */}
          <div className="mt-4 grid grid-cols-2 gap-4 pt-5 text-sm">
            <p>A/C Opening Charge<br/>₹0</p>
            <p>Maintenance Charge<br/><span className="flex items-center gap-2">₹300<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Delivery Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Intraday Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
          </div>
        </div>

        <div className="bg-orange-200 p-4 rounded-md mx-auto max-w-md md:block sm:block lg:hidden mb-4">
          {/* Logo Section */}
          <div className="flex items-center gap-5">
            <img src="https://cdn-1.webcatalog.io/catalog/dhan/dhan-icon-filled-128.png?v=1732985175002" alt="Company Logo" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Dhan</h1>
              <img
                src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"
                alt="Verified"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex justify-around mt-4 text-center">
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
              <p className="text-sm text-gray-600">Reviews</p>
            </div>
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
              <p className="text-sm text-gray-600">Accounts</p>
            </div>
          </div>

          {/* Services Offered */}
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Equity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Commodity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Currency</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Futures</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Options</span>
            </div>
          </div>

          {/* CTA Section */}
          <p className="text-center font-semibold text-green-700 mt-3">
            Open Demat A/c for FREE
          </p>
          <div className="flex flex-col gap-4 p-5">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md flex justify-center items-center gap-2">
              Open A/C <IoIosSend />
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Learn More
            </button>
          </div>

          {/* Charges Breakdown */}
          <div className="mt-4 grid grid-cols-2 gap-4 pt-5 text-sm">
            <p>A/C Opening Charge<br/>₹0</p>
            <p>Maintenance Charge<br/><span className="flex items-center gap-2">₹300<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Delivery Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Intraday Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
          </div>
        </div>

        <div className="bg-blue-200 p-4 rounded-md mx-auto max-w-md md:block sm:block lg:hidden mb-4">
          {/* Logo Section */}
          <div className="flex items-center gap-5">
            <img src="https://th.bing.com/th/id/OIP.hv0nVgXTV8yNgktpo_ZuzwAAAA?rs=1&pid=ImgDetMain" alt="Company Logo" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Alice Blue</h1>
              <img
                src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"
                alt="Verified"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex justify-around mt-4 text-center">
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
              <p className="text-sm text-gray-600">Reviews</p>
            </div>
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
              <p className="text-sm text-gray-600">Accounts</p>
            </div>
          </div>

          {/* Services Offered */}
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Equity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Commodity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Currency</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Futures</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Options</span>
            </div>
          </div>

          {/* CTA Section */}
          <p className="text-center font-semibold text-green-700 mt-3">
            Open Demat A/c for FREE
          </p>
          <div className="flex flex-col gap-4 p-5">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md flex justify-center items-center gap-2">
              Open A/C <IoIosSend />
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Learn More
            </button>
          </div>

          {/* Charges Breakdown */}
          <div className="mt-4 grid grid-cols-2 gap-4 pt-5 text-sm">
            <p>A/C Opening Charge<br/>₹0</p>
            <p>Maintenance Charge<br/><span className="flex items-center gap-2">₹300<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Delivery Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Intraday Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
          </div>
        </div>

        <div className="bg-orange-200 p-4 rounded-md mx-auto max-w-md md:block sm:block lg:hidden mb-4">
          {/* Logo Section */}
          <div className="flex items-center gap-5">
            <img src="https://assets.smallcase.com/images/publishers/axis/publisher-intro.png" alt="Company Logo" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Axis Direct</h1>
              <img
                src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"
                alt="Verified"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex justify-around mt-4 text-center">
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
              <p className="text-sm text-gray-600">Reviews</p>
            </div>
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
              <p className="text-sm text-gray-600">Accounts</p>
            </div>
          </div>

          {/* Services Offered */}
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Equity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Commodity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Currency</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Futures</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Options</span>
            </div>
          </div>

          {/* CTA Section */}
          <p className="text-center font-semibold text-green-700 mt-3">
            Open Demat A/c for FREE
          </p>
          <div className="flex flex-col gap-4 p-5">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md flex justify-center items-center gap-2">
              Open A/C <IoIosSend />
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Learn More
            </button>
          </div>

          {/* Charges Breakdown */}
          <div className="mt-4 grid grid-cols-2 gap-4 pt-5 text-sm">
            <p>A/C Opening Charge<br/>₹0</p>
            <p>Maintenance Charge<br/><span className="flex items-center gap-2">₹300<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Delivery Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Intraday Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
          </div>
        </div>

        <div className="bg-blue-200 p-4 rounded-md mx-auto max-w-md md:block sm:block lg:hidden mb-4">
          {/* Logo Section */}
          <div className="flex items-center gap-5">
            <img src="https://framerusercontent.com/images/5lJEMCtEimQzIa2N4DGd8iDGFOo.png" alt="Company Logo" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Fyers</h1>
              <img
                src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"
                alt="Verified"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex justify-around mt-4 text-center">
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
              <p className="text-sm text-gray-600">Reviews</p>
            </div>
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
              <p className="text-sm text-gray-600">Accounts</p>
            </div>
          </div>

          {/* Services Offered */}
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Equity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Commodity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Currency</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Futures</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Options</span>
            </div>
          </div>

          {/* CTA Section */}
          <p className="text-center font-semibold text-green-700 mt-3">
            Open Demat A/c for FREE
          </p>
          <div className="flex flex-col gap-4 p-5">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md flex justify-center items-center gap-2">
              Open A/C <IoIosSend />
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Learn More
            </button>
          </div>

          {/* Charges Breakdown */}
          <div className="mt-4 grid grid-cols-2 gap-4 pt-5 text-sm">
            <p>A/C Opening Charge<br/>₹0</p>
            <p>Maintenance Charge<br/><span className="flex items-center gap-2">₹300<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Delivery Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Intraday Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
          </div>
        </div>

        <div className="bg-orange-200 p-4 rounded-md mx-auto max-w-md md:block sm:block lg:hidden mb-4">
          {/* Logo Section */}
          <div className="flex items-center gap-5">
            <img src="https://invest.motilaloswal.com/images/motilal-logo.jpeg" alt="Company Logo" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Motilal Oswal</h1>
              <img
                src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"
                alt="Verified"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex justify-around mt-4 text-center">
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
              <p className="text-sm text-gray-600">Reviews</p>
            </div>
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
              <p className="text-sm text-gray-600">Accounts</p>
            </div>
          </div>

          {/* Services Offered */}
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Equity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Commodity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Currency</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Futures</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Options</span>
            </div>
          </div>

          {/* CTA Section */}
          <p className="text-center font-semibold text-green-700 mt-3">
            Open Demat A/c for FREE
          </p>
          <div className="flex flex-col gap-4 p-5">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md flex justify-center items-center gap-2">
              Open A/C <IoIosSend />
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Learn More
            </button>
          </div>

          {/* Charges Breakdown */}
          <div className="mt-4 grid grid-cols-2 gap-4 pt-5 text-sm">
            <p>A/C Opening Charge<br/>₹0</p>
            <p>Maintenance Charge<br/><span className="flex items-center gap-2">₹300<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Delivery Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Intraday Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
          </div>
        </div>

        <div className="bg-blue-200 p-4 rounded-md mx-auto max-w-md md:block sm:block lg:hidden mb-4">
          {/* Logo Section */}
          <div className="flex items-center gap-5">
            <img src="https://www.smarther.co/wp-content/uploads/2023/11/Kotak-Securities-Trading-App.webp" alt="Company Logo" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Kotak Securities</h1>
              <img
                src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"
                alt="Verified"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex justify-around mt-4 text-center">
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
              <p className="text-sm text-gray-600">Reviews</p>
            </div>
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
              <p className="text-sm text-gray-600">Accounts</p>
            </div>
          </div>

          {/* Services Offered */}
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Equity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Commodity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Currency</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Futures</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Options</span>
            </div>
          </div>

          {/* CTA Section */}
          <p className="text-center font-semibold text-green-700 mt-3">
            Open Demat A/c for FREE
          </p>
          <div className="flex flex-col gap-4 p-5">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md flex justify-center items-center gap-2">
              Open A/C <IoIosSend />
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Learn More
            </button>
          </div>

          {/* Charges Breakdown */}
          <div className="mt-4 grid grid-cols-2 gap-4 pt-5 text-sm">
            <p>A/C Opening Charge<br/>₹0</p>
            <p>Maintenance Charge<br/><span className="flex items-center gap-2">₹300<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Delivery Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Intraday Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
          </div>
        </div>

        <div className="bg-orange-200 p-4 rounded-md mx-auto max-w-md md:block sm:block lg:hidden mb-4">
          {/* Logo Section */}
          <div className="flex items-center gap-5">
            <img src="https://th.bing.com/th/id/OIP.l1yKIUxl9S_Ej8wtkEWP5wAAAA?rs=1&pid=ImgDetMain" alt="Company Logo" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Paytm Money</h1>
              <img
                src="https://ik.imagekit.io/ipo22webapp/4-9-removebg-preview.png?updatedAt=1749361813058"
                alt="Verified"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex justify-around mt-4 text-center">
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><AiFillMessage />15k</span></p>
              <p className="text-sm text-gray-600">Reviews</p>
            </div>
            <div>
              <p className="text-lg font-semibold"><span className="flex items-center gap-1"><RxAvatar/>50.2k</span></p>
              <p className="text-sm text-gray-600">Accounts</p>
            </div>
          </div>

          {/* Services Offered */}
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Equity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Commodity</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Currency</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Futures</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <div className="bg-green-500 flex items-center justify-center w-3 h-3">
                <IoCheckmarkSharp className="text-white" />
              </div>
              <span className="text-gray-600 text-[15px]">Options</span>
            </div>
          </div>

          {/* CTA Section */}
          <p className="text-center font-semibold text-green-700 mt-3">
            Open Demat A/c for FREE
          </p>
          <div className="flex flex-col gap-4 p-5">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md flex justify-center items-center gap-2">
              Open A/C <IoIosSend />
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Learn More
            </button>
          </div>

          {/* Charges Breakdown */}
          <div className="mt-4 grid grid-cols-2 gap-4 pt-5 text-sm">
            <p>A/C Opening Charge<br/>₹0</p>
            <p>Maintenance Charge<br/><span className="flex items-center gap-2">₹300<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Delivery Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
            <p>Intraday Brokerage<br/><span className="flex items-center gap-2">₹20<FaExclamationCircle className="text-black text-md" /></span></p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Brokers;
