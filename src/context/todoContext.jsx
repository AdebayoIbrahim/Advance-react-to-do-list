import React, { createContext, useState } from "react";
import Todo from "../data/Tododata";
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(Todo);

  //addeing new todos
  const addTodo = (newTodo) => {
    setTodo([newTodo, ...todo]);
  };
  return (
    <React.Fragment>
      <TodoContext.Provider
        value={{
          todo,
          addTodo,
        }}
      >
        {children}
      </TodoContext.Provider>
    </React.Fragment>
  );
};

export default TodoContext;
