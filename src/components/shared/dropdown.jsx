import { Box } from "@mui/material";
import { Typography, Grid } from "@mui/material";
import bgArr from "../../data/bgArray";
import { useContext, useState } from "react";
import TodoContext from "../../context/todoContext";
import { useResolvedPath } from "react-router-dom";
const DropdownContent = ({ close }) => {
  // calling_defined_context

  const { handleBg, Switchimpbg } = useContext(TodoContext);
  // state-to-toggle-current-clicked
  const [current, setCurrent] = useState(`image1`);
  const [impCurrent, setimpCurr] = useState(`image2`);
  const [planned, setPlanned] = useState("image3");

  const { pathname } = useResolvedPath();
  // declare_bg_changes
  // console.log(pathname);
  const handleClick = (payload) => {
    const { id } = payload;
    console.log(id);

    // change-current-background
    handleBg(Number(id - 1));
    setCurrent(`image${id}`);
    // close();
  };

  // funtion-to-trigger-bg-change-by-current-url
  function CheckPath() {
    let status;
    switch (pathname) {
      case "/":
        status = current;
        break;
      case "/important":
        status = impCurrent;
        break;
      case "/planned":
        status = planned;
        break;
      default:
        status = current;
    }

    return status;
  }

  const getcurr = CheckPath();
  console.log(getcurr);

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
                    getcurr === `image${bg.id}` ? "act_current" : ""
                  }`}
                  sx={{ width: "65px", height: "65px" }}
                >
                  <img
                    src={bg.image}
                    alt={bg.title}
                    width={"100%"}
                    height={"100%"}
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
