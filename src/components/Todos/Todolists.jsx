import React from "react";
import CardBox from "../shared/Card";
import { Typography } from "@mui/material";
const Todolists = ({ todos: { data } }) => {
  return (
    <CardBox>
      <Typography component="p" variant="span">
        {data}
      </Typography>
    </CardBox>
  );
};

export default Todolists;
