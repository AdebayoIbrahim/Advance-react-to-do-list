import React, { useContext } from "react";
import { Box } from "@mui/material";
import Body from "../components/shared/Body";
import { Importanttip } from "../components/fastcontent";
import Importantlist from "../components/Todos/importantTodo";
import Todoform from "../components/Form/Todoform";
import TodoContext from "../context/todoContext";
import { CiStar } from "react-icons/ci";
function Important() {
  const { important } = useContext(TodoContext);

  const fillIcon = () => {
    return <CiStar fontSize="20px" fill="#ebda0b" />;
  };
  const title = `Important`;
  return (
    <Body Starticon={fillIcon} titleText={title}>
      {important.length > 0 && (
        <Box
          sx={{
            height: "auto !important",
            overflow: "auto !important",
          }}
          mt={2.5}
          pb={1}
          mb={1}
        >
          {important.map((todos, indx) => {
            return <Importantlist key={indx} todos={todos} />;
          })}
        </Box>
      )}
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

export default Important;
