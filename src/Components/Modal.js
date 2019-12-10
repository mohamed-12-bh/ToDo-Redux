import React, { Component } from "react";
import { updateTask } from "../actions/action";
import { connect } from "react-redux";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

class Mmodal extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      modal: false
    };
  }

  changeName = e => {
    this.setState({
      input: e.target.value
    });
    console.log(this.state.input);
  };
  toggle = () => this.setState({ modal: !this.state.modal });
  render() {
    const { text, key, checked } = this.props.todo[this.props.index];
    console.log('msg',text,key,checked)

    return (
      <div>
        <div className="button">
          <div className="buttn">
            <Button color="danger" className="btn-add" onClick={this.toggle}>
              Editer
            </Button>
          </div>
        </div>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <div>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Change your input</InputGroupText>
                </InputGroupAddon>
                <Input defaultValue={text} onChange={e => this.changeName(e)} />
              </InputGroup>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              onClick={() => {
                this.props.updateTask({
                  key: key,
                  text: this.state.input,
                  checked
                });
                this.toggle();
              }}
            >
              Save
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateTask
};

export default connect(null, mapDispatchToProps)(Mmodal);
