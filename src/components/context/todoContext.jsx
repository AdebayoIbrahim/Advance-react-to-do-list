import React, { createContext } from "react";
import Todo from "../../data/Tododata";
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  return (
    <React.Fragment>
      <TodoContext.Provider
        value={{
          Todo,
        }}
      >
        {children}
      </TodoContext.Provider>
    </React.Fragment>
  );
};

export default TodoContext;
