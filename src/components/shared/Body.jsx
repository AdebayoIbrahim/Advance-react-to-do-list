import React, { useContext, useEffect, useState } from "react";
import { Stack, Box, Typography, Menu } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import DropdownContent from "../shared/dropdown.jsx";
import TodoContext from "../../context/todoContext.jsx";
import { useResolvedPath } from "react-router-dom";
import bgArr from "../../data/bgArray.js";
const Body = ({ Starticon, titleText, children }) => {
  const { impcurrent, plannedCurrent } = useContext(TodoContext);
  const { pathname } = useResolvedPath();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // function-to-trigger-by-pathanames
  // useEffect(() => {
  //   setBypath();
  //   console.log(pathname);
  // }, []);

  const setBypath = () => {
    let locate;
    switch (pathname) {
      case "/important":
        console.log("here");
        return (locate = `url(${bgArr[impcurrent].image})`);
      case "/planned":
        return (locate = `url(${bgArr[plannedCurrent].image})`);
      default:
        locate = "#1e1e1e";
    }

    return locate;
  };

  return (
    <React.Fragment>
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
          background: setBypath(),
          overflow: "auto !important",
          backgroundSize: "cover",
          borderRadius: "10px 10px 0 0 ",
        }}
      >
        <Box>
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography component="h1" fontSize={25} fontWeight={400}>
                {<Starticon />}
                <span style={{ marginLeft: "1rem" }}>{titleText}</span>
              </Typography>{" "}
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
        {children}
      </Stack>
    </React.Fragment>
  );
};

export default Body;
