import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {

  constructor(props) {
    super(props);
    show: false
  }
  
  congratulate = (title) => {
    this.handleOpen();
  }

  handleClose = () => {
    this.setState({show: false})
  }

  handleOpen = () => {
    this.setState({show: true})
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
};

export default SelectedBeast;