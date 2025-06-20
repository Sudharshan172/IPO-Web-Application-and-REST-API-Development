import { MdArrowForward } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled, TbCircleNumber5Filled, TbCircleNumber6Filled } from "react-icons/tb";
import { RxDoubleArrowLeft, RxDoubleArrowRight} from "react-icons/rx";
import { FaQuoteRight } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const handleStorageChange = () => {
      const currentRole = localStorage.getItem("role");
      if (currentRole === "admin") {
        navigate("/admin/dashboard");
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      
      {/* First Section */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start justify-center md:justify-between gap-10">

        {/* Left Section - Text Content (Centers on Small Screens) */}
        <div className="max-w-screen-xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-blue-500 font-bold flex items-center">
            <span className="bg-yellow-400 px-2 py-1 rounded mr-2">NEW</span> 
            App 2.0 <MdArrowForward className="ml-2" />
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
            Free & Open <br /> Stock Market Analytics <br /> For GenZ
          </h2>
          <p className="mt-4 text-gray-600">
            Thousands of traders and investors in India use our <br />
            stable and reliable mobile app regularly.
          </p>

          {/* Early Access Form */}
          <p className="mt-6 font-semibold">Get Early Access</p>
          <label className="flex items-center border border-gray-300 rounded mt-2 p-2 w-full max-w-md">
            <span className="mr-2 text-gray-500">+91</span>
            <input 
              type="text" 
              placeholder="Enter mobile number" 
              className="flex-grow outline-none" 
              aria-label="Enter mobile number"
            />
            <button className="bg-blue-500 text-white p-2 rounded">
              <BiLogoTelegram className="text-l" />
            </button>
          </label>
        </div>

        {/* Right Section - Image (Centers on Small Screens, Side-by-Side on Large Screens) */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src="https://ik.imagekit.io/ipo22webapp/stock-analytics.png?updatedAt=1748066188360" alt="Stock Analytics" className="h-auto w-full max-w-md" />
        </div>

      </div>

      {/* Second Section - Below First */}
      <div className="flex flex-col md:flex-row items-center justify-around border-t border-gray-300 mt-10">
        <div className="text-center md:text-left mt-3">
          <p>Built for a growing India.</p>
          <h2 className="text-3xl font-bold mt-4">It's easy</h2>
          <h3 className="text-2xl font-semibold text-blue-500 mt-2">It's powerful</h3>
          <h3 className="text-2xl font-semibold text-yellow-500 mt-2">It's beautiful</h3>
        </div>
        
        <div className="flex flex-col items-center mt-3">
            <FaThumbsUp className="text-blue-500 text-3xl mb-3" />
            <p className="text-gray-600 text-center">
                <strong>Beautiful UI</strong> for the modern traders, <br />
                with access on all platforms, <br />
                to trade <strong>on the go.</strong>
            </p>
        </div>
      </div>

      {/* Third Section - Below First */}
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center mt-5">
        {/* Section Title - Centered */}
        <div className="max-w-xl">
          <p className="text-lg font-semibold text-blue-600">Power-packed with everything you need.</p>
          <h2 className="text-3xl font-bold mt-2">Bluestock Highlights</h2>
          <p className="mt-4 text-gray-600">
            Simplified enough for beginners, Detailed enough for experts.<br />
            Track upcoming IPOs, leverage advanced tools to<br />
            make the best decisions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15 mt-10 w-full max-w-5xl">
          {/* Learn Chart Section */}
          <div className="bg-gray-100 p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">Learn Chart</h4>
            <hr className="border-gray-400 mb-3" />
            
            {/* Fixed Number Alignment */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <TbCircleNumber1Filled className="text-green-600 text-2xl mr-3" />
                <p>Technical, Fundamental</p>
              </div>
              <div className="flex items-center">
                <TbCircleNumber2Filled className="text-green-600 text-2xl mr-3" />
                <p>Finology, Facts, Equity</p>
              </div>
              <div className="flex items-center">
                <TbCircleNumber3Filled className="text-green-600 text-2xl mr-3" />
                <p>Trading Psychology</p>
              </div>
              <div className="flex items-center">
                <TbCircleNumber4Filled className="text-green-600 text-2xl mr-3" />
                <p>Risk Assessment</p>
              </div>
              <div className="flex items-center">
                <TbCircleNumber5Filled className="text-green-600 text-2xl mr-3" />
                <p>Option Trading</p>
              </div>
            </div>
          </div>

          {/* Analytics Section */}
          <div className="bg-pink-100 p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">Analytics</h4>
            <hr className="border-gray-400 mb-3" />
            
            {/* Fixed Number Alignment */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <TbCircleNumber1Filled className="text-green-600 text-2xl mr-3" />
                <p>Live Sector Trend</p>
              </div>
              <div className="flex items-center">
                <TbCircleNumber2Filled className="text-green-600 text-2xl mr-3" />
                <p>IPO DRHP</p>
              </div>
              <div className="flex items-center">
                <TbCircleNumber3Filled className="text-green-600 text-2xl mr-3" />
                <p>Sectoral Distribution</p>
              </div>
              <div className="flex items-center">
                <TbCircleNumber4Filled className="text-green-600 text-2xl mr-3" />
                <p>Stock Overview</p>
              </div>
              <div className="flex items-center">
                <TbCircleNumber5Filled className="text-green-600 text-2xl mr-3" />
                <p>TradingView Chart</p>
              </div>
              <div className="flex items-center">
                <TbCircleNumber6Filled className="text-green-600 text-2xl mr-3" />
                <p>Technical, Fundamental</p>
              </div>
            </div>
          </div>

          {/* Club Section */}
          <div className="bg-orange-100 p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">Club</h4>
            <hr className="border-gray-400 mb-3" />
            
            {/* Fixed Number Alignment */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <TbCircleNumber1Filled className="text-green-600 text-2xl mr-3" />
                <p>Educational Resources</p>
              </div>
              <div className="flex items-center">
                <TbCircleNumber2Filled className="text-green-600 text-2xl mr-3" />
                <p>Real-time Chat</p>
              </div>
              <div className="flex items-center">
                <TbCircleNumber3Filled className="text-green-600 text-2xl mr-3" />
                <p>Forums</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fourth Section - Below First */}
      <div className="max-w-screen-xl mx-auto flex flex-col items-start md:flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 max-w-screen-xl mx-auto">
          {/* Left Content Section */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold">Why do traders love Bluestock?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Bluestock caters to traders looking to enhance <br />
              their technical analysis skills, providing a user-friendly <br />
              environment to interpret and leverage charts effectively <br />
              for strategic decision-making in the financial markets.
            </p>
          </div>

          {/* Right Side - Circular Sharp Trader Box */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-blue-500 text-white text-center rounded-full w-48 h-48 flex items-center justify-center shadow-lg">
              <p className="text-lg font-bold">Sharp Trader</p>
            </div>
          </div>
        </div>

        {/* Learning Resources Section */}
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Section - Image Grid (50% width) */}
          <div className="w-full flex flex-wrap gap-6 justify-start">
            {/* Analytics Image + Name */}
            <div>
              <div className="flex flex-col items-center bg-orange-100 p-4 rounded-lg shadow-md">
                <img src="https://ik.imagekit.io/ipo22webapp/equity.png?updatedAt=1748066661409" alt="Equity Insights" className="h-24 w-24" />
              </div>
              <p className="mt-2 font-semibold text-center">Analytics</p>
            </div>
        
            {/* Blogs Image + Name */}
            <div>
              <div className="flex flex-col items-center bg-blue-100 p-4 rounded-lg shadow-md">
                <img src="https://ik.imagekit.io/ipo22webapp/candles-blogs.png?updatedAt=1748066662926" alt="Candlestick Blogs" className="h-24 w-24" />
              </div>
              <p className="mt-2 font-semibold text-center">Blogs</p>
            </div>
        
            {/* Videos Image + Name */}
            <div>
              <div className="flex flex-col items-center bg-red-100 p-4 rounded-lg shadow-md">
                <img src="https://ik.imagekit.io/ipo22webapp/play-btn.png?updatedAt=1748066660332" alt="Video Resources" className="h-24 w-24" />
              </div>
              <p className="mt-2 font-semibold text-center">Videos</p>
            </div>
          </div>
        
          {/* Right Section - Text Content (50% width) */}
          <div className="w-full text-center md:text-left">
            <p className="text-lg font-semibold text-blue-600">Resources</p>
            <h3 className="text-2xl font-bold mt-2">All things finance, right here</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Master the art of investing and secure your financial future <br />
              with Bluestock learning resources.
            </p>
          </div>
        </div>

      </div>

      {/* Fifth Section - Below First */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Section - Text + QR Code */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold">On The Go</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe that everyone should be able to wield technology <br />
              while learning trading. Use Bluestock on the go, on your mobile <br />
              device. Experience the ultimate trading experience on Android or iOS.
            </p>
          </div>

          {/* QR Code Section */}
          <div className="mt-12 flex flex-row items-center gap-6">
            {/* QR Code Image */}
            <img src="https://ik.imagekit.io/ipo22webapp/app-qr.png?updatedAt=1748066885554" alt="QR Code" className="h-40 w-40 rounded" />

            {/* Text Content - Positioned Next to Image */}
            <div className="flex flex-col">
              <p className="font-semibold">Scan and download</p>
              <p className="text-gray-600 leading-relaxed">
                Use your Android device <br />
                to download the app.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Mobile App Image */}
        <div className="w-full md:w-1/2 flex justify-end">
          <img src="https://ik.imagekit.io/ipo22webapp/mobileapp-logo.png?updatedAt=1748066886100" alt="Mobile App Preview" className="h-auto w-full max-w-md bg-transparent" />
        </div>
      </div>
      
      {/* sixth Section - Below First */}
      <div className="max-w-screen-xl mx-auto flex flex-col items-center mb-10">

        {/* Bluestock App Promo Banner */}
        <div className="w-full bg-blue-300 text-white text-center py-8 rounded-t-lg flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-6">
          <h3 className="text-xl md:text-xl font-bold">Bluestock App 2.0 is Live Now!</h3>
          <p className="mt-2 text-lg">Download Our App</p>

          {/* Right Section - Store Logos */}
          <div className="flex gap-4 md:gap-6 items-center">
            {/* Google Play Store */}
            <a href="https://play.google.com/store/apps/details?id=in.bluestock.app" target="_blank" rel="noopener noreferrer">
              <img src="https://ik.imagekit.io/ipo22webapp/playstore-logo.png?updatedAt=1748067039337" alt="Playstore Logo" className="h-8 md:h-10 w-auto" />
            </a>

            {/* Apple App Store */}
            <a href="https://apps.apple.com/us/app/example-app/id1234567890" target="_blank" rel="noopener noreferrer">
              <img src="https://ik.imagekit.io/ipo22webapp/applestore-logo.png?updatedAt=1748067039334" alt="Appstore Logo" className="h-8 md:h-10 w-auto" />
            </a>
          </div>
        </div>

      </div>

      {/* seventh Section - Below First */}
      <div className="max-w-screen-xl mx-auto mb-10">
      
        {/* Section Title + Arrows */}
        <div className="w-full flex justify-between items-center">
          <h3 className="text-2xl font-bold">What do our users say?</h3>
          <div className="flex gap-4">
            <button 
              onClick={() => swiperRef.current.slidePrev()} 
              className="text-3xl cursor-pointer hover:text-blue-500"
            >
              <RxDoubleArrowLeft />
            </button>
            <button 
              onClick={() => swiperRef.current.slideNext()} 
              className="text-3xl cursor-pointer hover:text-blue-500"
            >
              <RxDoubleArrowRight />
            </button>
          </div>
        </div>

        {/* Swiper Carousel for Reviews */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1} // Default: 1 per slide
          breakpoints={{
            640: { slidesPerView: 1 }, // Small screens: 1-by-1
            768: { slidesPerView: 2 }, // Medium screens: 2-by-2
            1024: { slidesPerView: 3 }, // Large screens: 3-by-3
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Save swiper instance
          className="mt-6">

          {/* Review 1 */}
          <SwiperSlide>
            <div className="w-full max-w-sm min-h-[250px] p-4 bg-gray-100 rounded-lg shadow-md text-left relative">
              <div className="absolute top-4 right-4 text-blue-500 text-xl">
                <FaQuoteRight />
              </div>
              <h4 className="text-lg font-semibold mt-5">Venkatesh</h4>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Excellent app with a fantastic UI. Even though the app is still in progressive mode, I must say it is getting better every day. It has an amazing user interface.
              </p>
            </div>
          </SwiperSlide>

          {/* Review 2 */}
          <SwiperSlide>
            <div className="w-full max-w-sm min-h-[250px] p-4 bg-gray-100 rounded-lg shadow-md text-left relative">
              <div className="absolute top-4 right-4 text-blue-500 text-xl">
                <FaQuoteRight />
              </div>
              <h4 className="text-lg font-semibold mt-5">Sarthak</h4>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Bluestock app provides a user-friendly interface. The clean design and intuitive navigation enhance the overall experience.
              </p>
            </div>
          </SwiperSlide>

          {/* Review 3 */}
          <SwiperSlide>
            <div className="w-full max-w-sm min-h-[250px] p-4 bg-gray-100 rounded-lg shadow-md text-left relative">
              <div className="absolute top-4 right-4 text-blue-500 text-xl">
                <FaQuoteRight />
              </div>
              <h4 className="text-lg font-semibold mt-5">Sakshi</h4>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Bluestock for chart learning & technical and it has exceeded my expectations. The UI is well-designed, making it a breeze to navigate and learn charts.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Eight Section - Below First */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10">

        {/* Left Section - Title & Broker Selection */}
        <div className="md:w-1/2 flex flex-col text-center md:text-left items-start">
          
          {/* Heading */}
          <h4 className="text-lg font-semibold text-gray-700">Compare and choose</h4>
          <h2 className="text-2xl font-bold">Best Stock Broker for you</h2>

          {/* Broker Selection Boxes */}
          <div className="mt-6 flex flex-col md:flex-row gap-6 w-full">
            <div className="flex flex-row items-center bg-blue-200 text-white p-4 rounded-lg w-full md:w-1/2">
              <img src="https://ik.imagekit.io/ipo22webapp/angelone-logo.png?updatedAt=1748067039309" alt="Angel One Logo" className="h-14 w-auto" />
              <p className="ml-4 font-semibold">Angel One</p>
              <MdArrowDropDown className="ml-auto text-3xl" />
            </div>

            <div className="flex flex-row items-center bg-blue-200 text-white p-4 rounded-lg w-full md:w-1/2">
              <img src="https://ik.imagekit.io/ipo22webapp/zerodha-logo.png?updatedAt=1748067039721" alt="Zerodha Logo" className="h-14 w-auto" />
              <p className="ml-4 font-semibold">Zerodha</p>
              <MdArrowDropDown className="ml-auto text-3xl" />
            </div>
          </div>

          {/* Centered Compare Button Below Broker Boxes */}
          <div className="w-full flex justify-center mt-6">
            <button className="bg-blue-500 text-white text-center py-3 px-6 rounded-lg cursor-pointer">
              Compare
            </button>
          </div>

        </div>

        {/* Right Section - IPO Image (Wrap Below on Small Screens) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <img src="https://ik.imagekit.io/ipo22webapp/ipo.png?updatedAt=1748066886021" alt="IPO Illustration" className="h-auto w-full max-w-md" />
        </div>

      </div>

    </div>
  );
};

export default Home;
