import React from "react";

const CoinCard = ({ coin, price = 0, percentageChange = 0 }) => {
  const logoPath = `./${coin.toLowerCase()}-logo.svg`; // Ensure proper path or use actual paths

  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
      <div className="flex items-center">
        <img
          src={logoPath}
          alt={`${coin} logo`}
          className="w-8 h-8 mr-2"
          onError={(e) => (e.target.src = "/placeholder-logo.svg")} // Fallback for missing images
        />
        <span className="text-white">{coin}</span>
        <span
          className={`text-sm ml-1 ${
            percentageChange > 0 ? "text-green-500" : "text-red-500"
          }`}>
          {percentageChange > 0 ? "+" : ""}
          {percentageChange}%
        </span>
      </div>
      <p className="text-lg font-semibold text-white mt-2">
        ${price.toFixed(2)}
      </p>
    </div>
  );
};

export default CoinCard;
