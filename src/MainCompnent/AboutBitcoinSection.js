import React from "react";

function AboutBitcoinSection() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">About Bitcoin</h2>

      <div>
        <h3 className="text-lg font-semibold mb-2">What is Bitcoin?</h3>
        <p className="text-gray-700">
          Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
          of $19.14B. BTC is <span className="text-green-600">+0.36%</span> in
          the last 24 hours. It is currently
          <span className="text-red-600"> -7.70%</span> from its 7-day all-time
          high of $18,366.66, and
          <span className="text-green-600"> 3.40%</span> from its 7-day all-time
          low of $16,394.75. BTC has a circulating supply of 19.24M BTC and a
          max supply of 21M BTC.
        </p>
      </div>

      {/* Additional sections can go here */}
    </div>
  );
}

export default AboutBitcoinSection;
