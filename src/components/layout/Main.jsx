import React, { useContext } from "react";
import { Typography, Box, Stack } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import bg from "../assets/all-from-one-place.jpg";
import { Month, Weeks } from "../../datearray.js";
import Todoform from "../Form/Todoform";
import { Tooltip } from "../fastcontent";
import TodoContext from "../../context/todoContext";
import Todolists from "../Todos/Todolists";

function Main() {
  const { todo } = useContext(TodoContext);
  //getting current date
  const dateValue = `${Weeks[new Date().getDay()]}, ${
    Month[new Date().getMonth()]
  } ${new Date().getDate()}`;

  //handling empty data

  return (
    <>
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
          background: `url(${bg})`,
          backgroundSize: "cover",
          overflow: "auto !important",
          borderRadius: "15px 15px 0 0 ",
        }}
      >
        <Box>
          <Stack direction="row" justifyContent="space-between">
            <Box sx={{ color: "white" }}>
              <Typography component="h1" fontSize={28} fontWeight={500}>
                My Day
              </Typography>{" "}
              <Typography variant="body2" mt={1}>
                {dateValue}
              </Typography>
            </Box>
            <Box>
              <MoreVert
                sx={{ transform: "rotate(90deg)", cursor: "pointer" }}
              />
            </Box>
          </Stack>
        </Box>
        {todo.length > 0 && (
          <Box
            sx={{
              height: "auto !important",
              overflow: "auto !important",
            }}
            mt={2.5}
            pb={1}
            mb={1}
          >
            {todo.map((todos, indx) => {
              return <Todolists key={indx} todos={todos} />;
            })}
          </Box>
        )}
        {/*          for handling empty task array */}
        {todo.length <= 0 && (
          <Box sx={{ alignSelf: "center" }}>
            <Tooltip />
          </Box>
        )}
        <Box>
          <Todoform />
        </Box>
      </Stack>
    </>
  );
}

export default Main;
