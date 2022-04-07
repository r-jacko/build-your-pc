import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import Row from "./Row/Row";
import ShareModal from "./ShareModal/ShareModal";

const MainList = ({ setCurrentId, elements }) => {
  const [mode, setMode] = useState(false);
  if (!elements) return "Start creating your setup by adding a new element";

  return (
    <Grid container>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell>Name</TableCell>
                <TableCell align="right">Model</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price/item</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {elements.map((row) => (
                <Row
                  key={row._id}
                  row={row}
                  setCurrentId={setCurrentId}
                  mode={mode}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} md={4}>
        <Button
          variant="outlined"
          onClick={() => setMode((prevState) => !prevState)}
        >
          {mode ? `CANCEL` : `EDIT`}
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        <Button variant="outlined" disabled={mode}>
          EXPORT/PRINT
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        <ShareModal mode={mode} />
      </Grid>
    </Grid>
  );
};

export default MainList;
