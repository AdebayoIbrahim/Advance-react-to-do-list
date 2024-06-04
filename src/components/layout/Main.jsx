import React, { useContext } from "react";
import { Typography, Box, MenuItem, Stack, Menu } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { Month, Weeks } from "../../datearray.js";
import Todoform from "../Form/Todoform";
import { Tooltip } from "../fastcontent";
import TodoContext from "../../context/todoContext";
import Todolists from "../Todos/Todolists";
import DropdownContent from "../shared/dropdown.jsx";
import bgArr from "../../data/bgArray.js";
function Main() {
  const { todo, current } = useContext(TodoContext);
  //getting current date
  const dateValue = `${Weeks[new Date().getDay()]}, ${
    Month[new Date().getMonth()]
  } ${new Date().getDate()}`;

  //handling empty data

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          background: `url(${bgArr[current].image})`,
          backgroundSize: "cover",
          overflow: "auto !important",
          borderRadius: "10px 10px 0 0 ",
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
              {/* clicking-menu-drop-down */}

              <Box
                sx={{ color: "#ffff", background: "transparent" }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreVert
                  sx={{ transform: "rotate(90deg)", cursor: "pointer" }}
                />
              </Box>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Box sx={{ width: "250px" }} p={2}>
                  <DropdownContent close={handleClose} />
                </Box>
              </Menu>
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
