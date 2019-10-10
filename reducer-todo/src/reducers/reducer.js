export const initialState = {
  todos: [
    {
      task: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ],

  isEditing: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = {
        task: action.payload,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTask]
      };

    case "TOGGLE_TODOS":
      return {
        ...state,
        todos: [...state.todos].map(todo => {
          return todo.id === action.payload
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo;
        })
      };

    case "CLEAR_TODOS":
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.completed === false;
        })
      };

    default:
      return state;
  }
};
