import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer.js";
import TodoList from "./TodoList.js";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e => {
    setTask(e.target.value);
  };

  return (
    <>
      {/* moved todolist into the form because it was not grabbing the updated state. */}
      <TodoList dispatch={dispatch} state={state} />
      <form>
        <input
          type="text"
          placeholder="New Todo"
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button
          onClick={e => {
            e.preventDefault();
            dispatch({ type: "ADD_TASK", payload: task });
          }}
        >
          Add
        </button>

        <button
          onClick={e => {
            e.preventDefault();
            dispatch({ type: "CLEAR_TODOS" });
          }}
        >
          Clear
        </button>
      </form>
    </>
  );
};

export default TodoForm;
