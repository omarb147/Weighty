import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import AddWeightForm from "./Forms/AddWeightForm";

class AddEditModal extends Component {
  state = { modalOpen: false };
  handleModalChange = () => this.setState({ modalOpen: !this.state.modalOpen });

  render() {
    const { type } = this.props;
    let modalForm;

    switch (type) {
      case "AddEntry":
        modalForm = (
          <AddWeightForm
            addMeasurement={this.props.addMeasurement}
            modalChangeHandler={this.handleModalChange}
          />
        );
        break;
      default:
        modalForm = (
          <AddWeightForm
            addMeasurement={this.props.addMeasurement}
            modalChangeHandler={this.handleModalChange}
          />
        );
        break;
    }
    return (
      <Modal
        trigger={
          <Button
            onClick={this.handleModalChange}
            className={type === "AddEntry" ? "positive" : "primary"}
          >
            {this.props.buttonTitle}
          </Button>
        }
        closeIcon
        open={this.state.modalOpen}
        onClose={this.handleModalChange}
      >
        {modalForm}
      </Modal>
    );
  }
}

export default AddEditModal;
