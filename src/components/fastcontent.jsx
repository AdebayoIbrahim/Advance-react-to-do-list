import { Box, Typography } from "@mui/material";
import React from "react";
import notebook from "./assets/notbook.png";
function Tooltip() {
  return (
    <Box
      sx={{
        width: "15em",
        padding: "1rem .8rem .8rem",
        borderRadius: "10px",
        background: "rgb(0 0 0 / .5)",
        textAlign: "center",
        lineHeight: "0 !important",
      }}
    >
      <img
        src={notebook}
        alt="notebook"
        width={80}
        height={80}
        style={{ marginBlock: ".8rem" }}
      />
      <Typography component="h1" pt={1} pb={1} fontSize={20} fontWeight={450}>
        Focus On Your Day
      </Typography>{" "}
      <Typography variant="caption">
        Get things done with My Day, a list that refreshes everyday
      </Typography>
    </Box>
  );
}

export default Tooltip;
