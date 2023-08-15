import React from "react";
import CardBox from "../shared/Card";
import { Stack, Typography, Checkbox } from "@mui/material";
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
          }}
        />
        <Typography pl={1} component="p" variant="span">
          {data}
        </Typography>
      </Stack>
    </CardBox>
  );
};

export default Todolists;
