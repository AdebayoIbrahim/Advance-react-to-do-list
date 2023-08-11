import React from "react";
import { Box, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Add } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

const Todoform = () => {
  return (
    <React.Fragment>
      <Box component="form">
        <TextField
          variant="outlined"
          id="input"
          fullWidth
          label="Add Task"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Add sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            "(&:hover)": { background: `${grey[900]} !important` },
          }}
        />
      </Box>
    </React.Fragment>
  );
};

export default Todoform;
