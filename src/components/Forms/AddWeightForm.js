import React, { Component, Fragment } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import { stat } from "fs";

export class AddWeightForm extends Component {
  static propTypes = {};

  state = {
    units: "kg",
    weight: "",
    date: format(Date.now(), "yyyy-MM-dd")
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    const updatedState = { ...this.state };

    updatedState[name] = value;

    this.setState(updatedState);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addMeasurement(this.state);
    this.props.modalChangeHandler();
  };

  render() {
    return (
      <Fragment>
        <Modal.Header>Add/Edit Weight Measurement</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {/* <Header>Default Profile Image</Header> */}
            <h3>
              Please select a date for which you would like to add or edit a
              weight measurement for
            </h3>
            <form className="ui form" action="" onSubmit={this.handleSubmit}>
              <div className="ten wide field">
                <input
                  name="date"
                  type="date"
                  placeholder="date"
                  onChange={this.handleChange}
                  value={this.state.date}
                />
              </div>
              <div className="two fields">
                <div className="field">
                  <input
                    name="weight"
                    type="text"
                    placeholder="Weight"
                    onChange={this.handleChange}
                    value={this.state.weight}
                  />
                </div>
                <div className="three wide field">
                  <select
                    className="ui selection dropdown"
                    name="Units"
                    onChange={this.handleChange}
                    value={this.state.units}
                  >
                    <option value="kg">Kg</option>
                    <option value="lb">lb</option>
                  </select>
                </div>
              </div>
              <button className="ui button" type="submit">
                Submit
              </button>
            </form>
          </Modal.Description>
        </Modal.Content>
      </Fragment>
    );
  }
}

export default AddWeightForm;
