import React, { useEffect, useState } from "react";
import { Button, Paper, Typography, Grid } from "@mui/material";
import SelectElement from "./SelectElement/SelectElement";
import Input from "./Input/Input";
import { createElement ,updateElement } from "../../api";
import AlertModal from "./AlertModal/AlertModal"

const initialState = {
  elementName: "",
  category: "",
  elementModel: "",
  description: "",
  quantity: "",
  price: "",
};

const Form = ({ currentId, setCurrentId, elements, setIsLoading, user }) => {
  const [elementData, setElementData] = useState(initialState);
  const [isAlert, setIsAlert] = useState(false)
  const [alertMessages, setAlertMessages] = useState([])
  const validateAlert = []
  const editedElement = currentId
    ? elements.find((element) => element._id === currentId)
    : null;
  const handleChange = (e) => {
    setElementData({ ...elementData, [e.target.name]: e.target.value });
  };
  const validateForm = ()=>{
    validateAlert.length=0
    if(elementData.elementName.trim().length > 30) {
      validateAlert.push("Name is to long, maximum length is 30 characters.")
    } else if (elementData.elementName.trim().length===0){
      validateAlert.push("Name doesn't exist.")
    } else {
      let validatedName = elementData.elementName.trim()
      setElementData({...elementData, elementName: validatedName})
    }
    if(!elementData.category.length) {
      validateAlert.push("Choose a category")
    }
    if(elementData.elementModel.trim().length > 30) {
      validateAlert.push("Model is to long, maximum length is 30 characters.")
    } else if (elementData.elementModel.trim().length===0){
      validateAlert.push("Model doesn't exist.")
    } else {
      let validatedModel = elementData.elementModel.trim()
      setElementData({...elementData, elementModel: validatedModel})
    }
    if(elementData.description.trim().length > 500) {
      validateAlert.push("Description is to long, maximum length is 500 characters.")
    } else if (elementData.description.trim().length===0){
      validateAlert.push("Description doesn't exist.")
    } else {
      let validatedDescription = elementData.description.trim()
      setElementData({...elementData, description: validatedDescription})
    }
    if(/^[+]?\d+([.]\d+)?$/.test(parseInt(elementData.quantity))){
      let validatedQuantity = parseInt(elementData.quantity)
      setElementData({...elementData, quantity: validatedQuantity})
    } else {
      validateAlert.push("Quantity is not a valid number")
    }
    if(/^[+]?\d+([.]\d+)?$/.test(parseInt(elementData.price))){
      let validatedPrice = parseInt(elementData.price)
      setElementData({...elementData, price: validatedPrice})
    } else {
      validateAlert.push("Price is not a valid number")
    }
    setAlertMessages([...validateAlert])
  }
  const handleClick = async () => {
    validateForm();
    if(validateAlert.length){
      return setIsAlert(true)
    }
    setIsLoading(true)
    if (currentId) {
      await updateElement(currentId, elementData);
    } else {
      await createElement({...elementData, creator: `${user}`});
    }
    handleClear();
  };
  const handleClear = () => {
    setCurrentId(null);
    setElementData(initialState);
  };
  useEffect(() => {
    if (editedElement) setElementData(editedElement);
  }, [editedElement]);
  useEffect(()=>{
    if (!currentId) handleClear()
  },[currentId])
  return (
    <Paper elevation={6}>
      <AlertModal isAlert={isAlert} setIsAlert={setIsAlert} alertMessages={alertMessages}/>
      <Typography variant="h5" textAlign="center">
        {currentId ? `Editing` : `Adding`} an element
      </Typography>
      <Grid container spacing={2}>
        <Input
          value={elementData.elementName}
          name="elementName"
          label="Name"
          handleChange={handleChange}
        />
        <Grid item xs={12} md={6}>
        <SelectElement
          value={elementData.category}
          name="category"
          label="Category"
          handleChange={handleChange}
          required
        />
        </Grid>
        <Input
          value={elementData.elementModel}
          name="elementModel"
          label="Model"
          handleChange={handleChange}
        />
        <Input
          value={elementData.description}
          name="description"
          label="Description"
          handleChange={handleChange}
          multiline
          rows={6}
        />
        <Input
          value={elementData.quantity}
          name="quantity"
          label="Quantity"
          half
          type="number"
          handleChange={handleChange}
        />
        <Input
          value={elementData.price}
          name="price"
          label="Price/item ($)"
          half
          type="number"
          handleChange={handleChange}
        />
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={handleClick}>
            {currentId? `CHANGE`:`ADD`}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" color="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Form;
