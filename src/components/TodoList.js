import React, { Fragment, useEffect, useState } from "react";

import "./TodoList.css";
import TodoItem from "./TodoItem";
import useHttp from "../hooks/usehttp";
import Req from "../classes/Req";
import { useSelector } from "react-redux";
import TodoOperations from "./TodoOperations";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const retrievedTodos = useSelector((state) => state.todos.todosList);

  const { sendRequest } = useHttp();

  let showTodoOperations = false;

  const fetchTodos = (data) => {
    for (let i = 0; i < data.length; i++) {
      data[i]._id = data[i]._id.toString().replace(/ObjectId\("(.*)"\)/, "$1");
    }
    setTodos(data);
  };

  useEffect(() => {
    setTodos(retrievedTodos);
  }, [retrievedTodos]);

  useEffect(() => {
    const request = new Req();
    request.method = "GET";
    request.path = "";
    sendRequest(request, fetchTodos);
  }, []);

  if (todos.length > 0) {
    showTodoOperations = true;
  } else {
    showTodoOperations = false;
  }

  return (
    <Fragment>
      <div className="todolist_container">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo._id}
              id={todo._id}
              name={todo.name}
              fetchTodos={fetchTodos}
              completed={todo.completed}
            />
          );
        })}
      </div>
      {showTodoOperations && <TodoOperations todosAmount={todos.length} />}
    </Fragment>
  );
};

export default TodoList;
