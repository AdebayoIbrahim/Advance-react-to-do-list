import React from "react";
import CardBox from "../shared/Card";
import { Typography, Checkbox } from "@mui/material";
const Todolists = ({ todos: { data } }) => {
  return (
    <CardBox>
      <Checkbox defaultChecked size="small" />
      <Typography component="p" variant="span">
        {data}
      </Typography>
    </CardBox>
  );
};

export default Todolists;
