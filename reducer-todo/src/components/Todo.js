import React from "react";

const Todo = ({ todo, dispatch }) => {
  return (
    <>
      <li
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => dispatch({ type: "TOGGLE_TODOS", payload: todo.id })}
        className="todo"
      >
        {todo.task}
      </li>
    </>
  );
};

export default Todo;
