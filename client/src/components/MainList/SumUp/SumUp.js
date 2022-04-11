import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const SumUp = ({ elements }) => {
  const [open, setOpen] = useState(false);
  const unique = new Set();
  const [testDataStructure, setTestDataStructure] = useState([]);
  const [totalData, setTotalData] = useState({ quantity: 0, sum: 0 });
  const createUniqueValues = (elements) => {
    console.log("elementy", elements);
    if (elements.length > 0 && elements[0]?.elementName !== "None") {
      elements?.forEach((el) => {
        unique.add(el.category);
      });
      unique.forEach((u) => {
        let count = 0,
          total = 0;
        elements
          .filter((el) => el.category === u)
          .forEach((el) => {
            count += parseInt(el.quantity);
            total += parseInt(el.quantity) * parseInt(el.price);
          });
        setTestDataStructure((prevState) => [
          ...prevState,
          { name: u, quantity: count, sum: total },
        ]);
      });
      let count = 0,
        total = 0;
      elements.forEach((el) => {
        count += parseInt(el.quantity);
        total += parseInt(el.quantity) * parseInt(el.price);
      });
      setTotalData({ quantity: count, sum: total });
    }
  };
  useEffect(() => {
    setTestDataStructure([]);
    setTotalData({ quantity: 0, sum: 0 });
    createUniqueValues(elements);
  }, [elements]);

  if (elements.length === 1 && elements[0].elementName === "None") return null;

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
        <TableCell />
        <TableCell component="th" scope="row">
          Total
        </TableCell>
        <TableCell />
        <TableCell />
        <TableCell align="right">{totalData.quantity}</TableCell>
        <TableCell align="right">{totalData.sum} $</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit align="left">
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom>
                Categories summary
              </Typography>
              {testDataStructure.map((el) => (
                <Grid container key={el.name}>
                  <Grid item xs={4}>
                    <Typography>
                      {el.name.charAt(0).toUpperCase() + el.name.slice(1)}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>
                      {el.quantity > 1 ? `${el.quantity} items` : "1 item"}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>{el.sum} $</Typography>
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default SumUp;
