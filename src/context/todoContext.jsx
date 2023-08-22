import React, { createContext, useState } from "react";
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
    // console.log(currid);
    setTodo(
      todo.filter((todos) => {
        return todos.id !== currid;
      })
    );
  };

  //editing functionality
  const [todoEdit, setTodoedit] = useState({
    item: {},
    edit: false,
  });
  const editTodo = (item, id) => {
    setTodoedit({
      item,
      id,
      edit: true,
    });
  };
  const updateTodo = (id, updTodo) => {
    setTodo(
      todo.map((todos) => {
        if (todos.id === id) {
          return { ...todos, ...updTodo };
        } else {
          return todos;
        }
      })
    );
  };
  //add important/starred arrays
  const addImportant = (data) => {
    setImp([...important, data]);
  };

  return (
    <React.Fragment>
      <TodoContext.Provider
        value={{
          todo,
          important,
          todoEdit,
          addTodo,
          deleteTodo,
          addImportant,
          editTodo,
          updateTodo,
        }}
      >
        {children}
      </TodoContext.Provider>
    </React.Fragment>
  );
};

export default TodoContext;
