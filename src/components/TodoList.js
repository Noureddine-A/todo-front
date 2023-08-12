import React from 'react';

import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div className="todolist_container">
        <TodoItem/>
        <TodoItem/>
    </div>
  )
}

export default TodoList