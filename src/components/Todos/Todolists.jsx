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
  const [Stroke, setStoke] = useState(false);
  const { deleteTodo, addImportant, editTodo } = useContext(TodoContext);

  const handleChecked = () => setDec(!decorate);
  //delete todo
  const deletetodo = () => {
    window.confirm("Are You Sure You Want to delete this item") &&
      deleteTodo(id);
  };

  //add to important-section
  const handleStar = () => {
    console.log(data, id);
    const added = {
      id,
      data,
    };
    addImportant(added);
    setStoke(!Stroke);
    alert("added To important");
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
              onClick={() => editTodo(data, id)}
            />
          </Box>
          <Star
            sx={iconstyle}
            style={{ stroke: Stroke ? "" : "cyan", fill: Stroke ? "cyan" : "" }}
            titleAccess="Star"
            onClick={handleStar}
          />
        </Stack>
      </Stack>
    </CardBox>
  );
};

export default Todolists;
