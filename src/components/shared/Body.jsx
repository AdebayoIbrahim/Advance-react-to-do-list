import React, { useState } from "react";
import { Stack, Box, Typography, Menu } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import DropdownContent from "../shared/dropdown.jsx";
const Body = ({ Starticon, titleText, children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          background: "#1e1e1e",
          overflow: "auto !important",
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
