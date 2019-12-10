import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/action";
import { Button, Input } from "antd";

class AddItem extends Component {
  state = {
    myInput: ""
  };

  onChange = e => {
    this.setState({
      myInput: e.target.value
    });
  };

  onclick = e => {
    e.preventDefault();
    this.props.addTask({
      text: this.state.myInput,
      key: Date.now(),
      checked: false
    });
    this.setState({
      myInput: ""
    });
  };
  render() {
    return (
      <div className="formulaire">
        <h1>Daily ToDo Lists</h1>
        <h2>Add your ToDo</h2>
        <form>
          <Input
            name="myInput"
            className="myinput"
            value={this.state.myInput}
            size="large"
            placeholder="Add your Todo"
            onChange={this.onChange}
          />
          <Button className="mybutton" onClick={e => this.onclick(e)}>
            Add
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTask
};

export default connect(null, mapDispatchToProps)(AddItem);

