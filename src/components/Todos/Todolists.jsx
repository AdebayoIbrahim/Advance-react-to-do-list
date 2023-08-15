import React from "react";
import CardBox from "../shared/Card";
import { Stack, Typography, Checkbox } from "@mui/material";
import { cyan } from "@mui/material/colors";
const Todolists = ({ todos: { data } }) => {
  return (
    <CardBox>
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
    </CardBox>
  );
};

export default Todolists;
