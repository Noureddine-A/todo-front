import React, { useState } from "react";

import "./TodoOperations.css";
import FilterButton from "./UI/FilterButton";

const TodoOperations = (props) => {
  const [selectedButton, setSelectedButton] = useState(1);

  let buttons = [
    { id: 1, name: "All" },
    { id: 2, name: "Active" },
    { id: 3, name: "Completed" },
  ];
  let text = <p>item left</p>;

  if (props.todosAmount > 1) {
    text = <p>items left</p>;
  }

  const changeSelectedButton = (id) => {
    setSelectedButton(id);
  };

  return (
    <div className="todo_operations-container">
      <div className="todo_operations-left">
        <p>{props.todosAmount}&nbsp;</p>
        {text}
      </div>
      <div className="todo_operations-middle">
        <div className="todo_operations-filter">
          {buttons.map((button) => {
            return (
              <FilterButton
                key={button.id}
                name={button.name}
                id={button.id}
                selectedId={selectedButton}
                changeSelectedButton={changeSelectedButton}
              />
            );
          })}
          <FilterButton />
        </div>
      </div>
      <div className="todo_operations-right">
        <FilterButton name="Clear Completed" id="4" />
      </div>
    </div>
  );
};

export default TodoOperations;
