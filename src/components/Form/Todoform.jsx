import React from "react";
import { Box, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Add } from "@mui/icons-material";

const Todoform = () => {
  return (
    <React.Fragment>
      <Box component="form">
        <TextField
          starticon={<Add />}
          variant="outlined"
          id="input"
          fullWidth
          label="Add Task"
          sx={{
            "(&:hover)": { background: `${grey[900]} !important` },
          }}
        />
      </Box>
    </React.Fragment>
  );
};

export default Todoform;
