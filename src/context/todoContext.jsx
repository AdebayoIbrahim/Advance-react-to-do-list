import React, { createContext, useEffect, useState } from "react";
import { Todo, Starred } from "../data/Tododata";
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(Todo);
  //starred
  const [important, setImp] = useState(Starred);

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

  //add important
  const addImportant = (data) => {
    setImp([...important, data]);
  };
  useEffect(() => {
    console.log(important);
  }, [important]);
  return (
    <React.Fragment>
      <TodoContext.Provider
        value={{
          todo,
          important,
          addTodo,
          deleteTodo,
          addImportant,
        }}
      >
        {children}
      </TodoContext.Provider>
    </React.Fragment>
  );
};

export default TodoContext;
