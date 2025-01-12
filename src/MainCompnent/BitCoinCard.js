import React from "react";

const BitcoinCard = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">About Bitcoin</h2>

      <div className="flex items-center mb-4">
        <p className="text-lg font-semibold">Bitcoin's price today:</p>
        <span className="text-green-500 ml-2">$16,951.82</span>
      </div>

      <p className="text-gray-600 mb-4">
        Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>

      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
      </p>

      <p className="text-gray-600 mb-4">
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque autor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros, donec cursus nunc. Mauris faucibus diam mi nunc
        praesent massa turpis a. Integer dignissim augue viverra nulla et quis
        lobortis phasellus. Integer pellentesque enim convallis ultricies at.
      </p>

      <p className="text-gray-600 mb-4">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>

      <h2 className="text-2xl font-bold mb-4">Already Holding Bitcoin?</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* First Card */}
        <div className="bg-blue-500 text-white rounded-lg p-4 flex items-center">
          <img
            src="https://motionbgs.com/media/5337/golden-bitcoin.jpg"
            alt="Golden Bitcoin"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">Calculate your Profits</h3>
            <button className="mt-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2">
              Check Now
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-green-500 text-white rounded-lg p-4 flex items-center">
          <img
            src="https://motionbgs.com/media/5337/golden-bitcoin.jpg"
            alt="Golden Bitcoin"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">
              Calculate your Tax Liability
            </h3>
            <button className="mt-2 bg-green-700 hover:bg-green-800 text-white rounded-md px-4 py-2">
              Check Now
            </button>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mt-6">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
};

export default BitcoinCard;
