import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Row from './Row/Row';
import { getList } from '../../api';

const MainList = () => {
  const [elements, setElements] = useState();
  const loadData = async ()=>{
  try {
    const {data} = await getList();
    setElements(data.data)
  } catch (error) {
    console.log(error);
  }
}
  useEffect(()=>{
    loadData();
  },[])
  if(!elements) return 'Start creating your setup by adding a new element';


  return ( 
  <TableContainer component={Paper}>
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell/>
          <TableCell>Name</TableCell>
          <TableCell align='right'>Model</TableCell>
          <TableCell align='right'>Category</TableCell>
          <TableCell align='right'>Quantity</TableCell>
          <TableCell align='right'>Price/item</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {elements.map((row)=>(
          <Row key={row._id} row={row}/>
        ))}
      </TableBody>
    </Table>
  </TableContainer> );
}
 
export default MainList;