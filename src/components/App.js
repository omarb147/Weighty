import React, { Component } from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Graph from "./Graph";
import TableView from "./TableView";
import Target from "./Target";
import { format } from "date-fns";

export class App extends Component {
  state = {
    measurements: {
      weight112: {
        weight: 100,
        units: "kg",
        date: format(Date.now(), "dd-MM-yyyy")
      }
    },
    currentDate: ""
  };

  addMeasurement = weight => {
    const measurements = { ...this.state.measurements };
    measurements[`weight${Date.now()}`] = weight;
    this.setState({ measurements });
  };

  updateMeasurement = (id, weight) => {
    const measurements = { ...this.state.measurements };
    measurements[id] = weight;
    this.setState({ measurements });
  };

  deleteMeasurement = id => {
    const measurements = { ...this.state.measurements };
    delete measurements[id];
    this.setState({ measurements });
  };

  produceListView = object => {
    return Object.keys(object).map(key => {
      const id = key;
      const { weight, date, units, positive, negative } = object[key];

      return { id, weight, date, units, positive, negative };
    });
  };

  render() {
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
              <Graph />
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
