import { TiTick } from "react-icons/ti";
import { FaRegCircle } from "react-icons/fa";
const Community = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-12 bg-gray-100">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold leading-snug text-gray-800">
            The Most Active <br /> Community of <br /> Traders & Investors
          </h1>
          <p className="mt-4 text-gray-600">
            Join now to interact with thousands of active traders and investors to learn and share 
            your knowledge on our buzzing forum.
          </p>
          <button className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600">
            Join Our Community
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/4 text-center text-2xl font-bold bg-sky-400 p-6">
          Community
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center justify-center p-12 bg-gray-100">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800">
            Be a part of the Trading &<br /> Investments Club
          </h2>
          <p className="flex items-center gap-2 text-gray-600">
            <TiTick className="text-black-500" /> Rich environment for knowledge exchange.
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <TiTick className="text-black-500" /> Stay connected about the latest stock market.
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <TiTick className="text-black-500" /> Access exclusive community events, webinars & meet-ups.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 text-center text-2xl font-bold bg-sky-400 p-6 mt-8">
          Discussions
        </div>
      </div>

      <div className="flex flex-col items-center p-12 bg-gray-100">
        {/* Title Section */}
        <div className="w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800">Team Bluestock Cares</h1>
          <p className="mt-4 text-gray-600">
            Interact with our members to engage, <br />
            clarify, and contribute.
          </p>
        </div>

        {/* Content Section - Two Columns */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
          {/* Left Section */}
          <div className="w-1/2 space-y-4">
            <h1 className="text-3xl font-semibold text-gray-800">Interact With Our Experts</h1>
            <p className="flex items-center gap-2 text-gray-600">
              <FaRegCircle className="text-blue-600" /> Get valid suggestions
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <FaRegCircle className="text-blue-600" /> Raise issues or concerns
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <FaRegCircle className="text-blue-600" /> Ask your questions
            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center w-1/4 text-center text-xl font-bold bg-sky-400 p-6">
            Community
          </div>
        </div>
      </div>

    </div>

  );
};

export default Community;
