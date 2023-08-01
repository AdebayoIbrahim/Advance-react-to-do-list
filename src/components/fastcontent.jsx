import { Box, Typography } from "@mui/material";
import React from "react";

function Tooltip() {
  return (
    <Box
      sx={{
        width: "15em",
        padding: "1rem",
        borderRadius: "10px",
        background: "rgb(0 0 0 / .4)",
        textAlign: "center",
      }}
    >
      <Typography component="h1" fontSize={20} fontWeight={450}>
        Focus On Your Day
      </Typography>{" "}
      <Typography variant="caption">
        Get things done with My Day,a list that refreshes everyday
      </Typography>
    </Box>
  );
}

export default Tooltip;
