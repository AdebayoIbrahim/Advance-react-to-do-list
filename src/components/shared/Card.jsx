import React from "react";
import { Card, CardContent } from "@mui/material";
import { grey } from "@mui/material/colors";
const CardBox = ({ children }) => {
  return (
    <React.Fragment>
      <Card
        sx={{
          marginBottom: "5px !important",
          background: `${grey[900]}`,
          color: "white",
        }}
      >
        <CardContent sx={{ padding: ".4rem !important" }}>
          {children}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default CardBox;
