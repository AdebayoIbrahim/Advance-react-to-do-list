import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Body from "../components/shared/Body";
import { MoreVert } from "@mui/icons-material";
import Tooltip from "../components/fastcontent";
import Todoform from "../components/Form/Todoform";
function Important() {
  return (
    <Body>
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Typography component="h1" fontSize={28} fontWeight={500}>
              Important
            </Typography>{" "}
          </Box>
          <Box>
            <MoreVert sx={{ transform: "rotate(90deg)", cursor: "pointer" }} />
          </Box>
        </Stack>
      </Box>
      <Box sx={{ alignSelf: "center" }}>
        <Tooltip />
      </Box>
      <Box>
        <Todoform />
      </Box>
    </Body>
  );
}

export default Important;
