import React from "react";

const Sentiment = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="text-xl font-bold mb-4">Sentiment</div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Key Events</h3>
          <ul className="list-disc list-inside">
            <li>
              Lorem ipsum dolor sit amet consectetur. Duis vel quis dignissim
              mattis enim tincidunt.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
              faucibus metus quis. Amet sapien nunc viverra adipiscing
              condimentum. Ac congue et pretium in a bibendum in. Sed vitae sit
              nisi viverra natoque lacinia libero enim.
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2.25m0-4.12c0 1.16.806 2.058 1.872 2.058.672 0 1.23-.455 1.872-1.066a2.058 2.058 0 011.872-2.058M9 13.5a3 3 0 116 0 3 3 0 01-6 0z"
              />
            </svg>
            <h3 className="text-lg font-semibold">Key Events</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Duis vel quis dignissim
            mattis enim tincidunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
            faucibus metus quis. Amet sapien nunc viverra adipiscing
            condimentum. Ac congue et pretium in a bibendum in. Sed vitae sit
            nisi viverra natoque lacinia libero enim.
          </p>
        </div>
      </div>

      <div className="text-xl font-bold mt-4 mb-4">Analyst Estimates</div>

      {/* Buy Progress Bar */}
      <div className="progress mb-2">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "76%" }}
          aria-valuenow="76"
          aria-valuemin="0"
          aria-valuemax="100">
          76%
        </div>
      </div>

      {/* Hold Progress Bar */}
      <div className="progress mb-2">
        <div
          className="progress-bar bg-light"
          role="progressbar"
          style={{ width: "8%" }}
          aria-valuenow="8"
          aria-valuemin="0"
          aria-valuemax="100">
          8%
        </div>
      </div>

      {/* Sell Progress Bar */}
      <div className="progress">
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: "16%" }}
          aria-valuenow="16"
          aria-valuemin="0"
          aria-valuemax="100">
          16%
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div>
          <span className="text-green-500 font-semibold">Buy</span>
          <p>76%</p>
        </div>
        <div>
          <span className="text-gray-500 font-semibold">Hold</span>
          <p>8%</p>
        </div>
        <div>
          <span className="text-red-500 font-semibold">Sell</span>
          <p>16%</p>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
