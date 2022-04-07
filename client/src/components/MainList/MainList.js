import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React, { useEffect } from 'react';
import Row from './Row/Row';
import { getList } from '../../api';

const MainList = () => {
   const elements = [
  {
    "_id": "1",
    "elementName": "Monitor",
    "category": "accesories",
    "elementModel": "Philips 196vla",
    "description": "Lorem lorem lorem lorem lorem lorem",
    "quantity": "2",
    "price": "200",
    "creator": "jacko"
  },
  {
    "_id": "2",
    "elementName": "CPU",
    "category": "core",
    "elementModel": "Intel i9-11800",
    "description": "Lorem lorem lorem lorem lorem lorem",
    "quantity": "1",
    "price": "500",
    "creator": "jacko"
  },
  {
    "_id": "3",
    "elementName": "GPU",
    "category": "core",
    "elementModel": "GeForce RTX 3060",
    "description": "Lorem lorem lorem lorem lorem lorem",
    "quantity": "1",
    "price": "1000",
    "creator": "jacko"
  },
  {
    "_id": "4",
    "elementName": "OS",
    "category": "software",
    "elementModel": "Windows 10",
    "description": "Lorem lorem lorem lorem lorem lorem",
    "quantity": "1",
    "price": "20",
    "creator": "jacko"
  },
  {
    "_id": "5",
    "elementName": "MousePad",
    "category": "others",
    "elementModel": "Razer XXL",
    "description": "Lorem lorem lorem lorem lorem lorem",
    "quantity": "1",
    "price": "50",
    "creator": "jacko"
  },
  {
    "_id": "6",
    "elementName": "Motherboard",
    "category": "core",
    "elementModel": "ASUS 480",
    "description": "Lorem lorem lorem lorem lorem lorem",
    "quantity": "1",
    "price": "200",
    "creator": "jacko"
  }
];
const loadData = async ()=>{
  try {
    const data = await getList();
    console.log(data);
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