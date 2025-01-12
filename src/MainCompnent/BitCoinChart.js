import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-stockcharts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class BitCoinChart extends Component {
  constructor(props) {
    super(props);
    this.state = { dataPoints: [], isLoaded: false };
  }

  componentDidMount() {
    fetch("https://canvasjs.com/data/gallery/react/btcusd2017-18.json")
      .then((res) => res.json())
      .then((data) => {
        var dps = [];
        for (var i = 0; i < data.length; i++) {
          dps.push({
            x: new Date(data[i].date),
            y: Number(data[i].close),
          });
        }
        this.setState({
          isLoaded: true,
          dataPoints: dps,
        });
      });
  }

  render() {
    const options = {
      title: {
        text: "Bitcoin Price (USD)",
        fontSize: 24,
        fontWeight: "bold",
        fontColor: "#2c3e50",
      },
      theme: "light2",
      subtitles: [
        {
          text: "BTC/USD",
          fontSize: 14,
          fontColor: "#7f8c8d",
        },
      ],
      charts: [
        {
          axisX: {
            title: "Date",
            titleFontSize: 14,
            lineColor: "#2c3e50",
            tickColor: "#2c3e50",
            labelFontColor: "#34495e",
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
              valueFormatString: "MMM DD YYYY",
            },
          },
          axisY: {
            title: "Bitcoin Price (USD)",
            prefix: "$",
            titleFontSize: 14,
            titleFontColor: "#34495e",
            lineColor: "#2c3e50",
            tickColor: "#2c3e50",
            labelFontColor: "#34495e",
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
              valueFormatString: "$#,###.##",
            },
          },
          toolTip: {
            shared: true,
            contentFormatter: (e) => {
              return `<span style="color: #2c3e50;">${e.entries[0].dataPoint.x.toDateString()}<br>Price: ${
                e.entries[0].dataPoint.y
              }</span>`;
            },
          },
          data: [
            {
              name: "Price (in USD)",
              type: "line",
              color: "#3498db",
              yValueFormatString: "$#,###.##",
              xValueFormatString: "MMM DD YYYY",
              dataPoints: this.state.dataPoints,
            },
          ],
        },
      ],
      navigator: {
        slider: {
          minimum: new Date("2017-05-01"),
          maximum: new Date("2018-05-01"),
        },
      },
    };

    const containerProps = {
      width: "100%",
      height: "450px",
      margin: "auto",
    };

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Bitcoin Price Chart
        </h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {this.state.isLoaded && (
            <CanvasJSStockChart
              containerProps={containerProps}
              options={options}
            />
          )}
        </div>
      </div>
    );
  }
}

export default BitCoinChart;
