import React, { useState, useContext, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Add, Circle } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import TodoContext from "../../context/todoContext";
const Todoform = (props) => {
  const [placeholder, setPlaceholder] = useState("Add a task");
  const [icon, setIcon] = useState(true);
  const [val, setVal] = useState("");

  const { addTodo, todoEdit, updateTodo, fillImportant } =
    useContext(TodoContext);
  //todoedit
  useEffect(() => {
    if (todoEdit.edit) {
      setVal(todoEdit.item);
      setFocusable();
    }
  }, [todoEdit]);
  //focusable
  const setFocusable = () => {
    setPlaceholder("Try Typing 'Studying by 10am'");
    setIcon(false);
  };
  //change
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  //focus out
  window.addEventListener("click", (e) => {
    if (!e.target.matches("input")) {
      if (placeholder !== "Add a task") {
        setPlaceholder("Add a task");
        setIcon(true);
      }
    }
  });
  //submittion
  const handleSubmit = (e) => {
    e.preventDefault();
    if (val.trim().length < 1) {
      alert("Please input Your Tasks");
      return;
    } else {
      const newTodo = {
        id: window.crypto.randomUUID(),
        data: val,
      };

      if (todoEdit.edit) {
        updateTodo(todoEdit.id, newTodo);
      } else if (props.name === "edit") {
        fillImportant(newTodo);
      } else {
        addTodo(newTodo);
      }
    }
    setVal("");
  };
  return (
    <React.Fragment>
      <Box component="form" onSubmit={handleSubmit} autoComplete="off">
        <TextField
          variant="outlined"
          onFocus={setFocusable}
          placeholder={placeholder}
          id="input"
          onChange={handleChange}
          value={val}
          className="input"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {icon ? (
                  <Add sx={{ color: "white" }} />
                ) : (
                  <Circle
                    sx={{
                      strokeWidth: 2,
                      stroke: "white",
                      fill: `${grey[900]} `,
                    }}
                  />
                )}
              </InputAdornment>
            ),
          }}
          sx={{
            background: `${grey[900]} `,
            borderRadius: ".3rem !important",
            "&:hover": { background: `${grey[800]} ` },
          }}
        />
      </Box>
    </React.Fragment>
  );
};

export default Todoform;
