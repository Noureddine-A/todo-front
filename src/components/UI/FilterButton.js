import React, { Fragment } from "react";

import useHttp from "../../hooks/usehttp";

import "./FilterButton.css";
import Req from "../../classes/Req";
import { useDispatch } from "react-redux";
import { todosActions } from "../../store/redux";

const FilterButton = (props) => {
  const { sendRequest } = useHttp();

  const dispatch = useDispatch();

  let active = "todo_filter-button";

  if (props.selectedId === props.id) {
    active = "todo_filter-button-selected";
  }

  const handleIncomingData = (data) => {
    dispatch(todosActions.addToList(data));
  };

  const onFilterClickedHandler = () => {
    if (props.name !== "Clear Completed") {
      props.changeSelectedButton(props.id);
    }

    const request = new Req();
    request.method = "GET";
    if (props.name === "Clear Completed") {
      request.path = "clear";
    } else {
      request.path = `${props.name.toLowerCase()}`;
    }

    sendRequest(request, handleIncomingData);
  };

  return (
    <div className={active}>
      <button onClick={onFilterClickedHandler}>{props.name}</button>
    </div>
  );
};

export default FilterButton;
