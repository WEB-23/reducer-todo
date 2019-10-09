import React from "react";
import Todo from "./Todo.js";

const TodoList = ({ state, dispatch }) => {
  console.log(state.todos);
  return (
    <ul>
      {state.todos.map(todo => {
        return <Todo todo={todo} key={todo.id} dispatch={dispatch} />;
      })}
    </ul>
  );
};

export default TodoList;
