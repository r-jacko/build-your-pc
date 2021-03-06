import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import Clear from "@mui/icons-material/Clear";
import Edit from "@mui/icons-material/Edit";
import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { deleteElement } from "../../../api";

const Row = ({ row, setCurrentId,elements,setElements, mode, listId }) => {
  const [open, setOpen] = useState(false);
  const handleDelete = async ()=>{
    await deleteElement(row._id)
    setElements(elements.filter((el)=>el._id !== row._id))
  }
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen((prevState) => !prevState)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>
          {!listId ? (<>
          <IconButton onClick={() => setCurrentId(row._id)} disabled={!mode}>
            <Edit />
          </IconButton>
          <IconButton onClick={handleDelete} disabled={!mode}>
            <Clear />
          </IconButton>
          </>) : null}
          
        </TableCell>
        <TableCell component="th" scope="row">
          {row.elementName}
        </TableCell>
        <TableCell align="right">{row.elementModel}</TableCell>
        <TableCell align="right">{row.category.charAt(0).toUpperCase()+row.category.slice(1)}</TableCell>
        <TableCell align="right">{row.quantity}</TableCell>
        <TableCell align="right">{row.price} $</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <Typography>{row.description}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Row;
