import React, { useContext, useState } from "react";
import CardBox from "../shared/Card";
import { Stack, Typography, Box, Checkbox } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { FaStar as Star } from "react-icons/fa";
import TodoContext from "../../context/todoContext";
import { cyan } from "@mui/material/colors";
const iconstyle = {
  fill: "transparent",
  strokeWidth: 2,
  fontSize: ".95rem",
  cursor: "pointer",
  stroke: "red",
  marginRight: "1.4rem",
};

const Importantlist = ({ todos: { data, id } }) => {
  const [decorate, setDec] = useState(false);
  const { deleteImp } = useContext(TodoContext);
  const handleChecked = () => setDec(!decorate);
  //delete todo
  const deletetodo = () => {
    window.confirm("Are You Sure You Want to delete this item") &&
      deleteImp(id);
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
          <Box mr={1} mt={0.3}>
            <Delete sx={iconstyle} titleAccess="Delete" onClick={deletetodo} />
          </Box>
          <Star
            style={{ fill: "#ebda0b", fontSize: ".95rem" }}
            titleAccess="Starred"
          />
        </Stack>
      </Stack>
    </CardBox>
  );
};

export default Importantlist;
