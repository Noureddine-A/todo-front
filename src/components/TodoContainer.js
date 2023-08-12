import React from "react";

import "./TodoContainer.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return <div className="todo_container">
    <div className="todo_content-container">
        <h1>TODO</h1>
        <AddTodo/>
        <TodoList/>
    </div>
  </div>;
};

export default TodoContainer;
