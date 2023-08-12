import React, { useEffect, useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Add, Circle } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

const Todoform = () => {
  const [placeholder, setPlaceholder] = useState("Add a task");
  const [icon, setIcon] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const setFocusable = () => {
    setPlaceholder("Try Typing 'Studying by 10am'");
    setIcon(false);
  };
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
        setIcon(true);
      }
    }
  });
  return (
    <React.Fragment>
      <Box component="form" onSubmit={handleSubmit} autoComplete="off">
        <TextField
          variant="outlined"
          onFocus={setFocusable}
          placeholder={placeholder}
          id="input"
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
