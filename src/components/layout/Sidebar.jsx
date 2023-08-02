import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Box,
} from "@mui/material";
import { FaSun } from "react-icons/fa";

const ListText = styled(ListItemText)({
  color: "white",
  marginLeft: "-20px",
  fontSize: "10px ",
});
const Listitem = styled(ListItem)({
  borderRadius: "5px",
  "&:hover": { background: "rgb(61 56 56 / .8)" },
});
export default function Sidebar() {
  return (
    <Box pl={0.6} pr={0.6} pt={2}>
      <List>
        <Listitem disablePadding={true}>
          <ListItemButton component="a" href="#">
            <ListItemIcon sx={{ color: "white" }}>
              <FaSun fontSize="small" />
            </ListItemIcon>
            <ListText primary="My Day" />
          </ListItemButton>
        </Listitem>
      </List>
    </Box>
  );
}
