import React from "react";
import { Box } from "@mui/material";
import { Typography, Grid } from "@mui/material";
import bgArr from "../../data/bgArray";
import { useContext, useMemo, useState } from "react";
import TodoContext from "../../context/todoContext";
import { useResolvedPath } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const DropdownContent = ({ close }) => {
  // calling_defined_context

  const { current, handleBg, Switchimpbg, Switchplannedbg } =
    useContext(TodoContext);
  // state-to-toggle-current-clicked

  const [currentS, setCurrent] = useState(`image${current}`);
  const [impCurrentS, setimpCurr] = useState(`image2`);
  const [plannedS, setPlanned] = useState("image3");

  const { pathname } = useResolvedPath();
  // funtion-to-trigger-bg-change-by-current-url

  const CheckPath = () => {
    let status;
    switch (pathname) {
      case "/":
        status = currentS;
        break;
      case "/important":
        status = impCurrentS;
        break;
      case "/planned":
        status = plannedS;
        break;
      default:
        status = currentS;
    }

    return status;
  };
  const getcurr = CheckPath();
  // console.log(getcurr);

  // declare_bg_changes
  // console.log(pathname);
  const handleClick = (payload) => {
    const { id } = payload;
    console.log(id);

    // change-current-background- based on path
    const path = window.location.pathname;
    // console.log(path);
    switch (path) {
      case "/":
        handleBg(Number(id - 1));
        setCurrent(`image${id}`);
        break;
      case "/important":
        Switchimpbg(Number(id - 1));
        setimpCurr(`image${id}`);
        break;
      case "/planned":
        Switchplannedbg(Number(id - 1));
        setPlanned(`image${id}`);
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ textAlign: "left", color: "#ffff" }} variant="body2">
        Theme
      </Typography>
      <Box pt={2}>
        {/* background-switch */}
        <Grid container flexWrap={"wrap"} spacing={1}>
          {bgArr.map((bg, _index) => {
            // content-box
            return (
              <Grid
                item
                key={_index}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  handleClick(bg);
                }}
              >
                <Box
                  className={`themes_active ${
                    getcurr === `image${Number(bg.id - 1)}` ? "act_current" : ""
                  }`}
                  sx={{ width: "65px", height: "65px" }}
                >
                  <LazyLoadImage
                    src={bg.image}
                    alt={bg.title}
                    effect="blur"
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "inherit" }}
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default DropdownContent;
