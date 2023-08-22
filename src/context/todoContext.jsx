import React, { createContext, useState } from "react";
import Todo from "../data/Tododata";
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(Todo);

  //adding new todos
  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };
  //delete todo
  const deleteTodo = (currid) => {
    console.log(currid);
    setTodo(
      todo.filter((todos) => {
        return todos.id !== currid;
      })
    );
  };
  return (
    <React.Fragment>
      <TodoContext.Provider
        value={{
          todo,
          addTodo,
          deleteTodo,
        }}
      >
        {children}
      </TodoContext.Provider>
    </React.Fragment>
  );
};

export default TodoContext;
