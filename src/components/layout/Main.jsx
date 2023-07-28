import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import bg from "../assets/Spider.jpg";
function Main() {
  const datearr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateValue = `${new Date().getDay()}, ${
    datearr[new Date().getMonth()]
  } ${new Date().getDate()}`;
  return (
    <>
      <Stack
        p={3}
        direction="column"
        justifyContent="space-between"
        sx={{
          width: "100%",
          height: "100%",
          background: `url(${bg})`,
          backgroundSize: "cover",
          display: "",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Typography component="h1" fontSize={28} fontWeight={500}>
              My Day
            </Typography>{" "}
            <Typography variant="body2" mt={1}>
              {dateValue}
            </Typography>
          </Box>
          <Box>Click</Box>
        </Stack>
        <Box sx={{ alignSelf: "center" }}>Content</Box>
        <Box>Input</Box>
      </Stack>
    </>
  );
}

export default Main;
