import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import {Box, Collapse, IconButton, TableCell, TableRow, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react';


const SumUp = ({elements}) => {
  const [open, setOpen] = useState(false);
  const unique = new Set();
  const dataStructure = []
  const createUniqueValues = (elements)=>{
    console.log(elements);
    elements?.forEach((el)=>{
      unique.add(el.category)
    })
    
    unique.forEach((u)=>{
      let count = 0;
      let total = 0;
      elements.filter((el)=>el.category===u).forEach(el=>{
        count += parseInt(el.quantity);
        total += parseInt(el.quantity) * parseInt(el.price)
      })
      dataStructure.push({
        name:u,
        quantity:count,
        sum:total 
      })
    })
    let count = 0;
    let total = 0;
    dataStructure.forEach((el)=>{
      count += el.quantity;
      total += el.sum;
    })
    dataStructure.push({
      name: 'Total',
      quantity: count,
      sum: total
    })
    console.log(dataStructure);
  }
  useEffect(()=>{
    createUniqueValues(elements)
  },[elements, dataStructure.length])
  
  return ( 
    <>
    <TableRow sx={{"& > *": {borderBottom: "unset"}}}>
      <TableCell>
        <IconButton aria-label="expand row" size="small" onClick={()=>setOpen((prevState)=>!prevState)}>
          {open?<KeyboardArrowUp/>:<KeyboardArrowDown/>}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        Total
      </TableCell>
      <TableCell align="right">{
        dataStructure[dataStructure.length-1]?.quantity
      }</TableCell>
      <TableCell align="right"></TableCell>
    </TableRow>
    </>
   );
}
 
export default SumUp;