import React from "react";
import CardBox from "../shared/Card";
import { Stack, Box, Typography, Checkbox } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { Star } from "@mui/icons-material";

const Todolists = ({ todos: { data } }) => {
  return (
    <CardBox>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <Checkbox
            size="small"
            color="success"
            sx={{
              display: "inline-block !important",
              padding: "0 !important",
              marginTop: "8px !important",
              color: cyan[200],
              "&.Mui-checked": {
                color: cyan[200],
              },
            }}
          />
          <Typography pl={1} component="p" variant="body2">
            {data}
          </Typography>
        </Stack>
        <Box>
          <Star
            sx={{
              fill: "transparent",
              stroke: "cyan",
              strokeWidth: 2,
              fontSize: ".95rem",
            }}
          />
        </Box>
      </Stack>
    </CardBox>
  );
};

export default Todolists;
