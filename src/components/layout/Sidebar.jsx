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
  Stack,
  Avatar,
  Typography,
} from "@mui/material";
import { Link, useResolvedPath } from "react-router-dom";
import { GoSun, GoHome } from "react-icons/go";
import { RiTodoLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import TodoContext from "../../context/todoContext";
import Pic from "../../components/assets/IMG_20230802_165219_3~2.jpg";
import { CiStar } from "react-icons/ci";

const ListText = styled(ListItemText)({
  color: "white",
  marginLeft: "-20px",
});
const Listitem = styled(ListItem)({
  borderRadius: "5px",
  marginTop: ".4rem",
  "&:hover": { background: "rgb(61 56 56 / .8)" },
});
export default function Sidebar() {
  const { todo, important } = useContext(TodoContext);
  const { pathname } = useResolvedPath();
  // console.log(pathname);
  return (
    <Box
      pl={0.8}
      pr={0.6}
      pt={4}
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
      {/* display-user-profile-pic and name if exist */}
      <Stack
        direction={"row"}
        justifyContent={"start"}
        alignItems={"center"}
        gap={2}
        pl={1.5}
      >
        {/* image_user_avater */}
        <Avatar src={Pic} sx={{ width: "60px", height: "60px" }} />

        <Stack
          mt={1.8}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"start"}
          gap={0.1}
        >
          <Typography variant="body2">Abdulmumeen Ibrahim</Typography>

          {/* check if user is online or not */}
          <Stack
            direction={"row"}
            justifyContent={"start"}
            gap={0.1}
            alignItems={"center"}
          >
            <div
              className="badge_status"
              style={{ background: navigator.onLine ? "green" : "#c3c330" }}
              // sx={{ backgroundColor: "red" }}
            ></div>
            <Typography variant="caption">
              {navigator.onLine ? "You are online" : "You are offline  ..."}
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <List sx={{ pt: 2 }}>
        <Listitem
          disablePadding={true}
          mt={1}
          className={`${pathname === "/" && "active_nav"}`}
        >
          <ListItemButton component={Link} to="/">
            <ListItemIcon sx={{ color: "white" }}>
              <GoSun fontSize="17px" fill="cyan" />
            </ListItemIcon>
            <ListText primary="My Day" />
          </ListItemButton>
        </Listitem>
        <Listitem
          disablePadding={true}
          mt={3}
          className={`${pathname === "/important" && "active_nav"}`}
        >
          <ListItemButton component={Link} to="/important">
            <ListItemIcon sx={{ color: "white" }}>
              <CiStar fontSize="20px" fill="#ebda0b" />
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
        <Listitem
          disablePadding={true}
          mt={3}
          className={`${pathname === "/planned" && "active_nav"}`}
        >
          <ListItemButton component={Link} to="/planned">
            <ListItemIcon sx={{ color: "white" }}>
              <RiTodoLine fontSize="17px" fill="#1de11a" />
            </ListItemIcon>
            <ListText primary="Planned" />
          </ListItemButton>
        </Listitem>
        <Listitem
          disablePadding={true}
          mt={3}
          className={`${pathname === "/assigned" && "active_nav"}`}
        >
          <ListItemButton component={Link} to="/assigned">
            <ListItemIcon sx={{ color: "white" }}>
              <CiUser fontSize="20px" fill="#f74f0f" />
            </ListItemIcon>
            <ListText primary="Assigned to me" />
          </ListItemButton>
        </Listitem>
        <Listitem
          disablePadding={true}
          mt={3}
          className={`${pathname === "/tasks" && "active_nav"}`}
        >
          <ListItemButton component={Link} to="/tasks">
            <ListItemIcon sx={{ color: "white" }}>
              <GoHome fontSize="20px" fill="#215ce1" />
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
