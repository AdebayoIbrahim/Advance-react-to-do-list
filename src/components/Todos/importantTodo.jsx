import React, { useContext } from "react";
import CardBox from "../shared/Card";
import { Stack, Typography } from "@mui/material";
import { Star, Delete } from "@mui/icons-material";
import TodoContext from "../../context/todoContext";

const Importantlist = () => {
  const { important, deleteTodo } = useContext(TodoContext);
  return (
    <CardBox>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <Checkbox
            size="small"
            color="success"
            className="check-box"
            onClick={handleChecked}
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
          <Typography
            pl={1}
            component="p"
            variant="body2"
            className="checked"
            sx={{ textDecoration: decorate && "line-through" }}
          >
            {important}
          </Typography>
        </Stack>
      </Stack>
    </CardBox>
  );
};

export default Importantlist;
