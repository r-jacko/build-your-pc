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

const Row = ({ row, setCurrentId }) => {
  const [open, setOpen] = useState(false);
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
          <IconButton onClick={()=>setCurrentId(row._id)}>
            <Edit />
          </IconButton>
          <IconButton>
            <Clear />
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.elementName}
        </TableCell>
        <TableCell align="right">{row.elementModel}</TableCell>
        <TableCell align="right">{row.category}</TableCell>
        <TableCell align="right">{row.quantity}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
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
