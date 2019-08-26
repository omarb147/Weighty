import React, { Component } from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Graph from "./Graph";
import TableView from "./TableView";
import Target from "./Target";
import { format, parse, addMonths, isAfter, isBefore } from "date-fns";

export class App extends Component {
  state = {
    measurements: {
      weight112: {
        weight: 100,
        units: "kg",
        date: format(new Date("02/01/2019"), "yyyy-MM-dd")
      },
      weight132: {
        weight: 99,
        units: "kg",
        date: format(new Date("02/02/2019"), "yyyy-MM-dd")
      },
      weight142: {
        weight: 98.3,
        units: "kg",
        date: format(new Date("02/03/2019"), "yyyy-MM-dd")
      },
      weight152: {
        weight: 97.4,
        units: "kg",
        date: format(new Date("02/04/2019"), "yyyy-MM-dd")
      }
    },
    currentDate: format(Date.now(), "yyyy-MM-dd"),
    graphData: {
      to: "",
      from: "",
      data: [],
      filteredData: []
    }
  };

  addMeasurement = weight => {
    const measurements = { ...this.state.measurements };
    measurements[`weight${Date.now()}`] = weight;
    this.setState({ measurements });
    this.graphDataRender(measurements);
  };

  updateMeasurement = (id, weight) => {
    const measurements = { ...this.state.measurements };
    measurements[id] = weight;
    this.setState({ measurements });
    this.graphDataRender();
  };

  deleteMeasurement = id => {
    const measurements = { ...this.state.measurements };
    delete measurements[id];
    this.setState({ measurements });
    this.graphDataRender();
  };

  produceListView = object => {
    return Object.keys(object).map(key => {
      const id = key;
      const { weight, date, units, positive, negative } = object[key];

      return { id, weight, date, units, positive, negative };
    });
  };

  graphDataRender = () => {
    //Renders the graph data
    const { measurements } = this.state;
    const data = Object.keys(measurements).map(key => {
      return { t: measurements[key].date, y: measurements[key].weight };
    });

    const { to, from } = this.getDatesFromData(data);
    const filteredData = this.filterGraphDates(from, to, data);

    let graphData = { ...this.state.graphData };
    graphData = { to, from, data, filteredData };

    this.setState({ graphData });
  };

  getDatesFromData = data => {
    //Gets dates which are 1month back from the latest data in the filter
    let to, from;

    if (Object.entries(data).length !== 0) {
      to = data
        .map(data => parse(data.t, "yyyy-MM-dd", 0))
        .reduce((prev, date) => (isAfter(date, prev) ? date : prev));
      from = addMonths(to, -1);
      to = format(to, "yyyy-MM-dd");
      from = format(from, "yyyy-MM-dd");
    }

    return { to, from };
  };

  filterGraphDates = (from, to, data) => {
    const toDate = parse(to, "yyyy-MM-dd", 0);
    const fromDate = parse(from, "yyyy-MM-dd", 0);

    return data.filter(element => {
      const date = parse(element.t, "yyyy-MM-dd", 0);
      return isAfter(date, fromDate) && isBefore(date, toDate);
    });
  };

  graphDatesFormFilter = (newTo, newFrom) => {
    const { data, to, from } = this.state.graphData;

    let updatedTo = newTo || to;
    let updatedFrom = newFrom || from;

    const filteredData = this.filterGraphDates(updatedFrom, updatedTo, data);

    let graphData = { ...this.state.graphData };
    graphData = { to, from, data, filteredData };
    this.setState({ graphData });
  };

  componentDidMount() {
    this.graphDataRender();
  }

  render() {
    const { to, from, filteredData } = this.state.graphData;
    return (
      <div className="ui container">
        <Header />
        <div className="ui center aligned padded grid">
          <div className="eight wide column">
            <div className="ui segment">
              <Dashboard
                addMeasurement={this.addMeasurement}
                updateMeasurement={this.updateMeasurement}
                deleteMeasurement={this.deleteMeasurement}
              />
            </div>
          </div>
          <div className="ui eight wide column">
            <div className="ui segment">
              <Graph
                // key={Math.random}
                filteredData={filteredData}
                to={to}
                from={from}
                filterHandler={this.graphDatesFormFilter}
              />
            </div>
            <div className="ui segment">
              <Target />
            </div>
          </div>
        </div>
        <div className="ui center aligned padded grid">
          <div className="sixteen wide column">
            <TableView
              measurements={this.state.measurements}
              deleteMeasurement={this.deleteMeasurement}
              addMeasurement={this.addMeasurement}
              updateMeasurement={this.updateMeasurement}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
