import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { deleteTask, completeTask, updateTask } from "../actions/action";
import Mmodal from './Modal'

const TodoItems = props => {
  return (
    <div>
      {props.items.map((el,i) => (
        <div key={el.key} className="tasks">
          <Button
            className="btn-task"
            onClick={e => {
              e.preventDefault();
              props.completeTask(el.key);
            }}
          >
            {el.checked ? "Undo" : "Complete"}
          </Button>
          <Button
            className="btn-task"
            onClick={e => {
              e.preventDefault();
              props.deleteTask(el.key);
            }}
          >
            Delete
          </Button>
          <p className={el.checked ? "checked" : ""}>{el.text}</p>
        <Mmodal todo={props.items} index={i}/></div>
          ))}
    </div>
    
  );
};

const mapStateToProps = state => {
  return {
    items: state
  };
};
const mapDispatchToProps = {
  deleteTask,
  completeTask,
  updateTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);
