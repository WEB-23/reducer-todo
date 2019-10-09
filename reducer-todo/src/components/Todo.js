import React from "react";

const Todo = ({ todo, dispatch }) => {
  return (
    <>
      <li
        onClick={() => dispatch({ type: "TOGGLE_TODOS", payload: todo.id })}
        className="todo"
      >
        {todo.task}
      </li>
      <button>X</button>
    </>
  );
};

export default Todo;
