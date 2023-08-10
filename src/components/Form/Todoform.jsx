import React from "react";
import { Box, TextField } from "@mui/material";

const Todoform = () => {
  return (
    <React.Fragment>
      <Box component="form">
        <TextField
          variant="outlined"
          id="input"
          fullWidth
          label="Add Task"
          sx={{ outlineColor: "white !important" }}
        />
      </Box>
    </React.Fragment>
  );
};

export default Todoform;
