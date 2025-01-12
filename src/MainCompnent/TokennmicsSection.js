import React from "react";

const TokenomicsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Tokenomics</h2>

      <div className="flex items-center mb-4">
        <svg
          width="100"
          height="100"
          role="img"
          aria-label="Tokenomics Distribution">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#007bff"
            strokeWidth="10"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#ffb703"
            strokeWidth="10"
            strokeDasharray="251.2 251.2"
            strokeDashoffset="125.6"
          />
        </svg>

        <div className="ml-4">
          <div className="flex items-center mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            <span>Crowdsale Investors: 80%</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
            <span>Foundation: 20%</span>
          </div>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu. Fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
        urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum
        amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in
        at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget
        arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
};

export default TokenomicsSection;
