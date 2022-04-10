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
import { useNavigate } from "react-router-dom";
import TableHeader from "./TableHeader/TableHeader";

const MainList = ({
  setCurrentId,
  elements,
  isLoading,
  setIsLoading,
  setElements,
  user,
  listId,
}) => {
  const [mode, setMode] = useState(false);
  const [filterRule, setFilterRule] = useState("");
  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("name")
  const componentRef = useRef();
  const navigate = useNavigate();
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
  const handleSortRequest = (e, property)=>{
    const isAscending = (valueToOrderBy === property && orderDirection === "asc")
    setValueToOrderBy(property)
    setOrderDirection(isAscending ? 'desc' : 'asc')
  }
  const handleCreateOwnList = ()=>{
    setIsLoading(true)
    navigate("/")
  }
  const descendingComparator = (a,b,orderBy)=>{
    if(b[orderBy]<a[orderBy]){
      return -1
    } else if (b[orderBy]> a[orderBy]){
      return 1
    } else {
      return 0
    }
  }
  const getComparator = (order, orderBy)=>{
    return order === "desc" ? (a,b) => descendingComparator(a,b,orderBy) : (a,b)=> -descendingComparator(a,b,orderBy)
  }
  const sortedElements = (rowArray, comparator)=>{
    const stabilizedRowArray = rowArray.map((el,index)=>[el,index])
    stabilizedRowArray.sort((a,b)=>{
      const order = comparator(a[0],b[0])
      if(order !==0) return order
      return a[1] - b[1]
    })
    console.log(stabilizedRowArray);
    return stabilizedRowArray.map((el)=>el[0])
  }
  if (!elements?.length && !isLoading)
    return "Start creating your setup by adding a new element";

  return (
    <Grid container>
      <Grid item xs={12}>
        <TableContainer component={Paper} ref={componentRef}>
          <Table aria-label="collapsible table">
            <TableHeader handleChange={handleFilterBy} isFilter value={filterRule} handleSortRequest={handleSortRequest} valueToOrderBy={valueToOrderBy} orderDirection={orderDirection}/>
            <TableBody>
              {sortedElements(elements, getComparator(orderDirection, valueToOrderBy)).map((row) => (
                <Row
                  key={row._id}
                  row={row}
                  setCurrentId={setCurrentId}
                  mode={mode}
                  setIsLoading={setIsLoading}
                  listId={listId}
                />
              ))}
              <SumUp elements={elements} />
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} md={4}>
        {!listId ? (
          <Button
            variant="outlined"
            onClick={() => {
              setCurrentId(null);
              setMode((prevState) => !prevState);
            }}
          >
            {mode ? `CANCEL` : `EDIT`}
          </Button>
        ) : (<Button variant="outlined" onClick={handleCreateOwnList}>CREATE YOUR OWN LIST</Button>)}
      </Grid>
      <Grid item xs={12} md={4}>
        <ExportPrintModal mode={mode} componentRef={componentRef} />
      </Grid>
      <Grid item xs={12} md={4}>
        <ShareModal mode={mode} user={listId || user} />
      </Grid>
    </Grid>
  );
};

export default MainList;
