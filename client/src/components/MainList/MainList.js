import {
  Select,
  MenuItem,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
  Grid,
  Button,
  InputLabel,
  FormControl,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Row from "./Row/Row";
import SumUp from "./SumUp/SumUp";
import ShareModal from "./ShareModal/ShareModal";
import ExportPrintModal from "./ExportPrintModal/ExportPrintModal";
import SelectElement from "../Form/SelectElement/SelectElement";
import { getListByFilter } from "../../api";

const MainList = ({
  setCurrentId,
  elements,
  isLoading,
  setIsLoading,
  setElements,
}) => {
  const [mode, setMode] = useState(false);
  const [filterRule, setFilterRule] = useState("");
  const componentRef = useRef();
  const handleFilterBy = async (e) => {
    setFilterRule(e.target.value);
    if (e.target.value === "all") {
      setIsLoading(true);
    } else {
      try {
        const { data } = await getListByFilter(e.target.value);
        setElements(data.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  if (!elements?.length && !isLoading)
    return "Start creating your setup by adding a new element";

  return (
    <Grid container>
      <Grid item xs={12}>
        <TableContainer component={Paper} ref={componentRef}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>
                  <SelectElement
                    label="Filter by category"
                    handleChange={handleFilterBy}
                    isFilter
                    value={filterRule}
                  />
                </TableCell>
                <TableCell key="name">
                  <TableSortLabel>Name</TableSortLabel>
                </TableCell>
                <TableCell key="model" align="right">
                  <TableSortLabel>Model</TableSortLabel>
                </TableCell>
                <TableCell key="category" align="right">
                  <TableSortLabel>Category</TableSortLabel>
                </TableCell>
                <TableCell key="quantity" align="right">
                  <TableSortLabel>Quantity</TableSortLabel>
                </TableCell>
                <TableCell key="price" align="right">
                  <TableSortLabel>Price/item</TableSortLabel>
                </TableCell>
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
              <SumUp elements={elements} />
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} md={4}>
        <Button
          variant="outlined"
          onClick={() => {
            setCurrentId(null);
            setMode((prevState) => !prevState);
          }}
        >
          {mode ? `CANCEL` : `EDIT`}
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        <ExportPrintModal mode={mode} componentRef={componentRef} />
      </Grid>
      <Grid item xs={12} md={4}>
        <ShareModal mode={mode} />
      </Grid>
    </Grid>
  );
};

export default MainList;
