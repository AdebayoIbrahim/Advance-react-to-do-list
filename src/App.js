import React from "react";
import "./main.css";
import { Box, Stack } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Important from "./pages/Important";
import Sidebar from "./components/layout/Sidebar";
const App = () => {
  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <Stack direction="row" gap={0} sx={{}}>
          <Box flex={2} sx={{ background: "#212121", height: "100vh" }}>
            <Sidebar />
          </Box>
          <Box
            flex={7}
            sx={{
              width: "100%",
              height: "100vh",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/important" element={<Important />} />
            </Routes>
          </Box>
        </Stack>
      </Box>
    </React.Fragment>
  );
};
export default App;
