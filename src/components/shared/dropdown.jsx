import { Box, colors } from "@mui/material";
import { Typography, Grid } from "@mui/material";
import bgArr from "../../data/bgArray";
const Dropdowncontent = () => {
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
              <Grid item>
                <Box sx={{ width: "60px", height: "60px" }}>
                  <img
                    src={bg.image}
                    alt={bg.title}
                    width={"100%"}
                    height={"100%"}
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

export default Dropdowncontent;
