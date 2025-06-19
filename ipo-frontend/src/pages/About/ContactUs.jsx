import { FaArrowRight } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-start text-gray-500 mb-6">How Can We Help You?</h2>

        {/* Contact Boxes - Stacks Vertically on Small Screens, Side-by-Side on Large Screens */}
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          
          {/* Box 1 */}
          <div className="bg-white rounded-lg p-6 w-full lg:w-1/2 text-start border-1 border-black-500">
            <p className="text-xl font-semibold">Email Us</p>
            <p className="text-gray-700 mt-2">One of our agents will respond at the earliest</p>
            <div className="bg-blue-200 text-blue-600 flex justify-between items-center rounded-lg px-4 py-3 mt-4 cursor-pointer transition">
              <h3 className="text-xl">hello@bluestock.in</h3>
              <a href="mailto:hello@bluestock.in" className="text-lg"><FaArrowRight /></a>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-lg p-6 w-full lg:w-1/2 text-start border-1 border-black-500">
            <p className="text-xl font-semibold">Chat with Us</p>
            <p className="text-gray-700 mt-2">Available from 8:00 AM to 5:00 PM</p>
            <div className="bg-blue-200 text-blue-600 flex justify-between items-center rounded-lg px-4 py-3 mt-4 cursor-pointer transition">
              <h3 className="text-xl">Open Chat</h3>
              <a href="mailto:hello@bluestock.in" className="text-lg"><FaArrowRight /></a>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-blue-500 text-white text-center p-6 rounded-md mb-5">
        <h2 className="text-3xl font-bold">Interact With Us in Our Active Community</h2>
        <p className="text-lg text-gray-300 mt-4">
          Ask questions or discuss anything related to investing or trading in the most active trading & investing community.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-md mt-4 hover:bg-gray-900 transition">
          Join Now
        </button>
      </div>

    </div>

  );
};

export default ContactUs;
