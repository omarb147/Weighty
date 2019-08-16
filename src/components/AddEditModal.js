import React, {Component} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import AddWeightForm from './Forms/AddWeightForm'

class  AddEditModal  extends Component{


  render(){
    const modalType = this.props.type

    return (<Modal trigger={<Button className={modalType == "AddEntry" ? "positive" : "primary"}>{this.props.buttonTitle}</Button>}>
      <AddWeightForm/>
  </Modal>
  )

}

}



export default AddEditModal
