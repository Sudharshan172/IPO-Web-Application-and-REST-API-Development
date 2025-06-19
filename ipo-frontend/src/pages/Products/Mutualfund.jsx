import { RiArrowDropDownLine, RiArrowDropUpFill } from "react-icons/ri";

const Product3 = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-gray-200 mb-10">
        <div className="mt-20 p-8 container mx-auto flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold text-gray-800">Large Cap Mutual Funds</h1>
            <p className="text-gray-600 mt-4">
              Large Cap funds invest in stocks of the top 100 companies in terms of full market capitalization.
              They invest at least 80% of their assets in large cap companies. These funds are relatively 
              less risky than other market cap funds.
            </p>
          </div>
          <div className="bg-violet-400 text-2xl font-bold text-white flex items-center justify-center w-1/4 h-20 rounded-lg">
          MF
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Overview of Large Cap Mutual Funds</h2>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-5 mb-5">
        {/* Fund Categories Section (1/4 width) */}
        <div className="col-span-1 bg-gray-300 p-6 rounded-lg h-full">
          <p className="text-lg font-semibold text-gray-800">Fund Categories</p>
          <div className="space-y-2 mt-3">
            <p className="flex items-center text-gray-700">Equity <RiArrowDropDownLine className="ml-1 text-xl" /></p>
            <p className="flex items-center text-gray-700">Debt <RiArrowDropDownLine className="ml-1 text-xl" /></p>
            <p className="flex items-center text-gray-700">Hybrid <RiArrowDropDownLine className="ml-1 text-xl" /></p>
            <p className="flex items-center text-gray-700">Commodity <RiArrowDropDownLine className="ml-1 text-xl" /></p>
            <p className="flex items-center text-gray-700">Other <RiArrowDropDownLine className="ml-1 text-xl" /></p>
          </div>
        </div>

        {/* Fund Details Section (3/4 width) */}
        <div className="col-span-3 bg-gray-300 shadow-md p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <img src="https://static.smartspends.com/static/images/short_providers_logos/bills_investment_canerarobeco.jpg" alt="Fund Logo" className="w-16 h-16 bg-gray-300 rounded-lg" />
            <div>
              <p className="text-lg font-bold text-gray-800">Canara Rob Bluechip Equity Fund</p>
              <div className="grid grid-cols-3 gap-4 mt-3 text-center">
                <p className="p-2">AUM<br/><span className="font-semibold text-gray-800">₹ 10,816.61 Cr.</span></p>
                <p className="p-2">Expense Ratio<br/><span className="font-semibold text-gray-800">0.5%</span></p>
                <p className="p-2">5Y CAGR<br/><span className="flex items-center text-green-600 font-bold"><RiArrowDropUpFill className="text-green-600 font-bold text-xl mr-1"/> 18.48%</span></p>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="flex items-center space-x-3">
              <img src="https://www.dontworkanotherday.com/wp-content/uploads/2022/03/Strong_Returns.png" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Performance</p>
                <p className="text-gray-600">The fund's annualized performance has been 15.3% since inception.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://www.shutterstock.com/image-vector/risk-meter-colorcoded-levels-ranging-600nw-2413034815.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Risk</p>
                <p className="text-gray-600">The fund has been categorized as Very High by SEBI and has a standard deviation of 9.09% vs its category average of<br/>
                9.61%.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://static.vecteezy.com/system/resources/previews/005/720/225/non_2x/colorful-painting-palette-icon-isolated-on-white-background-art-symbol-free-vector.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Composition</p>
                <p className="text-gray-600">Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at<br/>
                22.27%.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fund Categories Section (1/4 width) */}
        <div className="hidden lg:block col-span-1 p-6 rounded-lg h-full">
        </div>


        {/* Fund Details Section (3/4 width) */}
        <div className="col-span-3 bg-gray-300 shadow-md p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <img src="https://img.etimg.com/thumb/msid-115694429,width-127,height-95,imgsize-7480,resizemode-4/mf/mf-news/baroda-bnp-paribas-balanced-advantage-fund-turn-rs-10000-monthly-sip-to-rs-12-lakh-in-6-years.jpg" alt="Fund Logo" className="w-16 h-16 bg-gray-300 rounded-lg" />
            <div>
              <p className="text-lg font-bold text-gray-800">Baroda BNP Paribas Large Cap Fund</p>
              <div className="grid grid-cols-3 gap-4 mt-3 text-center">
                <p className="p-2">AUM<br/><span className="font-semibold text-gray-800">₹ 1,693.42 Cr.</span></p>
                <p className="p-2">Expense Ratio<br/><span className="font-semibold text-gray-800">0.92%</span></p>
                <p className="p-2">5Y CAGR<br/><span className="flex items-center text-green-600 font-bold"><RiArrowDropUpFill className="text-green-600 font-bold text-xl mr-1"/> 18.19%</span></p>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="flex items-center space-x-3">
              <img src="https://www.dontworkanotherday.com/wp-content/uploads/2022/03/Strong_Returns.png" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Performance</p>
                <p className="text-gray-600">The fund's annualized performance has been 15.3% since inception.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://www.shutterstock.com/image-vector/risk-meter-colorcoded-levels-ranging-600nw-2413034815.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Risk</p>
                <p className="text-gray-600">The fund has been categorized as Very High by SEBI and has a standard deviation of 9.09% vs its category average of<br/>
                9.61%.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://static.vecteezy.com/system/resources/previews/005/720/225/non_2x/colorful-painting-palette-icon-isolated-on-white-background-art-symbol-free-vector.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Composition</p>
                <p className="text-gray-600">Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at<br/>
                22.27%.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fund Categories Section (1/4 width) */}
        <div className="hidden lg:block col-span-1 p-6 rounded-lg h-full">
        </div>

        {/* Fund Details Section (3/4 width) */}
        <div className="col-span-3 bg-gray-300 shadow-md p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <img src="https://groww.in/images/partners/nippon_groww.png" alt="Fund Logo" className="w-16 h-16 bg-gray-300 rounded-lg" />
            <div>
              <p className="text-lg font-bold text-gray-800">Nippon India Large Cap Fund</p>
              <div className="grid grid-cols-3 gap-4 mt-3 text-center">
                <p className="p-2">AUM<br/><span className="font-semibold text-gray-800">₹ 18,071.87 Cr.</span></p>
                <p className="p-2">Expense Ratio<br/><span className="font-semibold text-gray-800">0.82%</span></p>
                <p className="p-2">5Y CAGR<br/><span className="flex items-center text-green-600 font-bold"><RiArrowDropUpFill className="text-green-600 font-bold text-xl mr-1"/> 18.33%</span></p>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="flex items-center space-x-3">
              <img src="https://www.dontworkanotherday.com/wp-content/uploads/2022/03/Strong_Returns.png" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Performance</p>
                <p className="text-gray-600">The fund's annualized performance has been 15.3% since inception.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://www.shutterstock.com/image-vector/risk-meter-colorcoded-levels-ranging-600nw-2413034815.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Risk</p>
                <p className="text-gray-600">The fund has been categorized as Very High by SEBI and has a standard deviation of 9.09% vs its category average of<br/>
                9.61%.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://static.vecteezy.com/system/resources/previews/005/720/225/non_2x/colorful-painting-palette-icon-isolated-on-white-background-art-symbol-free-vector.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Composition</p>
                <p className="text-gray-600">Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at<br/>
                22.27%.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fund Categories Section (1/4 width) */}
        <div className="hidden lg:block col-span-1 p-6 rounded-lg h-full">
        </div>

        {/* Fund Details Section (3/4 width) */}
        <div className="col-span-3 bg-gray-300 shadow-md p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <img src="https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1648383607" alt="Fund Logo" className="w-16 h-16 bg-gray-300 rounded-lg" />
            <div>
              <p className="text-lg font-bold text-gray-800">ICICI Pru Bluechip Fund</p>
              <div className="grid grid-cols-3 gap-4 mt-3 text-center">
                <p className="p-2">AUM<br/><span className="font-semibold text-gray-800">₹ 47,928.62 Cr.</span></p>
                <p className="p-2">Expense Ratio<br/><span className="font-semibold text-gray-800">0.93%</span></p>
                <p className="p-2">5Y CAGR<br/><span className="flex items-center text-green-600 font-bold"><RiArrowDropUpFill className="text-green-600 font-bold text-xl mr-1"/> 18.28%</span></p>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="flex items-center space-x-3">
              <img src="https://www.dontworkanotherday.com/wp-content/uploads/2022/03/Strong_Returns.png" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Performance</p>
                <p className="text-gray-600">The fund's annualized performance has been 15.3% since inception.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://www.shutterstock.com/image-vector/risk-meter-colorcoded-levels-ranging-600nw-2413034815.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Risk</p>
                <p className="text-gray-600">The fund has been categorized as Very High by SEBI and has a standard deviation of 9.09% vs its category average of<br/>
                9.61%.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://static.vecteezy.com/system/resources/previews/005/720/225/non_2x/colorful-painting-palette-icon-isolated-on-white-background-art-symbol-free-vector.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Composition</p>
                <p className="text-gray-600">Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at<br/>
                22.27%.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fund Categories Section (1/4 width) */}
        <div className="hidden lg:block col-span-1 p-6 rounded-lg h-full">
        </div>

        {/* Fund Details Section (3/4 width) */}
        <div className="col-span-3 bg-gray-300 shadow-md p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <img src="https://img.smartspends.com/static/images/amc_logo/edelweiss.png" alt="Fund Logo" className="w-16 h-16 bg-gray-300 rounded-lg" />
            <div>
              <p className="text-lg font-bold text-gray-800">Edelweiss Large Cap Fund</p>
              <div className="grid grid-cols-3 gap-4 mt-3 text-center">
                <p className="p-2">AUM<br/><span className="font-semibold text-gray-800">₹ 685.68 Cr.</span></p>
                <p className="p-2">Expense Ratio<br/><span className="font-semibold text-gray-800">0.77%</span></p>
                <p className="p-2">5Y CAGR<br/><span className="flex items-center text-green-600 font-bold"><RiArrowDropUpFill className="text-green-600 font-bold text-xl mr-1"/> 17.92%</span></p>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="flex items-center space-x-3">
              <img src="https://www.dontworkanotherday.com/wp-content/uploads/2022/03/Strong_Returns.png" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Performance</p>
                <p className="text-gray-600">The fund's annualized performance has been 15.3% since inception.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://www.shutterstock.com/image-vector/risk-meter-colorcoded-levels-ranging-600nw-2413034815.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Risk</p>
                <p className="text-gray-600">The fund has been categorized as Very High by SEBI and has a standard deviation of 9.09% vs its category average of<br/>
                9.61%.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://static.vecteezy.com/system/resources/previews/005/720/225/non_2x/colorful-painting-palette-icon-isolated-on-white-background-art-symbol-free-vector.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Composition</p>
                <p className="text-gray-600">Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at<br/>
                22.27%.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fund Categories Section (1/4 width) */}
        <div className="hidden lg:block col-span-1 p-6 rounded-lg h-full">
        </div>

        {/* Fund Details Section (3/4 width) */}
        <div className="col-span-3 bg-gray-300 shadow-md p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <img src="https://seekvectors.com/files/download/kotak-mahindra-bank-logo-04.png" alt="Fund Logo" className="w-16 h-16 bg-gray-300 rounded-lg" />
            <div>
              <p className="text-lg font-bold text-gray-800">Kotak Bluechip Fund</p>
              <div className="grid grid-cols-3 gap-4 mt-3 text-center">
                <p className="p-2">AUM<br/><span className="font-semibold text-gray-800">₹ 7,333.93 Cr.</span></p>
                <p className="p-2">Expense Ratio<br/><span className="font-semibold text-gray-800">0.6%</span></p>
                <p className="p-2">5Y CAGR<br/><span className="flex items-center text-green-600 font-bold"><RiArrowDropUpFill className="text-green-600 font-bold text-xl mr-1"/> 17.9%</span></p>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="flex items-center space-x-3">
              <img src="https://www.dontworkanotherday.com/wp-content/uploads/2022/03/Strong_Returns.png" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Performance</p>
                <p className="text-gray-600">The fund's annualized performance has been 15.3% since inception.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://www.shutterstock.com/image-vector/risk-meter-colorcoded-levels-ranging-600nw-2413034815.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Risk</p>
                <p className="text-gray-600">The fund has been categorized as Very High by SEBI and has a standard deviation of 9.09% vs its category average of<br/>
                9.61%.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://static.vecteezy.com/system/resources/previews/005/720/225/non_2x/colorful-painting-palette-icon-isolated-on-white-background-art-symbol-free-vector.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Composition</p>
                <p className="text-gray-600">Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at<br/>
                22.27%.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fund Categories Section (1/4 width) */}
        <div className="hidden lg:block col-span-1 p-6 rounded-lg h-full">
        </div>

        {/* Fund Details Section (3/4 width) */}
        <div className="col-span-3 bg-gray-300 shadow-md p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <img src="https://th.bing.com/th/id/OIP.jhA19Rttj1zbYwbixzIKgAAAAA?rs=1&pid=ImgDetMains" alt="Fund Logo" className="w-16 h-16 bg-gray-300 rounded-lg" />
            <div>
              <p className="text-lg font-bold text-gray-800">Invesco India Largecap Fund</p>
              <div className="grid grid-cols-3 gap-4 mt-3 text-center">
                <p className="p-2">AUM<br/><span className="font-semibold text-gray-800">₹ 909.48 Cr.</span></p>
                <p className="p-2">Expense Ratio<br/><span className="font-semibold text-gray-800">0.8%</span></p>
                <p className="p-2">5Y CAGR<br/><span className="flex items-center text-green-600 font-bold"><RiArrowDropUpFill className="text-green-600 font-bold text-xl mr-1"/> 17.19%</span></p>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="flex items-center space-x-3">
              <img src="https://www.dontworkanotherday.com/wp-content/uploads/2022/03/Strong_Returns.png" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Performance</p>
                <p className="text-gray-600">The fund's annualized performance has been 15.3% since inception.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://www.shutterstock.com/image-vector/risk-meter-colorcoded-levels-ranging-600nw-2413034815.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Risk</p>
                <p className="text-gray-600">The fund has been categorized as Very High by SEBI and has a standard deviation of 9.09% vs its category average of<br/>
                9.61%.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://static.vecteezy.com/system/resources/previews/005/720/225/non_2x/colorful-painting-palette-icon-isolated-on-white-background-art-symbol-free-vector.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Composition</p>
                <p className="text-gray-600">Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at<br/>
                22.27%.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fund Categories Section (1/4 width) */}
        <div className="hidden lg:block col-span-1 p-6 rounded-lg h-full">
        </div>

        {/* Fund Details Section (3/4 width) */}
        <div className="col-span-3 bg-gray-300 shadow-md p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <img src="https://th.bing.com/th/id/OIP.gSxgB4Mg806Y_MnSMPiipgAAAA?rs=1&pid=ImgDetMain" alt="Fund Logo" className="w-16 h-16 bg-gray-300 rounded-lg" />
            <div>
              <p className="text-lg font-bold text-gray-800">JM Large Cap Fund</p>
              <div className="grid grid-cols-3 gap-4 mt-3 text-center">
                <p className="p-2">AUM<br/><span className="font-semibold text-gray-800">₹ 61.22 Cr.</span></p>
                <p className="p-2">Expense Ratio<br/><span className="font-semibold text-gray-800">1.75%</span></p>
                <p className="p-2">5Y CAGR<br/><span className="flex items-center text-green-600 font-bold"><RiArrowDropUpFill className="text-green-600 font-bold text-xl mr-1"/> 16.99%</span></p>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="flex items-center space-x-3">
              <img src="https://www.dontworkanotherday.com/wp-content/uploads/2022/03/Strong_Returns.png" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Performance</p>
                <p className="text-gray-600">The fund's annualized performance has been 15.3% since inception.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://www.shutterstock.com/image-vector/risk-meter-colorcoded-levels-ranging-600nw-2413034815.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Risk</p>
                <p className="text-gray-600">The fund has been categorized as Very High by SEBI and has a standard deviation of 9.09% vs its category average of<br/>
                9.61%.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://static.vecteezy.com/system/resources/previews/005/720/225/non_2x/colorful-painting-palette-icon-isolated-on-white-background-art-symbol-free-vector.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Composition</p>
                <p className="text-gray-600">Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at<br/>
                22.27%.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fund Categories Section (1/4 width) */}
        <div className="hidden lg:block col-span-1 p-6 rounded-lg h-full">
        </div>

        {/* Fund Details Section (3/4 width) */}
        <div className="col-span-3 bg-gray-300 shadow-md p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <img src="https://logodix.com/logo/1620137.png" alt="Fund Logo" className="w-16 h-16 bg-gray-300 rounded-lg" />
            <div>
              <p className="text-lg font-bold text-gray-800">HDFC Top 100 Fund</p>
              <div className="grid grid-cols-3 gap-4 mt-3 text-center">
                <p className="p-2">AUM<br/><span className="font-semibold text-gray-800">₹ 30,261.72 Cr.</span></p>
                <p className="p-2">Expense Ratio<br/><span className="font-semibold text-gray-800">1.08%</span></p>
                <p className="p-2">5Y CAGR<br/><span className="flex items-center text-green-600 font-bold"><RiArrowDropUpFill className="text-green-600 font-bold text-xl mr-1"/> 16.88%</span></p>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="flex items-center space-x-3">
              <img src="https://www.dontworkanotherday.com/wp-content/uploads/2022/03/Strong_Returns.png" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Performance</p>
                <p className="text-gray-600">The fund's annualized performance has been 15.3% since inception.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://www.shutterstock.com/image-vector/risk-meter-colorcoded-levels-ranging-600nw-2413034815.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Risk</p>
                <p className="text-gray-600">The fund has been categorized as Very High by SEBI and has a standard deviation of 9.09% vs its category average of<br/>
                9.61%.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://static.vecteezy.com/system/resources/previews/005/720/225/non_2x/colorful-painting-palette-icon-isolated-on-white-background-art-symbol-free-vector.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Composition</p>
                <p className="text-gray-600">Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at<br/>
                22.27%.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fund Categories Section (1/4 width) */}
        <div className="hidden lg:block col-span-1 p-6 rounded-lg h-full">
        </div>

        {/* Fund Details Section (3/4 width) */}
        <div className="col-span-3 bg-gray-300 shadow-md p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <img src="https://static.paytmmoney.com/amc-logo/SBIMF.png" alt="Fund Logo" className="w-16 h-16 bg-gray-300 rounded-lg" />
            <div>
              <p className="text-lg font-bold text-gray-800">SBI BlueChip Fund</p>
              <div className="grid grid-cols-3 gap-4 mt-3 text-center">
                <p className="p-2">AUM<br/><span className="font-semibold text-gray-800">₹ 43,487.36 Cr.</span></p>
                <p className="p-2">Expense Ratio<br/><span className="font-semibold text-gray-800">0.85%</span></p>
                <p className="p-2">5Y CAGR<br/><span className="flex items-center text-green-600 font-bold"><RiArrowDropUpFill className="text-green-600 font-bold text-xl mr-1"/> 16.77%</span></p>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="flex items-center space-x-3">
              <img src="https://www.dontworkanotherday.com/wp-content/uploads/2022/03/Strong_Returns.png" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Performance</p>
                <p className="text-gray-600">The fund's annualized performance has been 15.3% since inception.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://www.shutterstock.com/image-vector/risk-meter-colorcoded-levels-ranging-600nw-2413034815.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Risk</p>
                <p className="text-gray-600">The fund has been categorized as Very High by SEBI and has a standard deviation of 9.09% vs its category average of<br/>
                9.61%.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img src="https://static.vecteezy.com/system/resources/previews/005/720/225/non_2x/colorful-painting-palette-icon-isolated-on-white-background-art-symbol-free-vector.jpg" alt="Performance Icon" className="w-6 h-6 bg-gray-300 rounded-lg" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Composition</p>
                <p className="text-gray-600">Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at<br/>
                22.27%.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Product3;
