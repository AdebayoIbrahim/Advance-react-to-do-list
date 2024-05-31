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
  //adding important manually new todos
  const fillImportant = (newTodo) => {
    setImp([...important, newTodo]);
  };
  //delete Created todo in app
  const deleteTodo = (currid) => {
    // console.log(currid);
    setTodo(
      todo.filter((todos) => {
        return todos.id !== currid;
      })
    );
  };
  //starred todos deletion functionality
  const deleteImp = (currid) => {
    // console.log(currid);
    setImp(
      important.filter((todos) => {
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

  // contxet_func_for-current-backgrond
  const [current, setBg] = useState(0);

  // updateBg
  const handleBg = (payload) => {
    setBg(payload);
  };

  return (
    <React.Fragment>
      <TodoContext.Provider
        value={{
          todo,
          important,
          todoEdit,
          current,
          addTodo,
          deleteTodo,
          addImportant,
          editTodo,
          updateTodo,
          fillImportant,
          deleteImp,
          handleBg,
        }}
      >
        {children}
      </TodoContext.Provider>
    </React.Fragment>
  );
};

export default TodoContext;
