import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import AddEditModal from "./AddEditModal";

export class Dashboard extends Component {
  //TODO:
  //1. Calculations of the weight and update of state
  //2.

  static propTypes = {};

  render() {
    return (
      <Fragment>
        <div className="ui segment basic">
          {" "}
          <h2> Stats </h2>
        </div>
        <table className="ui very basic celled table">
          <tbody>
            <tr>
              <td className="collapsing">
                <div className="content">Today's Weight</div>
              </td>
              <td>80kg</td>
            </tr>
            <tr>
              <td className="collapsing">
                <div className="content">5 day Rolling average Weight</div>
              </td>
              <td>80kg</td>
            </tr>
            <tr>
              <td>
                {" "}
                <div className="content">Completion Streak</div>
              </td>
              <td>80kg</td>
            </tr>
            <tr>
              <td>
                <div className="content">Total Weight Lost</div>
              </td>
              <td>80kg</td>
            </tr>
            <tr>
              <td>
                <div className="content">Current Target</div>
              </td>
              <td>80kg</td>
            </tr>
          </tbody>
        </table>
        <div className="ui left aligned segment basic">
          <AddEditModal
            type="AddEntry"
            buttonTitle="Add New Entry"
            addMeasurement={this.props.addMeasurement}
          />
          <AddEditModal type="EditTarget" buttonTitle="Edit Target" />
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
