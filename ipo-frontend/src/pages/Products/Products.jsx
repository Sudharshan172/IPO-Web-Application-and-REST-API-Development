const Products = () => {
  return (
    <div>
        <div className="bg-gray-300 flex flex-col md:flex-row items-center md:justify-evenly p-12">
            {/* Left Section */}
            <div className="w-full md:w-1/2 space-y-6">
                <h1 className="text-4xl font-bold leading-snug">
                Best-in-class<br />Technology &<br />Platforms
                </h1>
                <p className="text-lg">
                Our products & services aim to help active<br />
                traders & investors in India gain a winning<br />
                edge in the stock markets.
                </p>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/4 flex items-center justify-center bg-pink-300 p-8 text-2xl font-bold text-gray-800 h-50">
                Product
            </div>
        </div>

        <div className="bg-green-200 p-8 rounded-lg max-w-screen-xl mx-auto mt-5 mb-5">
            <h2 className="text-xl font-bold text-gray-800">Diversify Your Portfolio Today!</h2>
            <p className="mt-3 text-md text-gray-600">
                Start your investment journey with our user-friendly and secure<br />
                investment platforms.
            </p>
        </div>

        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between gap-6 p-5">
            {/* Box 1 - Bluestock IPO */}
            <div className="flex flex-col bg-white border-1 p-6 rounded-lg md:w-1/3">
                <div className="bg-pink-300 h-10 w-10 mb-4"></div>
                <p className="text-xl font-bold text-gray-800">Bluestock IPO</p>
                <p className="text-gray-600 mt-2">
                Be the first to apply for IPOs <br />
                and FPOs listed on the <br />
                NSE and BSE.
                </p>
            </div>

            {/* Box 2 - Another Bluestock IPO */}
            <div className="flex flex-col bg-white border-1 p-6 rounded-lg md:w-1/3">
                <div className="bg-violet-300 h-10 w-10 mb-4"></div>
                <p className="text-xl font-bold text-gray-800">Bluestock IPO</p>
                <p className="text-gray-600 mt-2">
                Be the first to apply for IPOs <br />
                and FPOs listed on the <br />
                NSE and BSE.
                </p>
            </div>

            {/* Box 3 - Third Bluestock IPO */}
            <div className="flex flex-col bg-white border-1 p-6 rounded-lg md:w-1/3">
                <div className="bg-green-300 h-10 w-10 mb-4"></div>
                <p className="text-xl font-bold text-gray-800">Bluestock IPO</p>
                <p className="text-gray-600 mt-2">
                Be the first to apply for IPOs <br />
                and FPOs listed on the <br />
                NSE and BSE.
                </p>
            </div>
        </div>

        <div className="bg-violet-200 p-8 rounded-lg max-w-screen-xl mx-auto mt-5 mb-5">
            <h2 className="text-xl font-bold text-gray-800">Grow Your Network and Learn the Stock Market</h2>
            <p className="mt-3 text-md text-gray-600">
                Our community-based approach encourages you to learn from experts<br/>
                and peers while expanding your connections.
            </p>
        </div>

        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10 p-5">
            {/* Box 1 - Bluestock IPO */}
            <div className="flex flex-col bg-white border-1 p-6 rounded-lg">
                <div className="bg-violet-200 h-10 w-10 mb-4"></div>
                <p className="text-xl font-bold text-gray-800">Bluestock IPO</p>
                <p className="text-gray-600 mt-2">
                Be the first to apply for IPOs <br />
                and FPOs listed on the <br />
                NSE and BSE.
                </p>
            </div>

            {/* Box 2 - Another Bluestock IPO */}
            <div className="flex flex-col bg-white border-1 p-6 rounded-lg">
                <div className="bg-green-200 h-10 w-10 mb-4"></div>
                <p className="text-xl font-bold text-gray-800">Bluestock IPO</p>
                <p className="text-gray-600 mt-2">
                Be the first to apply for IPOs <br />
                and FPOs listed on the <br />
                NSE and BSE.
                </p>
            </div>
        </div>

        <div className="bg-violet-200 p-8 rounded-lg max-w-screen-xl mx-auto mt-5 mb-5">
            <h2 className="text-xl font-bold text-gray-800">Make your platform more powerful</h2>
            <p className="mt-3 text-md text-gray-600">
                Integrate with our in-house trading platform amd build your own<br/>
                customized trading applications.
            </p>
        </div>

        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-6 p-5">
            {/* Box 1 - Bluestock IPO */}
            <div className="flex flex-col bg-white border-1 p-6 rounded-lg">
                <div className="bg-violet-200 h-10 w-10 mb-4"></div>
                <p className="text-xl font-bold text-gray-800">Bluestock IPO</p>
                <p className="text-gray-600 mt-2">
                Be the first to apply for IPOs <br />
                and FPOs listed on the <br />
                NSE and BSE.
                </p>
            </div>
        </div>

    </div>
  );
};

export default Products;
