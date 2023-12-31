import React, { useContext } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Box,
  Badge,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  FaSun,
  FaStar,
  FaHome,
  FaPaperclip,
  FaPersonBooth,
} from "react-icons/fa";
import TodoContext from "../../context/todoContext";

const ListText = styled(ListItemText)({
  color: "white",
  marginLeft: "-20px",
});
const Listitem = styled(ListItem)({
  borderRadius: "5px",
  "&:hover": { background: "rgb(61 56 56 / .8)" },
});
export default function Sidebar() {
  const { todo, important } = useContext(TodoContext);
  return (
    <Box
      pl={0.6}
      pr={0.6}
      pt={7}
      sx={{
        position: "relative",
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: "-5px",
          width: "100%",
          left: 0,
          height: "1px",
          background: "rgba(225,225,225,.7)",
        },
      }}
    >
      <List>
        <Listitem disablePadding={true} mt={2}>
          <ListItemButton component={Link} to="/">
            <ListItemIcon sx={{ color: "white" }}>
              <FaSun fontSize="16px" fill="cyan" />
            </ListItemIcon>
            <ListText primary="My Day" />
          </ListItemButton>
        </Listitem>
        <Listitem disablePadding={true} mt={2}>
          <ListItemButton component={Link} to="/important">
            <ListItemIcon sx={{ color: "white" }}>
              <FaStar fontSize="16px" fill="#ebda0b" />
            </ListItemIcon>
            <ListText primary="Important" />
            <Box component="span" sx={{ textAlign: "right" }}>
              {important.length < 1 ? null : (
                <Badge
                  badgeContent={important.length}
                  sx={{
                    color: "#e2e509",
                    "& .MuiBadge-badge": {
                      backgroundColor: "#686868",
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                    },
                  }}
                />
              )}
            </Box>
          </ListItemButton>
        </Listitem>
        <Listitem disablePadding={true} mt={2}>
          <ListItemButton component={Link} to="/planned">
            <ListItemIcon sx={{ color: "white" }}>
              <FaPaperclip fontSize="16px" fill="#1de11a" />
            </ListItemIcon>
            <ListText primary="Planned" />
          </ListItemButton>
        </Listitem>
        <Listitem disablePadding={true} mt={2}>
          <ListItemButton component={Link} to="/assigned">
            <ListItemIcon sx={{ color: "white" }}>
              <FaPersonBooth fontSize="16px" fill="#f74f0f" />
            </ListItemIcon>
            <ListText primary="Assigned to me" />
          </ListItemButton>
        </Listitem>
        <Listitem disablePadding={true} mt={2}>
          <ListItemButton component={Link} to="/tasks">
            <ListItemIcon sx={{ color: "white" }}>
              <FaHome fontSize="16px" fill="#215ce1" />
            </ListItemIcon>
            <ListText primary="Tasks" />
            {todo.length < 1 ? null : (
              <Box component="span" sx={{ textAlign: "right" }}>
                <Badge
                  badgeContent={todo.length}
                  sx={{
                    color: "#e2e509",
                    "& .MuiBadge-badge": {
                      backgroundColor: "#686868",
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                    },
                  }}
                />
              </Box>
            )}
          </ListItemButton>
        </Listitem>
      </List>
    </Box>
  );
}
