import React, { useEffect, useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import { Add } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

const Todoform = () => {
  const [placeholder, setPlaceholder] = useState("Add a task");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //focusing state
  // const focusState = () => {
  //   // alert("focused!");
  //   setPlaceholder("Try Typing 'Studying by 10am'");
  // };
  // useEffect(() => {
  //   inputRef.current.focus()
  //     ? setPlaceholder("value")
  //     : setPlaceholder("onfocus");
  // });
  window.addEventListener("click", (e) => {
    if (!e.target.matches("input")) {
      if (placeholder !== "Add a task") {
        setPlaceholder("Add a task");
      }
    }
  });
  return (
    <React.Fragment>
      <Box component="form" onSubmit={handleSubmit} autoComplete="off">
        <TextField
          variant="outlined"
          onFocus={() => setPlaceholder("Try Typing 'Studying by 10am'")}
          placeholder={placeholder}
          id="input"
          className="input"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Add sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            background: `${grey[900]} `,
            borderRadius: ".3rem !important",
            "&:focus": { background: `${grey[800]} ` },
          }}
        />
      </Box>
    </React.Fragment>
  );
};

export default Todoform;
