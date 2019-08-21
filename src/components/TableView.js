import React, { Component } from "react";
import MaterialTable from "material-table";

const COLUMNS = [
  { title: "Date", field: "date", type: "date" },
  { title: "Measurement", field: "weight", type: "numeric" },
  { title: "Units", field: "units" },
  { title: "Positive", field: "positive" },
  { title: "Negative", field: "negative" }
];

const measurementsTest = [
  { id: 112, date: "12-01-1993", weight: 100 },
  { id: 104, date: "12-01-2012", weight: 120 },
  { id: 123, date: "14-01-1993", weight: 150 },
  { id: 102, date: "15-01-1993", weight: 94 }
];

class TableView extends Component {
  state = { columns: COLUMNS, data: measurementsTest };

  render() {
    return (
      <MaterialTable
        title="All Measurments"
        columns={this.state.columns}
        data={Object.keys(this.props.measurements).map(key => {
          return { id: key, ...this.props.measurements[key] };
        })}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.props.addMeasurement(newData);
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.props.updateMeasurement(oldData.id, newData);
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.props.deleteMeasurement(oldData.id);
              }, 600);
            })
        }}
      />
    );
  }
}

export default TableView;
