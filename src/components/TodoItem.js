import React from "react";

import RemoveIcon from '../assets/images/icon-cross.svg';
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <div className="todo_item-container">
      <div className="todo_check-container">
        <div className="todo_check"></div>
      </div>
      <div className="todo_item-name">
        <p>{props.name}</p>
      </div>
      <div className="todo_item-remove">
        <img src={RemoveIcon} alt={RemoveIcon}/>
      </div>
    </div>
  );
};

export default TodoItem;
