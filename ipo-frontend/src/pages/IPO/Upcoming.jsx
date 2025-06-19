import { RiArrowDropDownLine } from "react-icons/ri";
import { useState} from "react";

const Community = () => {
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
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-600">Upcoming IPO</h2>
      <p className="text-gray-700">Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later.</p>

      {/* IPO Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {ipoUpcoming.map((ipo, index) => (
          <div key={index} className="rounded-lg p-6 shadow-lg">
            {/* Company Name & Logo */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="h-16 w-16 bg-white rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${ipo.logo})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
              </div>
              <p className="text-xl font-bold text-black">{ipo.name}</p>
            </div>

            {/* IPO Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-xs">PRICE BAND</p>
                <p className="font-bold text-black">{ipo.priceBand}</p>
              </div>
              <div className="text-center">
                <p className="text-xs">OPEN</p>
                <p className="font-bold text-black">{ipo.open}</p>
              </div>
              <div className="text-center">
                <p className="text-xs">CLOSE</p>
                <p className="font-bold text-black">{ipo.close}</p>
              </div>
              <div className="text-center">
                <p className="text-xs">ISSUE SIZE</p>
                <p className="font-bold text-black">{ipo.issueSize}</p>
              </div>
              <div className="text-center">
                <p className="text-xs">ISSUE TYPE</p>
                <p className="font-bold text-black">{ipo.issueType}</p>
              </div>
              <div className="text-center">
                <p className="text-xs">LISTING DATE</p>
                <p className="font-bold text-black">{ipo.listingDate}</p>
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
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section - Now Moved to Bottom */}
        <div className="max-w-screen-xl mx-auto mt-10">
            <div className="text-black text-start rounded-lg p-2">
                <h1 className="text-2xl font-bold mb-2">Frequently Asked Questions?</h1>
                <p className="text-sm">Find answers to common questions that come in your mind related to IPO.</p>
            </div>
            <div className="mt-5 flex flex-col gap-4 items-start">
                {[
                 { question: "How to subscribe to an IPO?", answer: "You can subscribe to an IPO through online brokerage accounts or offline applications via banks using ASBA or UPI methods." },
                 { question: "Should I buy an IPO on the first day?", answer: "IPO investments depend on market demand, valuation, and listing price expectations. Buying on the first day may offer gains, but thorough research is advised." },
                 { question: "How do you know if an IPO is good?", answer: "Assess company financials, compare with competitors, check growth potential, and monitor Grey Market Premium (GMP) trends." },
                 { question: "How to check the IPO start date?", answer: "IPO start dates are available on stock exchange websites (NSE/BSE) and brokerage platforms announcing upcoming listings." },
                 { question: "What is issue size?", answer: "Issue size refers to the total value of shares offered in an IPO, measured in crores." },
                 { question: "How many shares are in a lot?", answer: "Each IPO has a specified lot size, typically ranging from 10 to 1000 shares per lot." },
                 { question: "How is the lot size calculated?", answer: "Lot size is determined based on affordability for retail investors, market conditions, and SEBI regulations." },
                 { question: "Who decides the IPO price band?", answer: "The IPO price band is set by the company and investment bankers based on demand, valuation, and market conditions." },
                 { question: "What is IPO GMP?", answer: "IPO Grey Market Premium (GMP) is the unofficial market price of IPO shares before listing, reflecting expected demand and valuation." },
                 { question: "How many lots should I apply for an IPO?", answer: "Retail investors can apply for multiple lots, but allotment depends on oversubscription. Applying more does not guarantee allotment." }
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

export default Community;
