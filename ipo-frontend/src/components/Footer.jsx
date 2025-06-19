import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Footer Content - Grid Layout */}
        <div className="flex flex-wrap gap-4 text-start mb-10 p-10">
          <div className="w-[10%] min-w-[200px]">
            <h3 className="font-bold mb-3">Resources</h3>
            <ul>
              <li className="mb-1">Trading View</li>
              <li className="mb-1">NSE Holidays</li>
              <li className="mb-1">e-Voting CDSL</li>
              <li className="mb-1">e-Voting NSDL</li>
              <li className="mb-1">Market Timings</li>
            </ul>
          </div>

          <div className="w-[10%] min-w-[200px]">
            <h3 className="font-bold mb-3">Company</h3>
            <ul>
              <li className="mb-1">Careers</li>
              <li className="mb-1">Contact Us</li>
              <li className="mb-1">About Us</li>
              <li className="mb-1">Community</li>
              <li className="mb-1">Blogs</li>
            </ul>
          </div>

          <div className="w-[10%] min-w-[200px]">
            <h3 className="font-bold mb-3">Offerings</h3>
            <ul>
              <li className="mb-1">Compare Broker</li>
              <li className="mb-1">Fin Calculators</li>
              <li className="mb-1">IPO</li>
              <li className="mb-1">All Brokers</li>
              <li className="mb-1">Products</li>
            </ul>
          </div>

          <div className="w-[10%] min-w-[200px]">
            <h3 className="font-bold mb-3">Links</h3>
            <ul>
              <li className="mb-1">Shark Investor</li>
              <li className="mb-1">Mutual Funds</li>
              <li className="mb-1">Sitemap</li>
              <li className="mb-1">Indian Indices</li>
              <li className="mb-1">Bug Bounty Program</li>
            </ul>
          </div>

          <div className="w-[10%] min-w-[200px]">
            <h3 className="font-bold mb-3">Policy</h3>
            <ul>
              <li className="mb-1">Terms & Conditions</li>
              <li className="mb-1">Privacy Policy</li>
              <li className="mb-1">Refund Policy</li>
              <li className="mb-1">Disclaimer</li>
              <li className="mb-1">Trust & Security</li>
            </ul>
          </div>
        </div>


        {/* Additional Section Below */}
        <div className="flex flex-wrap justify-between p-10">
          {/* Left Side - Social Media, Logo, Address */}
          <div className="flex flex-col items-start">
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaYoutube size={24} />
              <FaLinkedin size={24} />
              <FaInstagram size={24} />
              <FaTelegram size={24} />
            </div>

            {/* First Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <img src="https://ik.imagekit.io/ipo22webapp/bluestock-logo.png?updatedAt=1750264429826" alt="Bluestock Logo" className="h-12 w-auto" />

              {/* Bluestock Text */}
              <span className="text-white font-bold text-2xl">BLUESTOCK</span>
            </div>

            {/* Address */}
            <p className="ml-3">Bluestock Fintech</p>
            <p className="ml-3 mb-3">Pune, Maharashtra</p>
            <p className="ml-3">MSME Registration No:</p>
            <p className="ml-3">UDYAM-MH-01-v0138001</p>
            {/* Second Logo */}
            <img src="https://bluestock.in/assets/img/startupindialogo.png" alt="Bluestock Logo 2" className="h-20 w-auto mt-2" />
          </div>

          {/* Right Side - Text Section */}
          <div className="w-1/2 text-sm">
            <p className="mb-5">
              Investment in securities markets is subject to market risks. Read all related documents carefully before investing as prescribed by SEBI.
              Issued in the interest of the investors.
            </p>
            <p className="mb-10">
              The users can write to <a href="mailto:hello@bluestock.in" className="text-blue-500 hover:underline">hello@bluestock.in</a> for any app, website related queries.
              Also you can send IT/Tech related feedback to <a href="mailto:cto@bluestock.in" className="text-blue-500 hover:underline">cto@bluestock.in</a>
            </p>
            <p>
              Disclaimer: We are not a SEBI registered research company. We do not provide any kind of stock recommendations, buy/sell stock tips, or Investment
              and trading advice. All the stock scripts shown in the Bluestock app, website, all social media handles are for education purposes only.
              Before making any investment in the financial market, it is advisable to consult with your financial advisor. Remember that stock markets are subjected to
              market risks.
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="flex flex-col items-center sm:flex-row justify-between p-4">
        <p className="text-center sm:text-left pl-4">Bluestock Fintech All Rights Reserved.</p>
        <p className="text-center sm:text-right pl-4">Made with ❤️ in Pune, Maharashtra</p>
      </div>
    </footer>
  );
};

export default Footer;
