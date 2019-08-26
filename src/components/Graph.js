import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const options = {
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          displayFormats: {
            minute: "hA",
            hour: "MMM DD",
            week: "MMM YYYY"
          }
        },
        bounds: "ticks",
        ticks: { source: "data" },
        distribution: "series",
        stepSize: 0.01
      }
    ]
  }
};
const fromInput = React.createRef();
const toInput = React.createRef();

class Graph extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const to = toInput.current.value;
    const from = fromInput.current.value;
    this.props.filterHandler(to, from);
  };

  render() {
    const { filteredData } = this.props;
    const source = {
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
          data: filteredData
        }
      ]
    };
    return (
      <div>
        <Line data={source} options={options} />
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="three fields">
            <div className="six wide field">
              <input
                type="date"
                name="from"
                ref={fromInput}
                defaultValue={this.props.from}
              />
            </div>
            <div className="six wide field">
              <input
                type="date"
                name="to"
                ref={toInput}
                defaultValue={this.props.to}
                onChange={this.eventHandler}
              />
            </div>
            <div className="three wide field">
              <button className="ui button submit">Search</button>
            </div>
          </div>
          <div />
        </form>
      </div>
    );
  }
}

export default Graph;
