import React, { useContext, useState } from "react";
import CardBox from "../shared/Card";
import { Stack, Box, Typography, Checkbox } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { Star, Edit, Delete } from "@mui/icons-material";
import TodoContext from "../../context/todoContext";

const iconstyle = {
  fill: "transparent",
  strokeWidth: 2,
  fontSize: ".95rem",
  cursor: "pointer",
};

const Todolists = ({ todos: { data, id } }) => {
  const [decorate, setDec] = useState(false);
  const { deleteTodo } = useContext(TodoContext);

  const handleChecked = () => setDec(!decorate);
  //delete todo
  const deletetodo = () => {
    deleteTodo(id);
  };
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
            {data}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box mr={5} mt={0.3}>
            <Delete
              sx={iconstyle}
              style={{ marginRight: "1.4rem", stroke: "red" }}
              titleAccess="Delete"
              onClick={deletetodo}
            />
            <Edit
              sx={iconstyle}
              style={{ stroke: "#90f10a" }}
              titleAccess="Edit"
            />
          </Box>
          <Star sx={iconstyle} style={{ stroke: "cyan" }} titleAccess="Star" />
        </Stack>
      </Stack>
    </CardBox>
  );
};

export default Todolists;
