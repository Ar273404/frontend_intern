import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";

function BitcoinPerformance() {
  const [bitcoinPrice, setBitcoinPrice] = useState(16815.46);
  const [marketCap, setMarketCap] = useState(323507290047);
  const [marketCapDominance, setMarketCapDominance] = useState(38.343);
  const [volumeMarketCap, setVolumeMarketCap] = useState(0.0718);
  const [tradingVolume, setTradingVolume] = useState(23249202782);
  const [allTimeHigh, setAllTimeHigh] = useState(69044.77);
  const [allTimeLow, setAllTimeLow] = useState(67.81);

  // Sample percentage for progress bars (adjust based on real data)
  const todayLowHighProgress =
    ((49343.83 - 46930.22) / (49343.83 - 46930.22)) * 100; // Progress from low to high
  const weekLowHighProgress =
    ((49743.83 - 46930.22) / (49743.83 - 46930.22)) * 100; // Sample progress for 52W

  return (
    <div className="bg-white p-2 rounded-lg shadow-md mx-10 my-10">
      <div className="text-xl font-bold mb-1">Performance</div>

      <div className="flex justify-between mb-1">
        <div>
          <span className="text-gray-600">Today's Low</span>
          <p className="font-semibold">46,930.22</p>
        </div>
        <div className="w-full">
          <ProgressBar
            now={todayLowHighProgress}
            variant="danger"
            className="mb-2"
            style={{ height: "7px", width: "100%" }} // Adjust width and height as needed
          />
        </div>

        <div>
          <span className="text-gray-600">Today's High</span>
          <p className="font-semibold">49,343.83</p>
        </div>
      </div>

      <div className="flex justify-between mb-1">
        <div>
          <span className="text-gray-600">52W Low</span>
          <p className="font-semibold">16,930.22</p>
        </div>
        <div className="w-full">
          <ProgressBar
            now={weekLowHighProgress}
            variant="success"
            className="mb-2"
            style={{ height: "7px", width: "100%" }} // Adjust width and height as needed
          />
        </div>
        <div>
          <span className="text-gray-600">52W High</span>
          <p className="font-semibold">49,743.83</p>
        </div>
      </div>

      <div className="text-xl font-bold mt-3 mb-1">Fundamentals</div>

      <div className="grid grid-cols-2 gap-1">
        <div>
          <span className="text-gray-600">Bitcoin Price</span>
          <p className="font-semibold">${bitcoinPrice.toFixed(2)}</p>
          <hr />
        </div>
        <div>
          <span className="text-gray-600">Market Cap</span>
          <p className="font-semibold">${marketCap.toLocaleString()}</p>
          <hr />
        </div>

        <div>
          <span className="text-gray-600">24h Low / 24h High</span>
          <p className="font-semibold">$16,382.07 / $16,874.12</p>
          <hr />
        </div>
        <div>
          <span className="text-gray-600">Market Cap Dominance</span>
          <p className="font-semibold">{marketCapDominance}%</p>
          <hr />
        </div>

        <div>
          <span className="text-gray-600">7d Low / 7d High</span>
          <p className="font-semibold">$16,382.07 / $16,874.12</p>
          <hr />
        </div>
        <div>
          <span className="text-gray-600">Volume / Market Cap</span>
          <p className="font-semibold">{volumeMarketCap}</p>
          <hr />
        </div>

        <div>
          <span className="text-gray-600">Trading Volume</span>
          <p className="font-semibold">${tradingVolume.toLocaleString()}</p>
          <hr />
        </div>
        <div>
          <span className="text-gray-600">All-Time High</span>
          <p className="font-semibold">
            ${allTimeHigh} (
            {(((bitcoinPrice - allTimeHigh) / allTimeHigh) * 100).toFixed(2)}%)
          </p>
          <hr />
        </div>

        <div>
          <span className="text-gray-600">Market Cap Rank</span>
          <p className="font-semibold">#1</p>
          <hr />
        </div>
        <div>
          <span className="text-gray-600">All-Time Low</span>
          <p className="font-semibold">
            ${allTimeLow} (
            {(((bitcoinPrice - allTimeLow) / allTimeLow) * 100).toFixed(2)}%)
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default BitcoinPerformance;
