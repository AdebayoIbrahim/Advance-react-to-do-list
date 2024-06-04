import React, { useContext } from "react";
import { Box } from "@mui/material";
import Body from "../components/shared/Body";
import { Plannedtip } from "../components/fastcontent";
import Importantlist from "../components/Todos/importantTodo";
import Todoform from "../components/Form/Todoform";
import TodoContext from "../context/todoContext";
import { RiTodoLine } from "react-icons/ri";
function Planned() {
  const { planned } = useContext(TodoContext);

  const fillIcon = () => {
    return <RiTodoLine fontSize="20px" fill="#1de11a" />;
  };
  const title = `Planned`;
  return (
    <Body Starticon={fillIcon} titleText={title}>
      {planned.length > 0 && (
        <Box
          sx={{
            height: "auto !important",
            overflow: "auto !important",
          }}
          mt={2.5}
          pb={1}
          mb={1}
        >
          {planned.map((todos, indx) => {
            return <Importantlist key={indx} todos={todos} />;
          })}
        </Box>
      )}
      {planned.length <= 0 && (
        <Box sx={{ alignSelf: "center", color: "#ebda0b" }}>
          <Plannedtip />
        </Box>
      )}
      <Box>
        <Todoform name="edit" />
      </Box>
    </Body>
  );
}

export default Planned;
