import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import {Box, Collapse, IconButton, Table, TableBody, TableCell, TableRow, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react';


const SumUp = ({elements}) => {
  const [open, setOpen] = useState(false);
  const unique = new Set();
  const [testDataStructure, setTestDataStructure] = useState([]);
  const createUniqueValues = (elements)=>{
    elements?.forEach((el)=>{
      unique.add(el.category)
    })
    unique.forEach((u)=>{
      let count = 0, total = 0;
      elements.filter((el)=>el.category===u).forEach(el=>{
        count += parseInt(el.quantity);
        total += parseInt(el.quantity) * parseInt(el.price)
      })
      setTestDataStructure((prevState)=>[...prevState, {name:u, quantity: count, sum:total}])
    })
    let count = 0, total = 0;
    testDataStructure.forEach((el)=>{
      count += el.quantity;
      total += el.sum;
    })
    // setTestDataStructure((prevState)=>[...prevState, {name:'Total', quantity:count, sum:total}])
  }
  useEffect(()=>{
    setTestDataStructure([])
    createUniqueValues(elements)
  },[elements])
  
  return ( 
    <>
    {elements.length===1 && elements[0].elementName==="None" ? null :(
      <>
    <TableRow sx={{"& > *": {borderBottom: "unset"}}}>
      <TableCell>
        <IconButton aria-label="expand row" size="small" onClick={()=>setOpen((prevState)=>!prevState)}>
          {open?<KeyboardArrowUp/>:<KeyboardArrowDown/>}
        </IconButton>
      </TableCell>
      <TableCell/>
      <TableCell component="th" scope="row">
        {/* {testDataStructure[testDataStructure.length-1]?.name} */}
        Total
      </TableCell>
      <TableCell/>
      <TableCell/>
      <TableCell align="right">{
        // testDataStructure[testDataStructure.length-1]?.quantity
        'HWDP'
      }</TableCell>
      <TableCell align="right">{'CENA'}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell colSpan={7} >
        <Collapse in={open} timeout="auto" unmountOnExit align="left">
                {testDataStructure.map((el)=>(
                  <TableRow key={el.name}>
                    <TableCell component="th" scope="row">
                      {el.name.charAt(0).toUpperCase()+el.name.slice(1)}
                    </TableCell>
                    <TableCell align="right">{el.quantity}</TableCell>
                    <TableCell align="right">{el.sum} $</TableCell>
                  </TableRow>
                ))}
        </Collapse>
        </TableCell>
    </TableRow>
    </>
    )}
    </>
   );
}
 
export default SumUp;