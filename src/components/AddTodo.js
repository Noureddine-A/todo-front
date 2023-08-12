import React from 'react';

import './AddTodo.css';

const AddTodo = () => {
  return (
    <div className="todo__add-container">
        <input type="text" placeholder='Create a new todo...'></input>
    </div>
  )
}

export default AddTodo