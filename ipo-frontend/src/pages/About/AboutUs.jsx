import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      
      {/* About Description Section */}
      <div className="bg-white rounded-lg p-6 text-start">
        <h3 className="text-2xl font-bold text-black-600">
          Bluestock is a mobile app for stock market <br />
          learning, analytics & club
        </h3>
        <p className="text-gray-600 mt-4">
          We are passionate about helping you succeed in the stock <br />
          market by providing cutting-edge tools and a supportive <br />
          community of traders. <br />
          Join us on this journey, and let's make your stock trading <br />
          experience better.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
        <div className="bg-blue-600 text-white text-center p-6 rounded-lg shadow-md w-full sm:w-1/3">
          <p className="text-3xl font-bold">5+</p>
          <p className="text-lg">Customers</p>
        </div>
        <div className="bg-blue-600 text-white text-center p-6 rounded-lg shadow-md w-full sm:w-1/3">
          <p className="text-3xl font-bold">20+</p>
          <p className="text-lg">Team Members</p>
        </div>
        <div className="bg-blue-600 text-white text-center p-6 rounded-lg shadow-md w-full sm:w-1/3">
          <p className="text-3xl font-bold">4.9</p>
          <p className="text-lg">Rating</p>
        </div>
      </div>

      {/* Traders Talk Section */}
      <div className="container mx-auto p-6 mt-10">
        <p className="text-xl font-semibold text-blue-500 text-center">TRADERS TALK</p>
        <h3 className="text-3xl font-bold text-center">Recent News</h3>

        <div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
          <div className="bg-blue-100 text-black rounded-lg p-6 w-full md:w-1/3">
            <h3 className="text-red-500 font-bold text-lg text-center">Business Standard</h3>
            <p className="mt-2">
              Rs 20 trillion & rising: AUM of active <br />
              equity mutual funds surges.
            </p>
          </div>
          <div className="bg-blue-100 text-black rounded-lg p-6 w-full md:w-1/3">
            <h3 className="text-gray-900 font-bold text-lg text-center">Medium</h3>
            <p className="mt-2">
              Bluestock is a mobile app for stock <br />
              market learning, analytics, and club. <br />
              Supportive community of traders.
            </p>
          </div>
          <div className="bg-blue-100 text-black rounded-lg p-6 w-full md:w-1/3">
            <h3 className="text-sky-400 font-bold text-lg text-center">BW BUSINESSWORLD</h3>
            <p className="mt-2">
              Mutual Funds Experience Fourfold Surge <br />
              In NFO Collections, Reaching Rs 22,000 Cr in Q2.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <p className="text-violet-600 text-lg font-semibold flex items-center gap-2">
            Media & Press Release <FaRegArrowAltCircleRight />
          </p>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-blue-400 text-white text-start p-6 rounded-4xl mt-10">
        <h3 className="text-3xl font-bold">Want to Join Us?</h3>
        <p className="mt-4">
          We're taking complicated stuff and making it super simple. Our teams are full of smart and savvy folks working on challenging tasks.
        </p>
        <p className="mt-8">
          And we're always looking for customer-obsessed people. Think you're customer-focused enough? 
          Write to us at <a href="mailto:hello@bluestock.in" className="text-yellow-300 hover:underline"> hello@bluestock.in</a>.
        </p>
        <button className="bg-purple-700 text-white px-6 py-2 rounded-md mt-6 hover:bg-purple-800 transition">
          Apply Now
        </button>
      </div>

      {/* FAQ Section - Now Moved to Bottom */}
      <div className="container mx-auto p-6 mt-10">
        <div className="text-black text-center p-6 rounded-lg">
          <h1 className="text-2xl font-bold">FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <div className="mt-4 flex flex-col gap-4 items-start">
          {[
            { question: "What is Bluestock?", answer: "Bluestock is a mobile app for stock market learning, analytics, and community engagement." },
            { question: "What platforms does Bluestock support?", answer: "Bluestock is available on Android and iOS, allowing traders to access market insights anytime, anywhere." },
            { question: "Is there educational content on the app?", answer: "Yes! Bluestock offers tutorials, courses, and expert analyses to help both beginners and experienced traders improve their skills." },
            { question: "Is Bluestock free to use?", answer: "Bluestock provides a mix of free and premium features, ensuring users can access valuable tools regardless of their subscription level." },
            { question: "How can I get technical support for the app?", answer: "You can reach our support team via the in-app chat feature or email us at support@bluestock.in for any assistance." }
          ].map((faq, index) => (
            <div key={index} className="w-full rounded-lg p-3 cursor-pointer shadow-2xl" onClick={() => toggleFAQ(index)}>
              <div className="flex justify-between items-center">
                <p className="font-semibold">{faq.question}</p>
                <RiArrowDropDownLine className="text-3xl text-black-500" />
              </div>
              {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default AboutUs;
