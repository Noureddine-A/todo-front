import React from "react";

import "./TodoOperations.css";

const TodoOperations = (props) => {
  let text = <p>item left</p>;

  if (props.todosAmount > 1) {
    text = <p>items left</p>;
  }
  return (
    <div className="todo_operations-container">
      <div className="todo_operations-left">
        <p>{props.todosAmount}&nbsp;</p>
        {text}
      </div>
      <div className="todo_operations-middle">
        <div className="todo_operations-filter">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
      <div className="todo_operations-right">
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoOperations;
