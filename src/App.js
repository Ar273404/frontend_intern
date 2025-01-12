// import React, { useState, useEffect } from "react";

// function App() {
//   const [gridSize, setGridSize] = useState({ rows: 15, cols: 20 });
//   const [rain, setRain] = useState([]);

//   // Define available colors for raindrops
//   const colors = ["#4299e1", "#48bb78", "#ed8936", "#f56565", "#805ad5"];

//   // Initialize the grid
//   useEffect(() => {
//     generateRain();
//   }, [gridSize]);

//   const generateRain = () => {
//     const newRain = Array.from({ length: gridSize.rows }, () =>
//       Array.from({ length: gridSize.cols }, () => ({
//         active: false,
//         color: getRandomColor(),
//       }))
//     );
//     setRain(newRain);
//   };

//   const getRandomColor = () => {
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   // Simulate falling rain and color change
//   useEffect(() => {
//     const rainInterval = setInterval(() => {
//       setRain((prevRain) =>
//         prevRain.map((row, rowIndex) =>
//           row.map((cell, colIndex) => {
//             if (rowIndex === 0) {
//               // Add a new raindrop at the top
//               return Math.random() > 0.8
//                 ? { ...cell, active: true, color: getRandomColor() }
//                 : { ...cell, active: false };
//             }
//             // Move raindrops down
//             return prevRain[rowIndex - 1][colIndex];
//           })
//         )
//       );
//     }, 200);

//     const colorInterval = setInterval(() => {
//       setRain((prevRain) =>
//         prevRain.map((row) =>
//           row.map((cell) => ({
//             ...cell,
//             color: cell.active ? getRandomColor() : cell.color,
//           }))
//         )
//       );
//     }, 500); // Change color every 500ms

//     return () => {
//       clearInterval(rainInterval);
//       clearInterval(colorInterval);
//     };
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-extrabold mb-6 text-black text-center">
//         Falling Rain Grid with Changing Colors - Arun Yadav
//       </h1>
//       <div
//         className="grid"
//         style={{
//           display: "grid",
//           gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
//           gap: "1px", // Adds a shared border effect
//           backgroundColor: "black", // Common border background
//         }}>
//         {rain.map((row, rowIndex) =>
//           row.map((cell, colIndex) => (
//             <div
//               key={`${rowIndex}-${colIndex}`}
//               style={{
//                 width: "30px", // Adjust cell size as needed
//                 height: "30px",
//                 backgroundColor: cell.active ? cell.color : "black",
//                 border: "2px solid gray", // Common border for all cells
//                 position: "relative",
//                 transition: "background-color 0.3s ease", // Smooth color transition
//               }}></div>
//           ))
//         )}
//       </div>
//       <div className="mt-4">
//         <label
//           htmlFor="rows"
//           className="block text-sm font-medium text-gray-700">
//           Rows:
//         </label>
//         <input
//           type="number"
//           id="rows"
//           value={gridSize.rows}
//           onChange={(e) =>
//             setGridSize({ ...gridSize, rows: parseInt(e.target.value) })
//           }
//           className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//         />
//         <label
//           htmlFor="cols"
//           className="block text-sm font-medium text-gray-700 mt-2">
//           Columns:
//         </label>
//         <input
//           type="number"
//           id="cols"
//           value={gridSize.cols}
//           onChange={(e) =>
//             setGridSize({ ...gridSize, cols: parseInt(e.target.value) })
//           }
//           className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
// import Navbar from "./Component/Navbar";
// import LeftSidebar from "./Component/LeftSidebar";
// import RightSidebar from "./Component/RightSidebar";
// import MiddleSection from "./Component/MiddleSection";
import HomePage from "./MainCompnent/HomePage";
import Navbar from "./MainCompnent/Navbar";
import BitcoinChart from "./MainCompnent/BitCoinChart";
import PerformanceMetrics from "./MainCompnent/PerformanceMatrics";
import Sentiment from "./MainCompnent/Sentiment";
import BitcoinCard from "./MainCompnent/BitCoinCard";
import TeamMembers from "./MainCompnent/TeamSection";
import Footer from "./MainCompnent/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("Page 1");

  return (
    <div className="h-screen flex flex-col">
      {/* <Navbar />
      <div className="flex flex-1">
        <LeftSidebar setSelectedPage={setSelectedPage} />
        <MiddleSection selectedPage={selectedPage} />
        <RightSidebar />
      </div> */}
      <Navbar/>
      <BitcoinChart/>
      <PerformanceMetrics/>
      <Sentiment/>
      <BitcoinCard/>
      <TeamMembers/>
      <Footer/>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
