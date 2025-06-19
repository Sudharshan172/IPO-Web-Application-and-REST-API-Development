import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Blog = () => {
  const ITEMS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4 // Adjust total items dynamically

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls back to top
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold text-4xl p-5 mb-5">Bluestock Blog</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {currentPage === 1 && (
          <>
            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Top Reasons for Life Insurance<br/>Claim Rejection</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">04 January 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best PSU Stocks in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Banking & Financial Services<br/>Fund</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">10 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7 min read</p>
              </div>
            </div>

            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">INOX India IPO - Everything You<br/>Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">11 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Types of Banking Frauds - How to<br/>Prevent Them</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">08 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Popular Finance Podcasts<br/> in India</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">30 November 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 min read</p>
              </div>
            </div>

            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Gandhar Oil Refinery IPO - Everything<br/>You Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">21 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">IREDA IPO - Everything<br/> You Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Tata Technologies IPO - Everything<br/>You Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best Pet Insurance Policies in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">03 November 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best Fintech Stocks in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">27 October 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best Stocks under Rs.5 in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 October 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>
          </>
        )}

        {currentPage === 2 && (
          <>
            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Top Reasons for Life Insurance<br/>Claim Rejection</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">04 January 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best PSU Stocks in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Banking & Financial Services<br/>Fund</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">10 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7 min read</p>
              </div>
            </div>

            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">INOX India IPO - Everything You<br/>Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">11 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Types of Banking Frauds - How to<br/>Prevent Them</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">08 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Popular Finance Podcasts<br/> in India</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">30 November 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 min read</p>
              </div>
            </div>

            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Gandhar Oil Refinery IPO - Everything<br/>You Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">21 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">IREDA IPO - Everything<br/> You Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Tata Technologies IPO - Everything<br/>You Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best Pet Insurance Policies in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">03 November 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best Fintech Stocks in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">27 October 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best Stocks under Rs.5 in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 October 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>
          </>
        )}

        {currentPage === 3 && (
          <>
            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Top Reasons for Life Insurance<br/>Claim Rejection</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">04 January 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best PSU Stocks in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Banking & Financial Services<br/>Fund</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">10 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7 min read</p>
              </div>
            </div>

            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">INOX India IPO - Everything You<br/>Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">11 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Types of Banking Frauds - How to<br/>Prevent Them</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">08 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Popular Finance Podcasts<br/> in India</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">30 November 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 min read</p>
              </div>
            </div>

            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Gandhar Oil Refinery IPO - Everything<br/>You Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">21 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">IREDA IPO - Everything<br/> You Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Tata Technologies IPO - Everything<br/>You Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best Pet Insurance Policies in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">03 November 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best Fintech Stocks in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">27 October 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best Stocks under Rs.5 in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 October 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>
          </>
        )}

        {currentPage === 4 && (
          <>
            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Top Reasons for Life Insurance<br/>Claim Rejection</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">04 January 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best PSU Stocks in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Banking & Financial Services<br/>Fund</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">10 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7 min read</p>
              </div>
            </div>

            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">INOX India IPO - Everything You<br/>Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">11 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Types of Banking Frauds - How to<br/>Prevent Them</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">08 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Popular Finance Podcasts<br/> in India</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">30 November 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 min read</p>
              </div>
            </div>

            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Gandhar Oil Refinery IPO - Everything<br/>You Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">21 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">IREDA IPO - Everything<br/> You Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Tata Technologies IPO - Everything<br/>You Must Know</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 December 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min read</p>
              </div>
            </div>

            {/* Box 1 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best Pet Insurance Policies in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">03 November 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best Fintech Stocks in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">27 October 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white flex flex-col items-center rounded-lg">
              <div className="bg-violet-500 h-50 w-full"></div>
              <div className="text-center bg-gray-200 w-full h-28">
                <p className="font-bold text-gray-800 mt-3">Best Stocks under Rs.5 in India<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <hr className="text-gray-500 mt-2" />
                <p className="text-gray-500 mt-2">20 October 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 min read</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-6 space-x-2 items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="p-2 rounded-md bg-gray-300 hover:bg-gray-400"
        >
          <IoIosArrowBack />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="p-2 rounded-md bg-gray-300 hover:bg-gray-400"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Blog;
