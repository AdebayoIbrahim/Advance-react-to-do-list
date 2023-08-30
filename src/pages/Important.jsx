import React, { useContext } from "react";
import { Typography, Box, Stack } from "@mui/material";
import Body from "../components/shared/Body";
import { MoreVert } from "@mui/icons-material";
import { FaStar } from "react-icons/fa";
import { Importanttip } from "../components/fastcontent";
import Todoform from "../components/Form/Todoform";
import TodoContext from "../context/todoContext";
function Important() {
  const { important } = useContext(TodoContext);

  return (
    <Body>
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Typography component="h1" fontSize={25} fontWeight={400}>
              <FaStar fill="#ebda0b" fontSize="20px" />
              <span style={{ marginLeft: "1rem" }}>Important</span>
            </Typography>{" "}
          </Box>
          <Box>
            <MoreVert sx={{ transform: "rotate(90deg)", cursor: "pointer" }} />
          </Box>
        </Stack>
      </Box>
      {important.length <= 0 && (
        <Box sx={{ alignSelf: "center", color: "#ebda0b" }}>
          <Importanttip />
        </Box>
      )}
      <Box>
        <Todoform name="edit" />
      </Box>
    </Body>
  );
}

Important.defaultProps = {
  aspect: "important",
};
export default Important;
