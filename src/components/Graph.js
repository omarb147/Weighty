import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        {
          x: new Date("01/02/2019"),
          y: 1
        },
        {
          t: new Date("01/03/2019"),
          y: 10
        },
        {
          t: new Date("01/04/2019"),
          y: 200
        }
      ]
    }
  ]
};

const options = {
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          stepSize: "1",
          displayFormats: {
            minute: "hA",
            hour: "MMM D",
            week: "MMM YYYY"
          }
        },
        bounds: "data",
        ticks: { source: "data" }
      }
    ]
  }
};

class Graph extends Component {
  render() {
    return <Line data={data} options={options} />;
  }
}

export default Graph;
