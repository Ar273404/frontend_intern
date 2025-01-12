import React, { useState, useEffect } from "react";
import { AgCharts } from "ag-charts-community"; // Import AgCharts from ag-charts-community
import { time } from "ag-charts-community"; // Import time from ag-charts-community
import { makeStyles } from "@mui/styles";

// Define styles for cards and the container
const useStyles = makeStyles({
  footer: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center everything
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  coinContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "300px", // Adjust width of the coin container
    margin: "10px",
    backgroundColor: "#fff", // White background
    borderRadius: "10px", // Rounded corners
    padding: "15px", // Padding inside the card
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow effect
    textAlign: "center", // Center the content
  },
  coinLogo: {
    width: "40px", // Logo size
    height: "40px", // Logo size
    marginBottom: "10px", // Space between logo and text
  },
  coinName: {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  coinPrice: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  chartContainer: {
    width: "100%", // Ensure the chart takes full width of the card
    height: "250px", // Fixed height for chart
    marginTop: "20px",
  },
});

const Footer = () => {
  const classes = useStyles();
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    // Mock data fetch simulation
    const fetchData = async () => {
      const mockData = [
        {
          name: "BNB",
          price: 319.34,
          change: 0.52,
          data: [
            { date: "2024-01-01", open: 318, high: 320, low: 315, close: 319 },
            { date: "2024-02-01", open: 319, high: 322, low: 317, close: 320 },
            { date: "2024-03-01", open: 320, high: 325, low: 318, close: 323 },
            { date: "2024-04-01", open: 323, high: 328, low: 320, close: 324 },
            { date: "2024-05-01", open: 324, high: 328, low: 322, close: 325 },
          ],
          logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
        },
        {
          name: "SOL",
          price: 109.33,
          change: -2.89,
          data: [
            { date: "2024-01-01", open: 112, high: 115, low: 110, close: 111 },
            { date: "2024-02-01", open: 111, high: 113, low: 109, close: 110 },
            { date: "2024-03-01", open: 110, high: 113, low: 107, close: 112 },
            { date: "2024-04-01", open: 112, high: 116, low: 109, close: 113 },
            { date: "2024-05-01", open: 113, high: 118, low: 110, close: 116 },
          ],
          logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
        },
      ];
      setCoinData(mockData);
    };

    fetchData();
  }, []);

  const createChart = (coin) => {
    const options = {
      container: document.getElementById(`${coin.name}-chart`),
      data: coin.data,
      title: {
        text: `${coin.name} USD`,
      },
      subtitle: {
        text: `(${coin.name}-USD)`,
      },
      footnote: {
        text: "2024",
      },
      series: [
        {
          type: "candlestick",
          xKey: "date",
          xName: "Date",
          lowKey: "low",
          lowName: "Low",
          highKey: "high",
          highName: "High",
          openKey: "open",
          openName: "Open",
          closeKey: "close",
          closeName: "Close",
          item: {
            up: {
              fill: "transparent",
              stroke: "#2b5c95",
            },
            down: {
              fill: "#5090dc",
              stroke: "#2b5c95",
            },
          },
        },
      ],
      zoom: {
        enabled: true,
      },
      axes: [
        {
          type: "ordinal-time",
          position: "bottom",
          interval: { step: time.year.every(1) },
          line: {
            enabled: false,
          },
          gridLine: {
            enabled: true,
          },
          crosshair: {
            label: {
              format: "%d %b %y",
            },
          },
        },
        {
          type: "number",
          position: "right",
          interval: { step: 10 },
          label: {
            formatter: ({ value }) => Number(value).toLocaleString(),
          },
          crosshair: {
            label: {
              format: `,f`,
            },
          },
        },
      ],
      tooltip: {
        position: {
          type: "pointer",
          yOffset: -20,
        },
      },
    };

    // Initialize chart after component mount
    AgCharts.create(options);
  };

  useEffect(() => {
    coinData.forEach((coin) => {
      createChart(coin);
    });
  }, [coinData]);

  return (
    <footer className={classes.footer}>
      {/* Section for "You may also like" */}
      <div>
        <div className={classes.sectionTitle}>You may also like</div>
        <div className="flex flex-wrap justify-center">
          {coinData.slice(0, 4).map((coin, index) => (
            <div key={index} className={classes.coinContainer}>
              {/* Coin Logo */}
              <img
                src={coin.logo}
                alt={coin.name}
                className={classes.coinLogo}
              />
              <div className={classes.coinName}>
                {coin.name} {coin.change > 0 ? "+" : ""}
                {coin.change}%
              </div>
              <div className={classes.coinPrice}>${coin.price}</div>
              <div
                id={`${coin.name}-chart`}
                className={classes.chartContainer}></div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
