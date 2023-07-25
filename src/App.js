import React from "react";
import "./main.css";
import { Box, Stack } from "@mui/material";
const App = () => {
  return (
    <React.Fragment>
      {/* <h1> Hello, {new Date().toUTCString()}</h1> */}
      <Box sx={{ width: "100%" }}>
        <Stack direction="row" gap={0} sx={{ width: "100%" }}>
          <Box flex={2} sx={{ background: "red", height: "100vh" }}>
            First
          </Box>
          <Box
            flex={8}
            sx={{ background: "magenta", width: "100%", height: "100vh" }}
          >
            Second
          </Box>
        </Stack>
      </Box>
    </React.Fragment>
  );
};
export default App;
