import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const Stockschool = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Categories</h1>
        <p className="text-gray-600">Begin your financial market education by exploring a variety of categories.</p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="h-full rounded-lg flex justify-center items-start p-3 bg-white border-1 border-orange-300">
          <div className="w-1/4 h-20 mt-15 rounded-lg flex items-center justify-center mr-5">
            <img src="https://www.hr2eazy.com/images/home/payroll_icon.png" alt="Basic Finance" className="object-cover rounded-lg"/>
          </div>
          <div className="w-full bg-white rounded-lg p-4 flex flex-col">
            <div className="text-start">
                <p className="text-xl font-bold text-gray-800">Basic Finance</p>
                <p className="text-gray-600 mt-2">Learn to manage money, choose<br/> investments wisely, and achieve financial stability.</p>
            </div>
            
            <div className="mt-4 flex justify-between items-center text-gray-700 text-sm">
              <div className="flex items-center">
                <img src="https://ehs.stanford.edu/wp-content/uploads/icon-book.jpg" alt="Book Icon" className="w-4 h-4 mr-2"/> 
                <span>4 Modules</span>
              </div>
              <div className="flex items-center">
                <p className="flex items-center space-x-2">
                  <FaEye className="text-orange-400" />
                  <span>4 Modules</span>
                </p>
              </div>
            </div>

            <hr className="my-2 w-full"/>
            
            <p className="text-blue-600 font-semibold flex items-center justify-end cursor-pointer">
                View Details <MdKeyboardDoubleArrowRight className="ml-1 mt-1"/>
            </p>
          </div>

        </div>

        {/* Card 2 */}
        <div className="h-full rounded-lg flex justify-center items-start p-3 bg-white border-1 border-orange-300">
          <div className="w-1/4 h-16 mt-15 rounded-lg flex items-center justify-center mr-5">
            <img src="https://www.tulasihealthcare.com/wp-content/uploads/2023/07/male.jpg" alt="Basic Finance" className="object-cover rounded-lg"/>
          </div>
          <div className="w-full bg-white rounded-lg p-4 flex flex-col">
            <div className="text-start">
                <p className="text-xl font-bold text-gray-800">Beginners Stock Markets</p>
                <p className="text-gray-600 mt-2">Learn stock market terminologies,<br/>macroeconomic indicators, IPOs and c...<br/>&nbsp;</p>
            </div>
            
            <div className="mt-4 flex justify-between items-center text-gray-700 text-sm">
              <div className="flex items-center">
                <img src="https://ehs.stanford.edu/wp-content/uploads/icon-book.jpg" alt="Book Icon" className="w-4 h-4 mr-2"/> 
                <span>4 Modules</span>
              </div>
              <div className="flex items-center">
                <p className="flex items-center space-x-2">
                  <FaEye className="text-orange-400" />
                  <span>4 Modules</span>
                </p>
              </div>
            </div>
            
            <hr className="my-2 w-full"/>
            
            <p className="text-blue-600 font-semibold flex items-center justify-end cursor-pointer">
                View Details <MdKeyboardDoubleArrowRight className="ml-1 mt-1"/>
            </p>
          </div>

        </div>

        {/* Card 3 */}
        <div className="h-full rounded-lg flex justify-center items-start p-3 bg-white border-1 border-orange-300">
          <div className="w-1/4 h-16 mt-15 rounded-lg flex items-center justify-center mr-5">
            <img src="https://cdn-icons-png.flaticon.com/512/8887/8887718.png" alt="Basic Finance" className="object-cover rounded-lg"/>
          </div>
          <div className="w-full bg-white rounded-lg p-4 flex flex-col">
            <div className="text-start">
                <p className="text-xl font-bold text-gray-800">Stock Investing</p>
                <p className="text-gray-600 mt-2">Explore stock investment basics, analysis<br/>modelling and strategies<br/>&nbsp;</p>
            </div>
            
            <div className="mt-4 flex justify-between items-center text-gray-700 text-sm">
              <div className="flex items-center">
                <img src="https://ehs.stanford.edu/wp-content/uploads/icon-book.jpg" alt="Book Icon" className="w-4 h-4 mr-2"/> 
                <span>4 Modules</span>
              </div>
              <div className="flex items-center">
                <p className="flex items-center space-x-2">
                  <FaEye className="text-orange-400" />
                  <span>4 Modules</span>
                </p>
              </div>
            </div>
            
            <hr className="my-2 w-full"/>
            
            <p className="text-blue-600 font-semibold flex items-center justify-end cursor-pointer">
                View Details <MdKeyboardDoubleArrowRight className="ml-1 mt-1"/>
            </p>
          </div>

        </div>

        {/* Card 4 */}
        <div className="h-full rounded-lg flex justify-center items-start p-3 bg-white border-1 border-orange-300">
          <div className="w-1/4 h-16 mt-15 rounded-lg flex items-center justify-center mr-5">
            <img src="https://cdn-icons-png.flaticon.com/512/8887/8887722.png" alt="Basic Finance" className="object-cover rounded-lg"/>
          </div>
          <div className="w-full bg-white rounded-lg p-4 flex flex-col">
            <div className="text-start">
                <p className="text-xl font-bold text-gray-800">Technical Analysis</p>
                <p className="text-gray-600 mt-2">Explore basic to advanced topics for<br/>effective trading<br/>&nbsp;</p>
            </div>
            
            <div className="mt-4 flex justify-between items-center text-gray-700 text-sm">
              <div className="flex items-center">
                <img src="https://ehs.stanford.edu/wp-content/uploads/icon-book.jpg" alt="Book Icon" className="w-4 h-4 mr-2"/> 
                <span>4 Modules</span>
              </div>
              <div className="flex items-center">
                <p className="flex items-center space-x-2">
                  <FaEye className="text-orange-400" />
                  <span>4 Modules</span>
                </p>
              </div>
            </div>
            
            <hr className="my-2 w-full"/>
            
            <p className="text-blue-600 font-semibold flex items-center justify-end cursor-pointer">
                View Details <MdKeyboardDoubleArrowRight className="ml-1 mt-1"/>
            </p>
          </div>

        </div>

        {/* Card 5 */}
        <div className="h-full rounded-lg flex justify-center items-start p-3 bg-white border-1 border-orange-300">
          <div className="w-1/4 h-16 mt-15 rounded-lg flex items-center justify-center mr-5">
            <img src="https://cdn-icons-png.flaticon.com/512/7169/7169241.png" alt="Basic Finance" className="object-cover rounded-lg"/>
          </div>
          <div className="w-full bg-white rounded-lg p-4 flex flex-col">
            <div className="text-start">
                <p className="text-xl font-bold text-gray-800">Derivatives</p>
                <p className="text-gray-600 mt-2">Become familiar with the principles and<br/>strategies of derivatives trad...<br/>&nbsp;</p>
            </div>
            
            <div className="mt-4 flex justify-between items-center text-gray-700 text-sm">
              <div className="flex items-center">
                <img src="https://ehs.stanford.edu/wp-content/uploads/icon-book.jpg" alt="Book Icon" className="w-4 h-4 mr-2"/> 
                <span>4 Modules</span>
              </div>
              <div className="flex items-center">
                <p className="flex items-center space-x-2">
                  <FaEye className="text-orange-400" />
                  <span>4 Modules</span>
                </p>
              </div>
            </div>
            
            <hr className="my-2 w-full"/>
            
            <p className="text-blue-600 font-semibold flex items-center justify-end cursor-pointer">
                View Details <MdKeyboardDoubleArrowRight className="ml-1 mt-1"/>
            </p>
          </div>

        </div>

        {/* Card 6 */}
        <div className="h-full rounded-lg flex justify-center items-start p-3 bg-white border-1 border-orange-300">
          <div className="w-1/4 h-16 mt-15 rounded-lg flex items-center justify-center mr-5">
            <img src="https://cdn-icons-png.flaticon.com/512/7401/7401382.png" alt="Basic Finance" className="object-cover rounded-lg"/>
          </div>
          <div className="w-full bg-white rounded-lg p-4 flex flex-col">
            <div className="text-start">
                <p className="text-xl font-bold text-gray-800">Mutual Funds</p>
                <p className="text-gray-600 mt-2">Learn important mutual fund concepts for<br/>effective financial planning<br/>&nbsp;</p>
            </div>
            
            <div className="mt-4 flex justify-between items-center text-gray-700 text-sm">
              <div className="flex items-center">
                <img src="https://ehs.stanford.edu/wp-content/uploads/icon-book.jpg" alt="Book Icon" className="w-4 h-4 mr-2"/> 
                <span>4 Modules</span>
              </div>
              <div className="flex items-center">
                <p className="flex items-center space-x-2">
                  <FaEye className="text-orange-400" />
                  <span>4 Modules</span>
                </p>
              </div>
            </div>
            
            <hr className="my-2 w-full"/>
            
            <p className="text-blue-600 font-semibold flex items-center justify-end cursor-pointer">
                View Details <MdKeyboardDoubleArrowRight className="ml-1 mt-1"/>
            </p>
          </div>

        </div>

        {/* Card 7 */}
        <div className="h-full rounded-lg flex justify-center items-start p-3 bg-white border-1 border-orange-300">
          <div className="w-1/4 h-16 mt-15 bg-gray-300 rounded-lg flex items-center justify-center mr-5">
            <img src="https://th.bing.com/th/id/OIP.jPaevfVELGh2VlQFqxLzAQAAAA?rs=1&pid=ImgDetMain" alt="Basic Finance" className="object-cover rounded-lg"/>
          </div>
          <div className="w-full bg-white rounded-lg p-4 flex flex-col">
            <div className="text-start">
                <p className="text-xl font-bold text-gray-800">Banking & Insurance</p>
                <p className="text-gray-600 mt-2">Learn the basics of banking and insurance<br/>for sound financial management...<br/>&nbsp;</p>
            </div>
            
            <div className="mt-4 flex justify-between items-center text-gray-700 text-sm">
              <div className="flex items-center">
                <img src="https://ehs.stanford.edu/wp-content/uploads/icon-book.jpg" alt="Book Icon" className="w-4 h-4 mr-2"/> 
                <span>4 Modules</span>
              </div>
              <div className="flex items-center">
                <p className="flex items-center space-x-2">
                  <FaEye className="text-orange-400" />
                  <span>4 Modules</span>
                </p>
              </div>
            </div>
            
            <hr className="my-2 w-full"/>
            
            <p className="text-blue-600 font-semibold flex items-center justify-end cursor-pointer">
                View Details <MdKeyboardDoubleArrowRight className="ml-1 mt-1"/>
            </p>
          </div>

        </div>

        {/* Card 8 */}
        <div className="h-full rounded-lg flex justify-center items-start p-3 bg-white border-1 border-orange-300">
          <div className="w-1/4 h-16 mt-15 rounded-lg flex items-center justify-center mr-5">
            <img src="https://th.bing.com/th/id/R.cccdc7c238bac087ad7d1bb241bced82?rik=h%2bOmRDwtdJUcRw&riu=http%3a%2f%2fwww.geninsindia.com%2fassets%2fimages%2ficon%2fsettlement_letter.png&ehk=aCvREyigSdutOUDNtBMu3Jn8vL1CWmV0dAwIwgDYcHQ%3d&risl=&pid=ImgRaw&r=0" alt="Basic Finance" className="object-cover rounded-lg"/>
          </div>
          <div className="w-full bg-white rounded-lg p-4 flex flex-col">
            <div className="text-start">
                <p className="text-xl font-bold text-gray-800">Financial Planning</p>
                <p className="text-gray-600 mt-2">Learn about thorough financial planning<br/>strategies and services<br/>&nbsp;</p>
            </div>
            
            <div className="mt-4 flex justify-between items-center text-gray-700 text-sm">
              <div className="flex items-center">
                <img src="https://ehs.stanford.edu/wp-content/uploads/icon-book.jpg" alt="Book Icon" className="w-4 h-4 mr-2"/> 
                <span>4 Modules</span>
              </div>
              <div className="flex items-center">
                <p className="flex items-center space-x-2">
                  <FaEye className="text-orange-400" />
                  <span>4 Modules</span>
                </p>
              </div>
            </div>
            
            <hr className="my-2 w-full"/>
            
            <p className="text-blue-600 font-semibold flex items-center justify-end cursor-pointer">
                View Details <MdKeyboardDoubleArrowRight className="ml-1 mt-1"/>
            </p>
          </div>

        </div>

        {/* Card 9 */}
        <div className="h-full rounded-lg flex justify-center items-start p-3 bg-white border-1 border-orange-300">
          <div className="w-1/4 h-16 mt-15 rounded-lg flex items-center justify-center mr-5">
            <img src="https://cdn-icons-png.flaticon.com/512/10704/10704351.png" alt="Basic Finance" className="object-cover rounded-lg"/>
          </div>
          <div className="w-full bg-white rounded-lg p-4 flex flex-col">
            <div className="text-start">
                <p className="text-xl font-bold text-gray-800">Cryptocurrency</p>
                <p className="text-gray-600 mt-2">Gain insights into the world of<br/>cryptocurrencies and blockchain<br/>&nbsp;</p>
            </div>
            
            <div className="mt-4 flex justify-between items-center text-gray-700 text-sm">
              <div className="flex items-center">
                <img src="https://ehs.stanford.edu/wp-content/uploads/icon-book.jpg" alt="Book Icon" className="w-4 h-4 mr-2"/> 
                <span>4 Modules</span>
              </div>
              <div className="flex items-center">
                <p className="flex items-center space-x-2">
                  <FaEye className="text-orange-400" />
                  <span>4 Modules</span>
                </p>
              </div>
            </div>
            
            <hr className="my-2 w-full"/>
            
            <p className="text-blue-600 font-semibold flex items-center justify-end cursor-pointer">
                View Details <MdKeyboardDoubleArrowRight className="ml-1 mt-1"/>
            </p>
          </div>

        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-screen-md w-full">
            {/* Card 1 */}
            <div className="h-full rounded-lg flex justify-center items-start p-3 bg-white border-1 border-orange-300">
              <div className="w-1/4 h-16 mt-15 rounded-lg flex items-center justify-center mr-5">
                <img src="https://cdn-icons-png.flaticon.com/512/8887/8887722.png" alt="Basic Finance" className="object-cover rounded-lg"/>
              </div>
              <div className="w-full bg-white rounded-lg p-4 flex flex-col">
                <div className="text-start">
                    <p className="text-xl font-bold text-gray-800">Alternative Investments</p>
                    <p className="text-gray-600 mt-2">Explore various alternative investments<br/>like debt, commodity, gold, ...<br/>&nbsp;</p>
                </div>
                
                <div className="mt-4 flex justify-between items-center text-gray-700 text-sm">
                  <div className="flex items-center">
                    <img src="https://ehs.stanford.edu/wp-content/uploads/icon-book.jpg" alt="Book Icon" className="w-4 h-4 mr-2"/> 
                    <span>4 Modules</span>
                  </div>
                  <div className="flex items-center">
                    <p className="flex items-center space-x-2">
                      <FaEye className="text-orange-400" />
                      <span>4 Modules</span>
                    </p>
                  </div>
                </div>
                
                <hr className="my-2 w-full"/>
                
                <p className="text-blue-600 font-semibold flex items-center justify-end cursor-pointer">
                    View Details <MdKeyboardDoubleArrowRight className="ml-1 mt-1"/>
                </p>
              </div>

            </div>

            {/* Card 2 */}
            <div className="h-full rounded-lg flex justify-center items-start p-3 bg-white border-1 border-orange-300">
              <div className="w-1/4 h-16 mt-15 rounded-lg flex items-center justify-center mr-5">
                <img src="https://i.pinimg.com/originals/8a/8c/9e/8a8c9eb2de7de6826efacd6841ff1325.png" alt="Basic Finance" className="object-cover rounded-lg"/>
              </div>
              <div className="w-full bg-white rounded-lg p-4 flex flex-col">
                <div className="text-start">
                    <p className="text-xl font-bold text-gray-800">Book Summary</p>
                    <p className="text-gray-600 mt-2">Get summaries of popular finance books<br/>&nbsp;<br/>&nbsp;</p>
                </div>
                
                <div className="mt-4 flex justify-between items-center text-gray-700 text-sm">
                  <div className="flex items-center">
                    <img src="https://ehs.stanford.edu/wp-content/uploads/icon-book.jpg" alt="Book Icon" className="w-4 h-4 mr-2"/> 
                    <span>4 Modules</span>
                  </div>
                  <div className="flex items-center">
                    <p className="flex items-center space-x-2">
                      <FaEye className="text-orange-400" />
                      <span>4 Modules</span>
                    </p>
                  </div>
                </div>
                
                <hr className="my-2 w-full"/>
                
                <p className="text-blue-600 font-semibold flex items-center justify-end cursor-pointer">
                    View Details <MdKeyboardDoubleArrowRight className="ml-1 mt-1"/>
                </p>
              </div>

            </div>
        </div>
        </div>

    </div>
  );
};

export default Stockschool;
