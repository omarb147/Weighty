import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  options: {
    scales: {
      xAxes: [
        {
          type: "time",
          distribution: "linear",
          bounds: "data",
          time: { stepSize: 0.3 }
        }
      ]
    }
  },

  data: {
    datasets: [
      {
        label: "Demo",
        data: [
          {
            t: new Date("2015-3-15 13:3"),
            y: 12
          },
          {
            t: new Date("2015-3-25 13:2"),
            y: 21
          },
          {
            t: new Date("2015-4-25 14:12"),
            y: 32
          }
        ]
      }
    ]
  }
};

function Graph() {
  return <Line {...data} />;
}

export default Graph;
