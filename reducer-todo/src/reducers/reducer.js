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
      const toggleComplete = () => {
        const updatedTodos = state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        });
        return updatedTodos;
      };
      return {
        ...state,
        todos: [...state.todos, toggleComplete()]
      };

    default:
      return state;
  }
};
