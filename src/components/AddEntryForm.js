import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export class AddEntryForm extends Component {
    static propTypes = {
    }
    render() {
        return (
    <Modal.Content>
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
        )
    }
}

export default AddEntryForm
