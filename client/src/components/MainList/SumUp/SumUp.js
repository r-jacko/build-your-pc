import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import {Collapse, IconButton, TableCell, TableRow} from '@mui/material'
import React, {useEffect, useState} from 'react';


const SumUp = ({elements}) => {
  const [open, setOpen] = useState(false);
  const unique = new Set();
  const [testDataStructure, setTestDataStructure] = useState([]);
  const [totalData, setTotalData] = useState({quantity:0, sum:0})
  const createUniqueValues = (elements)=>{
    console.log('elementy',elements);
    if(elements.length>0 && elements[0]?.elementName !== "None"){
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
    console.log('struktura',testDataStructure)
    testDataStructure.forEach((el)=>{
      count += el.quantity;
      total += el.sum;
    })
    setTotalData({quantity:count, sum: total})
  }
    
  }
  useEffect(()=>{
    setTestDataStructure([])
    setTotalData({quantity:0, sum:0})
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
        Total
      </TableCell>
      <TableCell/>
      <TableCell/>
      <TableCell align="right">{
        totalData.quantity
        }</TableCell>
      <TableCell align="right">{totalData.sum} $</TableCell>
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