import React, { Fragment, useState } from "react";

import RemoveIcon from "../assets/images/icon-cross.svg";
import "./TodoItem.css";

import Req from "../classes/Req";
import Todo from "../classes/Todo";
import useHttp from "../hooks/usehttp";

const TodoItem = (props) => {
  const [showRemove, setShowRemove] = useState(false);

  const { sendRequest } = useHttp();

  let todoCheckDiv = "todo_check";
  let todoTextDiv = "todo_item-name";

  if (props.completed) {
    todoCheckDiv = "todo_check-completed";
    todoTextDiv = "todo_item-name-completed";
  }

  const showRemoveIcon = () => {
    setShowRemove(!showRemove);
  };

  const requestHandler = (path, method) => {
    const todo = new Todo(props.id, props.name, props.completed);
    const request = new Req();
    request.method = method;
    request.body = {
      id: todo.id,
      name: todo.name,
      completed: !props.completed,
    };

    request.path = path;

    sendRequest(request, props.fetchTodos);
  };

  const deleteTodoClickHandler = () => {
    requestHandler("delete", "POST");
  };

  const todoCompletedClickHandler = () => {
    requestHandler("update", "POST");
  };

  return (
    <div className="todo_item-container">
      <div className="todo_check-container">
        <div className={todoCheckDiv} onClick={todoCompletedClickHandler} />
      </div>
      <div
        className={todoTextDiv}
        onMouseEnter={showRemoveIcon}
        onMouseLeave={showRemoveIcon}
      >
        <p>{props.name}</p>
        <div className="todo_item-remove">
          {showRemove && (
            <img
              src={RemoveIcon}
              alt={RemoveIcon}
              onClick={deleteTodoClickHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
