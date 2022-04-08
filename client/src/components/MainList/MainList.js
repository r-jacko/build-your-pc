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
import React, { useRef, useState } from "react";
import Row from "./Row/Row";
import SumUp from "./SumUp/SumUp";
import ShareModal from "./ShareModal/ShareModal";
import ExportPrintModal from "./ExportPrintModal/ExportPrintModal";

const MainList = ({ setCurrentId, elements, isLoading, setIsLoading }) => {
  const [mode, setMode] = useState(false);
  const componentRef = useRef();
  if (!elements?.length && !isLoading) return "Start creating your setup by adding a new element";

  return (
    <Grid container>
      <Grid item xs={12}>
        <TableContainer component={Paper} ref={componentRef}>
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
                  setIsLoading={setIsLoading}
                />
              ))}
              <SumUp elements={elements}/>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} md={4}>
        <Button
          variant="outlined"
          onClick={() => {
            setCurrentId(null)
            setMode((prevState) => !prevState)
          }}
        >
          {mode ? `CANCEL` : `EDIT`}
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
      <ExportPrintModal mode={mode} componentRef={componentRef}/>
      </Grid>
      <Grid item xs={12} md={4}>
        <ShareModal mode={mode} />
      </Grid>
    </Grid>
  );
};

export default MainList;
