import React, {useState} from 'react';
import {Button,  Paper, Typography, Grid } from '@mui/material';
import SelectElement from './SelectElement/SelectElement';
import Input from './Input/Input';

const initialState={elementName: "",
category:"",
elementModel:"",
description:"",
quantity: "",
price: ""}

const Form = () => {
  const [elementData, setElementData] = useState(initialState);
  const handleChange = (e)=>{
    setElementData({...elementData, [e.target.name]: e.target.value})
  }
  const handleClick = ()=>{
    console.log(elementData)
  }
  const handleClear = ()=>{
    setElementData(initialState)
  }
  return ( 
    <Paper elevation={6}>
      <Typography variant='h5' textAlign="center">Adding element</Typography>
      <Grid container spacing={2}>
      <Input value={elementData.elementName} name="elementName" label="Name" handleChange={handleChange}/>
      <SelectElement value={elementData.category} name="category" label="Category" handleChange={handleChange}/>
      <Input value={elementData.elementModel} name="elementModel" label="Model" handleChange={handleChange}/>
      <Input value={elementData.description} name="description" label="Description" handleChange={handleChange} multiline rows={6}/>
      <Input value={elementData.quantity} name="quantity" label="Quantity" half type="number" handleChange={handleChange}/>
      <Input value={elementData.price} name="price" label="Price" half type="number" handleChange={handleChange}/>
      <Grid item xs={6}>
      <Button variant='contained' color='primary' onClick={handleClick}>ADD</Button>
      </Grid>
      <Grid item xs={6}>
      <Button variant='outlined' color='secondary' onClick={handleClear}>Clear</Button>
      </Grid>
      </Grid>
    </Paper>
   );
}
 
export default Form;