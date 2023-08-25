import React from "react";
import { Box, Stack } from "@mui/material";
const Body = ({ children }) => {
  return (
    <React.Fragment>
      <Stack
        pt={3}
        pb={3}
        pl={4}
        pr={4}
        direction="column"
        justifyContent="space-between"
        sx={{
          width: "100%",
          height: "100vh",
          background: "#212121",
          backgroundSize: "cover",
          overflow: "auto !important",
        }}
      >
        {children}
      </Stack>
      ;
    </React.Fragment>
  );
};

export default Body;
