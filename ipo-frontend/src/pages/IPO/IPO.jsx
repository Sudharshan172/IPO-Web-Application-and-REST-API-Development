import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../../styles/global.css";


const IPO = () => {
  const [visibleCards, setVisibleCards] = useState(1);
  const [currentIndexUpcoming, setCurrentIndexUpcoming] = useState(0);
  const [currentIndexListed, setCurrentIndexListed] = useState(0);

  const ipoUpcoming = [
    { name: "Nova Agritech Ltd.", logo:"https://novaagri.in/wp-content/uploads/2023/02/NovaAgriGroup.png", priceBand: "Rs 39 - 41", open: "2024-01-22", close: "2024-01-24", issueSize: "143.81 Cr.", issueType: "Book Built", listingDate: "2024-01-30" },
    { name: "EPACK Durable Ltd.", logo:"https://epackdurable.com/wp-content/uploads/2023/10/EPACK-CIN_white-logo-copy.png", priceBand: "Rs 218 - 230", open: "2024-01-19", close: "2024-01-23", issueSize: "640.05 Cr.", issueType: "Book Built", listingDate: "2024-01-29" },
    { name: "RK Swamy Ltd.", logo:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhh2fJ06m8LJGwRqlmjLkL0-wDPw8RLaENhzAHdNshP79ky0FuyGxzWywob-z2aNsTULFWYmTmy8HFOtvnP9FnNyRxpTXFwe8h-7aaeOGswuz0zNLhzwvLl9IuOhoJrJz4PArJmVc37f7RnTdpsYaY98gc-aAtDoEhaWd-nS3MTE75uc0lm22K9MDCqwKE/s1475/R%20K%20Swamy%20Limited.png", priceBand: "Not issued", open: "Not issued", close: "Not issued", issueSize: "Not issued", issueType: "Book Built", listingDate: "Not issued" },
    { name: "Oravel Stays Ltd.", logo:"https://static.vecteezy.com/system/resources/previews/022/100/821/non_2x/oyo-logo-transparent-free-png.png", priceBand: "Not issued", open: "Not issued", close: "Not issued", issueSize: "8430 Cr.", issueType: "Book Built", listingDate: "Not issued" },
    { name: "Imagine marketing Ltd.", logo:"https://v.hdfcbank.com/content/dam/hdfc-aem-microsites/debit-card-offers/logo/Boat.jpg", priceBand: "Not issued", open: "Not issued", close: "Not issued", issueSize: "2000 Cr.", issueType: "Book Built", listingDate: "Not issued" },
    { name: "Kids Clinic India Ltd.", logo:"https://doctor.myupchar.com/hospitals/chains/10/cloudnine_hospital.png", priceBand: "Not issued", open: "Not issued", close: "Not issued", issueSize: "2000 Cr.", issueType: "Book Built", listingDate: "Not issued" },
    { name: "OLA Electric Mobility Ltd.", logo:"https://koupon360.com/wp-content/uploads/2022/11/ola-electric-coupon-promo-code.png", priceBand: "Not issued", open: "Not issued", close: "Not issued", issueSize: "Not issued", issueType: "Book Built", listingDate: "Not issued" },
    { name: "One Mobikwik Systems Ltd.", logo:"https://littlesaves.com/wp-content/uploads/2021/02/searchpng.com-mobikwik-logo-icon-png-images-free-download-2048x1552.png", priceBand: "Not issued", open: "Not issued", close: "Not issued", issueSize: "1900 Cr.", issueType: "Book Built", listingDate: "Not issued" },
    { name: "Le Travenues Technology", logo:"https://images.ixigo.com/image/upload/flights/5ec11a1c8448987aab73cf8f1cf397ad-volrt.png", priceBand: "Not issued", open: "Not issued", close: "Not issued", issueSize: "1600 Cr.", issueType: "Book Built", listingDate: "Not issued" },
    { name: "CMR Green Technologies", logo:"https://cmr.co.in/wp-content/uploads/2021/09/CMR-Green-Logo1.png", priceBand: "Not issued", open: "Not issued", close: "Not issued", issueSize: "Not issued", issueType: "Book Built", listingDate: "Not issued" },
    { name: "Wellness Forever", logo:"https://about.me/cdn-cgi/image/q=80,dpr=1,f=auto,fit=cover,w=1200,h=630,gravity=auto/https://assets.about.me/background/users/w/e/l/wellnessforever_1695893379_955.jpg", priceBand: "Not issued", open: "Not issued", close: "Not issued", issueSize: "Not issued", issueType: "Book Built", listingDate: "Not issued" },
    { name: "PKH Ventures Ltd.", logo:"https://www.chittorgarh.net/images/ipo/pkh-ventures-logo.png", priceBand: "Not issued", open: "Not issued", close: "Not issued", issueSize: "Not issued", issueType: "Book Built", listingDate: "Not issued" },
  ];

  const ipoNewlyAdded = [
    { name: "Jyoti CNC Automation Ltd.", logo:"https://industry.plantautomation-technology.com/suppliers/jyoti-cnc-automation-ltd/20221013065723225327806.jpg", ipoPrice: "Rs 331", listingPrice: "Rs 370", listingGain: "11.78%", listingDate: "2024-01-16", cmp: "Rs 455.75", currentReturn: "37.69%" },
    { name: "Innova Captab Ltd.", logo:"https://www.tradeadams.com/static/10cc7691ba3d53d096c28d76941c2b57/d0442/innova-captap-limited.png", ipoPrice: "Rs 448", listingPrice: "Rs 452.1", listingGain: "0.92%", listingDate: "2023-12-29", cmp: "Rs 515", currentReturn: "14.96%" },
    { name: "Azad Engineering Ltd.", logo:"https://www.azad.in/wp-content/uploads/2023/09/AZAD-LOGO-14-Sep-23-Final_page-0001-scaled.jpg", ipoPrice: "Rs 524", listingPrice: "Rs 720", listingGain: "37.4%", listingDate: "2023-12-28", cmp: "Rs 663.25", currentReturn: "26.57%" },
  ];

  // Responsive handling
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const renderIPOCard = (ipo, isUpcoming = true) => (
    <div className="rounded-lg p-6 w-full max-w-screen-lg mx-auto shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        <div
          className="h-10 w-10 sm:h-16 sm:w-16 bg-white rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${ipo.logo})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
        </div>
        <p className="text-sm sm:text-lg font-bold text-black">{ipo.name}</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 mb-4">
        {isUpcoming ? (
          <>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs">PRICE BAND</p>
              <p className="text-[12px] sm:text-base font-bold text-black">{ipo.priceBand}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs">OPEN</p>
              <p className="text-[12px] sm:text-base font-bold text-black">{ipo.open}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs">CLOSE</p>
              <p className="text-[12px] sm:text-base font-bold text-black">{ipo.close}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs">ISSUE SIZE</p>
              <p className="text-[12px] sm:text-base font-bold text-black">{ipo.issueSize}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs">ISSUE TYPE</p>
              <p className="text-[12px] sm:text-base font-bold text-black">{ipo.issueType}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs">LISTING DATE</p>
              <p className="text-[12px] sm:text-base font-bold text-black">{ipo.listingDate}</p>
            </div>
            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="bg-blue-200 text-black font-bold px-4 py-2 rounded-md text-sm">
                RHP
              </button>
              <button className="bg-blue-200 text-black font-bold px-4 py-2 rounded-md text-sm">
                DRHP
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs">IPO PRICE</p>
              <p className="text-[12px] sm:text-base font-bold text-black">{ipo.ipoPrice}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs">LISTING PRICE</p>
              <p className="text-[12px] sm:text-base font-bold text-black">{ipo.listingPrice}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs">GAIN</p>
              <p className="text-[12px] sm:text-base font-bold text-black">{ipo.listingGain}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs">CMP</p>
              <p className="text-[12px] sm:text-base font-bold text-black">{ipo.cmp}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs">RETURN</p>
              <p className="text-[12px] sm:text-base font-bold text-black">{ipo.currentReturn}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs">LISTING DATE</p>
              <p className="text-[12px] sm:text-base font-bold text-black">{ipo.listingDate}</p>
            </div>
            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="bg-blue-200 text-black font-bold px-4 py-2 rounded-md text-sm">
                RHP
              </button>
              <button className="bg-blue-200 text-black font-bold px-4 py-2 rounded-md text-sm">
                DRHP
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      {/* Section Header */}
      <h2 className="text-2xl font-bold text-blue-600 mb-2">IPO</h2>
      <p className="text-gray-700">Following is the list of companies for IPO as of today.</p>

      {/* Upcoming IPOs */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-blue-600">Upcoming IPOs</h3>
          <Link to="/IPO/upcoming">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
              View All
            </button>
          </Link>
        </div>

        <div className="relative">
          <button onClick={() => setCurrentIndexUpcoming(i => Math.max(i - 1, 0))} className="absolute left-0 top-1/2 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition">
            <IoIosArrowBack className="text-2xl" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-12">
            {ipoUpcoming.slice(currentIndexUpcoming, currentIndexUpcoming + visibleCards).map((ipo, index) => renderIPOCard(ipo))}
          </div>

          <button onClick={() => setCurrentIndexUpcoming(i => Math.min(i + 1, ipoUpcoming.length - visibleCards))} className="absolute right-0 top-1/2 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition">
            <IoIosArrowForward className="text-2xl" />
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-6 bg-white-600 rounded-lg shadow-lg text-center mt-8">
        {/* Bluestock Logo & Heading */}
        <div className="flex justify-center">
          <img
            src="https://ik.imagekit.io/ipo22webapp/bluestock-logo.png?updatedAt=1750264429826"
            alt="Bluestock Logo"
            className="h-16 w-16"
          />
          <h2 className="text-3xl font-bold text-blue-600 mt-4">BLUESTOCK</h2>
        </div>

        {/* IPO Application Prompt */}
        <h3 className="text-xl font-bold mt-2">Applying for this IPO?</h3>
        <p className="text-gray-700 mt-4 max-w-lg mx-auto text-left">
          The way you compare & invest in only the best IPO, let us help you get
          started by comparing and selecting the best Demat account. Open your
          Demat account now to apply for your favourite IPO.
        </p>

        {/* Open Account Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl mt-6 hover:bg-blue-700 transition">
          Open a Demat Account
        </button>
      </div>

      <div className="max-w-screen-xl mx-auto p-3 rounded-lg mt-5">
        {/* Section Heading */}
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-blue-600 text-start">Ongoing</h3>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            View All
          </button>
        </div>

        {/* IPO Card */}
        <div className="rounded-lg p-4 w-full max-w-sm mt-6 text-start shadow-md">
          {/* Company Name & Logo */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className="h-16 w-16 bg-white rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url('https://ravihospital.org/wp-content/uploads/2019/10/medi-Assist.jpg')`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
            </div>

            <p className="text-md font-bold text-black">Medi Assist Healthcare Services Ltd.IPO</p>
          </div>

          {/* Price, Open & Close Date */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center rounded-lg">
              <p className="text-[10px] sm:text-xs">PRICE BAND</p>
              <p className="text-[12px] sm:text-base font-bold text-black">Rs 218 - 230</p>
            </div>
            <div className="text-center rounded-lg">
              <p className="text-[10px] sm:text-xs">OPEN</p>
              <p className="text-[12px] sm:text-base font-bold text-black">2024-01-19</p>
            </div>
            <div className="text-center rounded-lg">
              <p className="text-[10px] sm:text-xs">CLOSE</p>
              <p className="text-[12px] sm:text-base font-bold text-black">2024-01-23</p>
            </div>
          </div>

          {/* Issue Size, Type & Listing Date */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center rounded-lg">
              <p className="text-[10px] sm:text-xs">ISSUE SIZE</p>
              <p className="text-[12px] sm:text-base font-bold text-black">640.05 Cr.</p>
            </div>
            <div className="text-center rounded-lg">
              <p className="text-[10px] sm:text-xs">ISSUE TYPE</p>
              <p className="text-[12px] sm:text-base font-bold text-black">Book Built</p>
            </div>
            <div className="text-center rounded-lg">
              <p className="text-[10px] sm:text-xs">LISTING DATE</p>
              <p className="text-[12px] sm:text-base font-bold text-black">2024-01-29</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-200 font-bold px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition">
              RHP
            </button>
            <button className="bg-blue-200 font-bold px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition">
              DRHP
            </button>
          </div>
        </div>
      </div>

      {/* Newly Listed IPOs */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-blue-600">Newly Listed</h3>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">View All</button>
        </div>

        <div className="relative">
          <button onClick={() => setCurrentIndexListed(i => Math.max(i - 1, 0))} className="absolute left-0 top-1/2 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition">
            <IoIosArrowBack className="text-2xl" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-12">
            {ipoNewlyAdded.slice(currentIndexListed, currentIndexListed + visibleCards).map((ipo, index) => renderIPOCard(ipo, false))}
          </div>

          <button onClick={() => setCurrentIndexListed(i => Math.min(i + 1, ipoNewlyAdded.length - visibleCards))} className="absolute right-0 top-1/2 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition">
            <IoIosArrowForward className="text-2xl" />
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto rounded-lg mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* IPO News Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black-600">IPO News</h2>
            <div className="mt-4">
              <p className="text-md font-medium text-black">Brainbees Solutions files DRHP with SEBI</p>
              <p className="text-sm text-gray-600">29 Dec, 2:48 PM</p>
            </div>
            <div className="mt-4">
              <p className="text-md font-medium text-black">Gretex Share Broking files DRHP with SEBI</p>
              <p className="text-sm text-gray-600">22 Dec, 2:47 PM</p>
            </div>
          </div>

          {/* IPO Analysis Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black-600">IPO Analysis</h2>
            <div className="mt-4">
              <p className="text-md font-medium text-black">Euphoria Infotech India coming with IPO to raise up to Rs 9.60 crore</p>
              <p className="text-sm text-gray-600">18 Jan, 2:26 PM</p>
            </div>
            <div className="mt-4">
              <p className="text-md font-medium text-black">EPACK Durable coming with IPO to raise up to Rs 662 crore</p>
              <p className="text-sm text-gray-600">17 Jan, 4:52 PM</p>
            </div>
            <div className="mt-4">
              <p className="text-md font-medium text-black">Qualitek Labs coming with IPO to raise Rs 19.64 crore</p>
              <p className="text-sm text-gray-600">17 Jan, 3:36 PM</p>
            </div>
          </div>

        </div>
      </div>

      {/* FAQ Section - Now Moved to Bottom */}
      <div className="max-w-screen-xl mx-auto mt-10">
        <div className="text-black text-start rounded-lg p-2">
          <h1 className="text-2xl font-bold mb-2">Frequently Asked Questions?</h1>
          <p className="text-sm">Find answers to common questions that come in your mind related to IPO.</p>
        </div>
        <div className="mt-5 flex flex-col gap-4 items-start">
          {[
           { question: "What is an IPO?", answer: "An Initial Public Offering (IPO) is the process by which a private company offers its shares to the public for the first time, allowing investors to buy ownership in the company." },
           { question: "How to invest in an IPO?", answer: "You can invest in an IPO through: Online: Using a brokerage account with UPI payment or ASBA (Application Supported by Blocked Amount). Offline: Submitting an IPO application form at a bank or registered brokerage." },
           { question: "What are the benefits of an IPO?", answer: "An IPO provides investors early access to promising companies, potential high returns, and liquidity in the stock market after listing." },
           { question: "What are the disadvantages of an IPO?", answer: "IPO investments carry risks such as price volatility, potential losses, lock-in periods for certain investors, and uncertainties in market demand." },
           { question: "What is the difference between Book Building Issue and Fixed Price Issue?", answer: "Book Building Issue allows price discovery through bidding in a given price range, while a Fixed Price Issue sets a pre-determined price for all investors." },
           { question: "Is it mandatory to have a PAN number to apply for an IPO?", answer: "Yes, it is mandatory to have a PAN (Permanent Account Number) to apply for any IPO in India." },
           { question: "Where do I get an IPO application form?", answer: "IPO application forms are available through banks, registered brokers, and online trading platforms." },
           { question: "How can one apply for an IPO online?", answer: "Investors can apply online through brokerage platforms using UPI or ASBA, selecting bid details and confirming payment." },
           { question: "How can one apply for an IPO offline?", answer: "Offline IPO applications can be submitted by filling out the physical form and submitting it to a registered bank or broker." },
           { question: "Can a minor apply for an IPO?", answer: "Yes, a minor can apply for an IPO but must do so through a guardian's Demat account." },
           { question: "What is the procedure to withdraw from an IPO?", answer: "Investors can cancel IPO applications if the issue is still open or sell allotted shares in the secondary market after listing." },
           { question: "How is IPO return calculated?", answer: "IPO return is calculated as [(Listing Price - IPO Price) / IPO Price] x 100." },
           { question: "Can one apply for an IPO from a sweep in/out saving bank account?", answer: "No, IPO applications should be made from a regular savings account linked to a Demat account." },
           { question: "What is the minimum and maximum investment for the HNI category?", answer: "The minimum investment for HNI (High Net-worth Individuals) category is ₹2 Lakhs, with no upper limit." },
           { question: "How to apply more than one application in an IPO?", answer: "One PAN is allowed per IPO application. To apply multiple times, separate Demat accounts and PANs must be used." }
          ].map((faq, index) => (
          <div key={index} className="w-full rounded-lg p-3 cursor-pointer shadow-2xl" onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center">
              <p className="font-semibold">{faq.question}</p>
              <RiArrowDropDownLine className="text-3xl text-black-500" />
            </div>
              {openIndex === index && <p className="mt-2 text-gray-700 transition-all duration-300 ease-in-out">{faq.answer}</p>}
          </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default IPO;
