import React, { useEffect, useRef, useState } from "react";

import useHttp from "../hooks/usehttp";

import Todo from "../classes/Todo";
import Req from "../classes/Req";

import "./AddTodo.css";
import { useDispatch } from "react-redux";
import { todosActions } from "../store/redux";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const ref = useRef();
  const dispatch = useDispatch();

  const { sendRequest: sendReq } = useHttp();

  const addTodosToList = (todos) => {
    dispatch(todosActions.addToList(todos));
  }

  useEffect(() => {
    if (todo !== "") {
      const todoItem = new Todo();
      todoItem.name = todo;
      todoItem.completed = false;

      const request = new Req();
      request.method = "POST";
      request.body = {
        name: todo,
        completed: todoItem.completed
      };
      request.path = "add";

      sendReq(request, addTodosToList);
    }
  }, [todo]);

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      setTodo(ref.current.value);
      ref.current.value = '';
    }
  };

  return (
    <div className="todo__add-container">
      <input
        type="text"
        placeholder="Create a new todo..."
        ref={ref}
        onKeyDown={keyDownHandler}
      ></input>
    </div>
  );
};

export default AddTodo;
