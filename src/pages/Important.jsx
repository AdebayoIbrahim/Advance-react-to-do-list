import React, { useContext } from "react";
import { Typography, Box, Stack } from "@mui/material";
import Body from "../components/shared/Body";
import { MoreVert } from "@mui/icons-material";
import Tooltip from "../components/fastcontent";
import Todoform from "../components/Form/Todoform";
import TodoContext from "../context/todoContext";
function Important() {
  const { important } = useContext(TodoContext);
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
      {important.length <= 0 && (
        <Box sx={{ alignSelf: "center" }}>
          <Tooltip />
        </Box>
      )}
      <Box>
        <Todoform />
      </Box>
    </Body>
  );
}

export default Important;
