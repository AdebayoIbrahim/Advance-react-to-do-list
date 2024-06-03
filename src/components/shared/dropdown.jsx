import { Box } from "@mui/material";
import { Typography, Grid } from "@mui/material";
import bgArr from "../../data/bgArray";
import { useContext, useState } from "react";
import TodoContext from "../../context/todoContext";
const DropdownContent = ({ close }) => {
  // calling_defined_context

  const { handleBg } = useContext(TodoContext);
  // state-to-toggle-current-clicked
  const [current, setCurrent] = useState(`image1`);

  // declare_bg_changes
  const handleClick = (payload) => {
    const { id } = payload;
    console.log(id);

    // change-current-background
    handleBg(Number(id - 1));
    setCurrent(`image${id}`);
    // close();
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
                  className={`themes_active ${current === `image${bg.id}` ? "act_current" : ""}`}
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
