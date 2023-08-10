import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import bg from "../assets/all-from-one-place.jpg";
import { Month, Weeks } from "../../datearray.js";
import Todoform from "../Form/Todoform";
import Tooltip from "../fastcontent";
function Main() {
  const dateValue = `${Weeks[new Date().getDay()]}, ${
    Month[new Date().getMonth()]
  } ${new Date().getDate()}`;
  return (
    <>
      <Stack
        p={5}
        direction="column"
        justifyContent="space-between"
        sx={{
          width: "100%",
          height: "100%",
          background: `url(${bg})`,
          backgroundSize: "cover",
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
          <Box>
            <MoreVert sx={{ transform: "rotate(90deg)" }} />
          </Box>
        </Stack>
        <Box sx={{ alignSelf: "center" }}>
          <Tooltip />
        </Box>
        {/* implementing the input search box */}
        <Box>
          <Todoform />
        </Box>
      </Stack>
    </>
  );
}

export default Main;
