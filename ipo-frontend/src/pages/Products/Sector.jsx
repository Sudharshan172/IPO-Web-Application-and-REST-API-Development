const Product2 = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* Sector Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Sector</h1>
        <p className="text-gray-600">Go to your favourite sector and analyse it in detail.</p>
      </div>

      {/* Search Section */}
      <div className="flex flex-col justify-end items-end text-center p-4 mb-6">
        <p className="text-gray-700 text-center mr-8 mb-3">Search for a sector</p>
        <input type="text" placeholder="Enter sector name..." className="border border-gray-300 rounded p-2 w-full md:w-auto" />
      </div>

      {/* Sector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-gradient-to-b from-sky-300 to-white rounded-lg p-4 flex flex-col items-center border-1">
          <div className="bg-blue-500 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mb-3">A</div>
          <p className="font-bold text-gray-800">Abrasives</p>
          <p className="text-gray-600 text-center">The one that scraps away all inconsistencies.</p>

          <div className="mt-8 w-full p-3 rounded-lg flex flex-col justify-center items-center">
            <button className="text-blue-600 font-medium text-center bg-green-300 p-2 rounded-2xl">3 Listed Companies</button>
            <div className="grid grid-cols-4 gap-2 mt-5">
              <p className="p-2 rounded text-center">MICRO<br />1</p>
              <p className="p-2 rounded text-center">SMALL<br />2</p>
              <p className="p-2 rounded text-center">MID<br />0</p>
              <p className="p-2 rounded text-center">LARGE<br />0</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Details</button>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-b from-sky-300 to-white rounded-lg p-4 flex flex-col items-center border-1">
          <div className="bg-blue-500 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mb-3">A</div>
          <p className="font-bold text-gray-800">Advertising & Media</p>
          <p className="text-gray-600 text-center">The one that creates and distributes<br/>media content.</p>

          <div className="mt-8 w-full p-3 rounded-lg flex flex-col justify-center items-center">
            <button className="text-blue-600 font-medium text-center bg-green-300 p-2 rounded-2xl">10 Listed Companies</button>
            <div className="grid grid-cols-4 gap-2 mt-5">
              <p className="p-2 rounded text-center">MICRO<br />8</p>
              <p className="p-2 rounded text-center">SMALL<br />2</p>
              <p className="p-2 rounded text-center">MID<br />0</p>
              <p className="p-2 rounded text-center">LARGE<br />0</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Details</button>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-b from-sky-300 to-white rounded-lg p-4 flex flex-col items-center border-1">
          <div className="bg-blue-500 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mb-3">A</div>
          <p className="font-bold text-gray-800">Agriculture</p>
          <p className="text-gray-600 text-center">The one that gives us vegetables and fruits to eat.</p>

          <div className="mt-8 w-full p-3 rounded-lg flex flex-col justify-center items-center">
            <button className="text-blue-600 font-medium text-center bg-green-300 p-2 rounded-2xl">41 Listed Companies</button>
            <div className="grid grid-cols-4 gap-2 mt-5">
              <p className="p-2 rounded text-center">MICRO<br />38</p>
              <p className="p-2 rounded text-center">SMALL<br />4</p>
              <p className="p-2 rounded text-center">MID<br />1</p>
              <p className="p-2 rounded text-center">LARGE<br />0</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Details</button>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-b from-sky-300 to-white rounded-lg p-4 flex flex-col items-center border-1">
          <div className="bg-blue-500 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mb-3">A</div>
          <p className="font-bold text-gray-800">Air Conditioners</p>
          <p className="text-gray-600 text-center">The one that's keeps it cool with<br/> no noise.</p>

          <div className="mt-8 w-full p-3 rounded-lg flex flex-col justify-center items-center">
            <button className="text-blue-600 font-medium text-center bg-green-300 p-2 rounded-2xl">5 Listed Companies</button>
            <div className="grid grid-cols-4 gap-2 mt-5">
              <p className="p-2 rounded text-center">MICRO<br />1</p>
              <p className="p-2 rounded text-center">SMALL<br />1</p>
              <p className="p-2 rounded text-center">MID<br />2</p>
              <p className="p-2 rounded text-center">LARGE<br />1</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Details</button>
        </div>

        <div className="bg-gradient-to-b from-sky-300 to-white rounded-lg p-4 flex flex-col items-center border-1">
          <div className="bg-blue-500 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mb-3">A</div>
          <p className="font-bold text-gray-800">Airlines<br/>&nbsp;</p>
          <p className="text-gray-600 text-center">The one that takes us around the<br/>world in the shortest time.</p>

          <div className="mt-8 w-full p-3 rounded-lg flex flex-col justify-center items-center">
            <button className="text-blue-600 font-medium text-center bg-green-300 p-2 rounded-2xl">6 Listed Companies</button>
            <div className="grid grid-cols-4 gap-2 mt-5">
              <p className="p-2 rounded text-center">MICRO<br />2</p>
              <p className="p-2 rounded text-center">SMALL<br />3</p>
              <p className="p-2 rounded text-center">MID<br />0</p>
              <p className="p-2 rounded text-center">LARGE<br />1</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Details</button>
        </div>

        <div className="bg-gradient-to-b from-sky-300 to-white rounded-lg p-4 flex flex-col items-center border-1">
          <div className="bg-blue-500 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mb-3">A</div>
          <p className="font-bold text-center text-gray-800">Aluminium & Aluminium<br/>Products</p>
          <p className="text-gray-600 text-center">The one that can wrap up almost<br/>everything.</p>

          <div className="mt-8 w-full p-3 rounded-lg flex flex-col justify-center items-center">
            <button className="text-blue-600 font-medium text-center bg-green-300 p-2 rounded-2xl">18 Listed Companies</button>
            <div className="grid grid-cols-4 gap-2 mt-5">
              <p className="p-2 rounded text-center">MICRO<br />14</p>
              <p className="p-2 rounded text-center">SMALL<br />3</p>
              <p className="p-2 rounded text-center">MID<br />1</p>
              <p className="p-2 rounded text-center">LARGE<br />0</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Details</button>
        </div>

        <div className="bg-gradient-to-b from-sky-300 to-white rounded-lg p-4 flex flex-col items-center border-1">
          <div className="bg-blue-500 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mb-3">A</div>
          <p className="font-bold text-gray-800 text-center">Amusement Parks/<br/>Recreation/Club</p>
          <p className="text-gray-600 text-center">The one that's all about the fun<br/>stuff and food.</p>

          <div className="mt-8 w-full p-3 rounded-lg flex flex-col justify-center items-center">
            <button className="text-blue-600 font-medium text-center bg-green-300 p-2 rounded-2xl">4 Listed Companies</button>
            <div className="grid grid-cols-4 gap-2 mt-5">
              <p className="p-2 rounded text-center">MICRO<br />1</p>
              <p className="p-2 rounded text-center">SMALL<br />2</p>
              <p className="p-2 rounded text-center">MID<br />1</p>
              <p className="p-2 rounded text-center">LARGE<br />0</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Details</button>
        </div>

        <div className="bg-gradient-to-b from-sky-300 to-white rounded-lg p-4 flex flex-col items-center border-1">
          <div className="bg-blue-500 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mb-3">A</div>
          <p className="font-bold text-gray-800">Aquaculture<br/>&nbsp;</p>
          <p className="text-gray-600 text-center">The one that care of aquatic<br/>animals.</p>

          <div className="mt-8 w-full p-3 rounded-lg flex flex-col justify-center items-center">
            <button className="text-blue-600 font-medium text-center bg-green-300 p-2 rounded-2xl">8 Listed Companies</button>
            <div className="grid grid-cols-4 gap-2 mt-5">
              <p className="p-2 rounded text-center">MICRO<br />7</p>
              <p className="p-2 rounded text-center">SMALL<br />1</p>
              <p className="p-2 rounded text-center">MID<br />0</p>
              <p className="p-2 rounded text-center">LARGE<br />0</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Details</button>
        </div>

        <div className="bg-gradient-to-b from-sky-300 to-white rounded-lg p-4 flex flex-col items-center border-1">
          <div className="bg-blue-500 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mb-3">A</div>
          <p className="font-bold text-gray-800">Auto Ancillary<br/>&nbsp;</p>
          <p className="text-gray-600 text-center">The one that provide parts to<br/>keep our vehicles running.</p>

          <div className="mt-8 w-full p-3 rounded-lg flex flex-col justify-center items-center">
            <button className="text-blue-600 font-medium text-center bg-green-300 p-2 rounded-2xl">95 Listed Companies</button>
            <div className="grid grid-cols-4 gap-2 mt-5">
              <p className="p-2 rounded text-center">MICRO<br />42</p>
              <p className="p-2 rounded text-center">SMALL<br />27</p>
              <p className="p-2 rounded text-center">MID<br />21</p>
              <p className="p-2 rounded text-center">LARGE<br />5</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Details</button>
        </div>

        <div className="bg-gradient-to-b from-sky-300 to-white rounded-lg p-4 flex flex-col items-center border-1">
          <div className="bg-blue-500 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mb-3">A</div>
          <p className="font-bold text-gray-800 text-center">Automobiles Two & Three<br/>Wheelers</p>
          <p className="text-gray-600 text-center">The one that suits couples and<br/>smaller groups.</p>

          <div className="mt-8 w-full p-3 rounded-lg flex flex-col justify-center items-center">
            <button className="text-blue-600 font-medium text-center bg-green-300 p-2 rounded-2xl">71 Listed Companies</button>
            <div className="grid grid-cols-4 gap-2 mt-5">
              <p className="p-2 rounded text-center">MICRO<br />1</p>
              <p className="p-2 rounded text-center">SMALL<br />2</p>
              <p className="p-2 rounded text-center">MID<br />0</p>
              <p className="p-2 rounded text-center">LARGE<br />4</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Details</button>
        </div>

        <div className="bg-gradient-to-b from-sky-300 to-white rounded-lg p-4 flex flex-col items-center border-1">
          <div className="bg-blue-500 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mb-3">A</div>
          <p className="font-bold text-gray-800 text-center">Automobiles - Dealers &<br/>Distributors</p>
          <p className="text-gray-600 text-center">The one that makes cars and<br/>buses availables to public.</p>

          <div className="mt-8 w-full p-3 rounded-lg flex flex-col justify-center items-center">
            <button className="text-blue-600 font-medium text-center bg-green-300 p-2 rounded-2xl">4 Listed Companies</button>
            <div className="grid grid-cols-4 gap-2 mt-5">
              <p className="p-2 rounded text-center">MICRO<br />2</p>
              <p className="p-2 rounded text-center">SMALL<br />2</p>
              <p className="p-2 rounded text-center">MID<br />0</p>
              <p className="p-2 rounded text-center">LARGE<br />0</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Details</button>
        </div>
        
        <div className="bg-gradient-to-b from-sky-300 to-white rounded-lg p-4 flex flex-col items-center border-1">
          <div className="bg-blue-500 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mb-3">A</div>
          <p className="font-bold text-gray-800 text-center">Automobiles - Passengers<br/>Cars</p>
          <p className="text-gray-600 text-center">The one that lets families travel<br/>together comfortably.</p>

          <div className="mt-8 w-full p-3 rounded-lg flex flex-col justify-center items-center">
            <button className="text-blue-600 font-medium text-center bg-green-300 p-2 rounded-2xl">4 Listed Companies</button>
            <div className="grid grid-cols-4 gap-2 mt-5">
              <p className="p-2 rounded text-center">MICRO<br />1</p>
              <p className="p-2 rounded text-center">SMALL<br />1</p>
              <p className="p-2 rounded text-center">MID<br />0</p>
              <p className="p-2 rounded text-center">LARGE<br />2</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Product2;
