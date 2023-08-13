import React from "react";
import { Card, CardContent } from "@mui/material";
const CardBox = ({ children }) => {
  return (
    <React.Fragment>
      <Card
        sx={{
          minHeight: "40px !important",
          verticalAlign: "center",
          marginBottom: "5px !important",
        }}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </React.Fragment>
  );
};

export default CardBox;
