import React from "react";
import CoinCard from "./CoinCard";
import AboutBitcoinSection from "./AboutBitcoinSection";
import TokenomicsSection from "./TokennmicsSection";
import TeamSection from "./TeamSection";

const HomePage = () => {
  const youMayAlsoLike = [
    { coin: "BNB", price: 319.34, percentageChange: 0.52 },
    { coin: "SOL", price: 109.33, percentageChange: -2.89 },
    { coin: "XRP", price: 0.63481, percentageChange: 0.78 },
    { coin: "ADA", price: 0.61487, percentageChange: 1.57 },
    { coin: "AVAX", price: 41.05, percentageChange: -3.7 },
  ];

  const trendingCoins = [
    { coin: "BTC", price: 45332.83, percentageChange: 0.1 },
    { coin: "ETH", price: 2375.15, percentageChange: 0 },
    { coin: "stETH", price: 2371.72, percentageChange: -0.34 },
    { coin: "UNI", price: 7.3192, percentageChange: -4.02 },
    { coin: "CFG", price: 0.7736, percentageChange: 1.76 },
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      {/* You May Also Like Section */}
      <section aria-labelledby="you-may-also-like">
        <h2
          id="you-may-also-like"
          className="text-2xl font-bold text-white mb-4">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {youMayAlsoLike.map((coin) => (
            <CoinCard
              key={coin.coin}
              coin={coin.coin}
              price={coin.price}
              percentageChange={coin.percentageChange}
            />
          ))}
        </div>
      </section>

      {/* Trending Coins Section */}
      <section aria-labelledby="trending-coins" className="mt-8">
        <h2 id="trending-coins" className="text-2xl font-bold text-white mb-4">
          Trending Coins
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trendingCoins.map((coin) => (
            <CoinCard
              key={coin.coin}
              coin={coin.coin}
              price={coin.price}
              percentageChange={coin.percentageChange}
            />
          ))}
        </div>
      </section>

      {/* About Bitcoin Section */}
      <AboutBitcoinSection />

      {/* Tokenomics Section */}
      <TokenomicsSection />

      {/* Team Section */}
      <TeamSection />
    </div>
  );
};

export default HomePage;
