import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import { convertNumber } from '../../../functions/convertNumbers';

const LineChart = ({ chartData, priceType, multiaxis }) => {

  const chartOptions = {

    plugins: {
      legend: {
        display: multiaxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      modes: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        type: "linear",
        display: "true",
        position: "left",
        ticks: {
          callback: function (value, index, ticks) {
            if (priceType === "prices") return "$" + value.toLocaleString();
            return "$" + (convertNumber(value))
          }
        }
      },
      crypto2: {
        type: "linear",
        display: "true",
        position: "right",
        ticks: {
          callback: function (value, index, ticks) {
            if (priceType === "prices") return "$" + value.toLocaleString();
            return "$" + (convertNumber(value))
          }
        }
      }
    }


  };


  return <Line data={chartData} options={chartOptions} />;
};

export default LineChart;
