const Careers = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-6">
        {/* Outer Box Holding Both Sections */}
        <div className="bg-white rounded-lg p-6 flex flex-col lg:flex-row items-center">

          {/* Left Section: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-2xl font-bold text-blue-600">Together, Let's Build The</h2>
            <h2 className="text-2xl font-bold text-blue-600">Future Of Fintech!</h2>
            <p className="text-gray-700 mt-4">
              Join Bluestock Fintech to create disruptive fin-tech products, while 
              working from anywhere!
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded mt-4 hover:bg-blue-600 transition w-fit mx-auto lg:mx-0">
              See Job Openings
            </button>
          </div>

          {/* Right Section: Image (Stacks Below on Small Screens) */}
          <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
            <img src='https://ik.imagekit.io/ipo22webapp/careers.png?updatedAt=1748067373956' alt="Fintech Careers" className="h-60 sm:h-72 md:h-80 max-w-full rounded-lg" />
          </div>

        </div>

        {/*section-2*/}
        <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6 flex flex-col lg:flex-row items-center">

          {/* Left Box - Stats & Mobile Image */}
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            <img src='https://ik.imagekit.io/ipo22webapp/footer-mockup.png?updatedAt=1748067373356' alt="Mobile Preview" className="h-60 sm:h-72 md:h-80 max-w-full rounded-lg" />
            <h3 className="text-3xl font-bold mt-4">4.4K +</h3>
            <h3 className="text-lg">DOWNLOADS</h3>
          </div>

          {/* Right Box - Download App Info */}
          <div className="lg:w-1/2 w-full flex flex-col items-center text-center mt-6 lg:mt-0">
            <p className="text-lg font-semibold">Enjoy Free Learning, Analytics Club</p>
            <p className="text-md text-gray-200 mt-2">Get the link to download the App</p>

            {/* Input & Button */}
            <div className="flex mt-4 w-full justify-center">
              <input type="text" placeholder="Enter mobile number" className="px-4 py-2 rounded-l border border-gray-300 focus:outline-none w-42"/>
              <button className="bg-yellow-400 text-black rounded-r hover:bg-yellow-500 transition">Send App Link</button>
            </div>

            {/* QR & App Store Logos */}
            <div className="flex flex-col items-center mt-6">
              <img src='https://ik.imagekit.io/ipo22webapp/app-qr.png?updatedAt=1748066885554' alt="QR Code" className="h-24 w-24"/>
              <div className="flex space-x-4 mt-4">
                {/* Google Play Store Link */}
                <a href="https://play.google.com/store/apps/details?id=in.bluestock.app" target="_blank" rel="noopener noreferrer">
                  <img src='https://ik.imagekit.io/ipo22webapp/playstore-logo.png?updatedAt=1748067039337' alt="Google Playstore" className="h-8 cursor-pointer"/>
                </a>

                {/* Apple Store Link */}
                <a href="https://apps.apple.com/us/app/example-app/id1234567890" target="_blank" rel="noopener noreferrer">
                  <img src='https://ik.imagekit.io/ipo22webapp/applestore-logo.png?updatedAt=1748067039334' alt="Apple Store" className="h-8 cursor-pointer"/>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-blue-100 text-black text-center p-5 rounded-md mt-5 mb-5">
          <p className="text-lg font-medium">
            All official communication with the HR team at Bluestock Fintech will be through 
            <a href="mailto:hr@bluestock.in" className="text-blue-400 hover:underline"> hr@bluestock.in</a>.
          </p>
      </div>
    </div>
  );
};

export default Careers;
