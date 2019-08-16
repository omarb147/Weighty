import React, { Component,Fragment } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import PropTypes from 'prop-types'


export class AddWeightForm extends Component {
    static propTypes = {
    }

    render() {
        return (
    <Fragment>
    <Modal.Header>Add/Edit Weight Measurement</Modal.Header>
     <Modal.Content>
      <Modal.Description>
        {/* <Header>Default Profile Image</Header> */}
        <h3>Please select a date for which you would like to add or edit a weight measurement for</h3>
        <form className="ui form" action="">
            <div className="ten wide field">
            <input name="date" type="date" placeholder="date"/>
            </div>
            <div className="two fields">
            <div className="field">
            <input name="weight" type="text" placeholder="weight"/>
            </div>
            <div className="three wide field">
            <input name="units" type="text" placeholder="units"/>
            </div>
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>

      </Modal.Description>
    </Modal.Content>
    </Fragment>
        )
    }
}

export default AddWeightForm
